"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

type ThemeProviderProps = {
    attribute?: "class" | "data-theme";
    defaultTheme?: string;
    enableSystem?: boolean;
    storageKey?: string;
    value?: Record<string, string>;
    children: React.ReactNode;
};

type ThemeContextValue = {
    theme?: string;
    resolvedTheme?: string;
    themes: string[];
    setTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function buildScriptContent(params: {
    defaultTheme: string;
    storageKey: string;
    value: Record<string, string>;
}) {
    const { defaultTheme, storageKey, value } = params;
    const themeMap = JSON.stringify(value);

    return `(() => {
  try {
    const themeMap = ${themeMap};
    const stored = window.localStorage.getItem(${JSON.stringify(storageKey)}) ?? ${JSON.stringify(defaultTheme)};
    const nextTheme = themeMap[stored] ?? stored;
    const classList = Object.values(themeMap);
    const targets = [document.documentElement, document.body];

    targets.forEach((target) => {
      classList.forEach((themeClass) => target.classList.remove(themeClass));
      target.classList.add(nextTheme);
    });
  } catch (error) {
    console.error("Theme initialization failed", error);
  }
})();`;
}

function applyThemeClass({
    theme,
    value,
}: {
    theme: string;
    value: Record<string, string>;
}) {
    const mappedTheme = value[theme] ?? theme;
    const classList = Object.values(value);
    const targets = [document.documentElement, document.body];

    targets.forEach((target) => {
        classList.forEach((themeClass) => target.classList.remove(themeClass));
        target.classList.add(mappedTheme);
    });
}

export function ThemeProvider({
    attribute = "class",
    defaultTheme = "light",
    storageKey = "theme",
    value = {},
    children,
}: ThemeProviderProps) {
    const [theme, setThemeState] = useState<string | undefined>();

    const themes = useMemo(
        () => Object.keys(value).length > 0 ? Object.keys(value) : [defaultTheme],
        [defaultTheme, value],
    );

    const setTheme = useCallback(
        (nextTheme: string) => {
            setThemeState(nextTheme);
            window.localStorage.setItem(storageKey, nextTheme);
            applyThemeClass({ theme: nextTheme, value });
        },
        [storageKey, value],
    );

    useEffect(() => {
        const storedTheme = window.localStorage.getItem(storageKey) ?? defaultTheme;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setThemeState(storedTheme);
        applyThemeClass({ theme: storedTheme, value });
    }, [defaultTheme, storageKey, value]);

    const contextValue = useMemo<ThemeContextValue>(
        () => ({ theme, resolvedTheme: theme, themes, setTheme }),
        [setTheme, theme, themes],
    );

    return (
        <>
            {attribute === "class" && (
                <script dangerouslySetInnerHTML={{ __html: buildScriptContent({ defaultTheme, storageKey, value }) }} />
            )}
            <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
        </>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
}
