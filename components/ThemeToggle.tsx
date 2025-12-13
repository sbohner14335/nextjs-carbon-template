"use client";

import { HeaderGlobalAction } from "@carbon/react";
import { Asleep, Light } from "@carbon/icons-react";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    // Use resolvedTheme to get the actual applied theme (handles "system" -> "light"/"dark")
    const isDark = useMemo(
        () => resolvedTheme === "g100" || resolvedTheme === "dark",
        [resolvedTheme],
    );

    const toggleTheme = () => {
        setTheme(isDark ? "g10" : "g100");
    };

    // Don't render until mounted to avoid hydration mismatch
    if (!mounted) return null;

    return (
        <HeaderGlobalAction
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            tooltipAlignment="end"
            onClick={toggleTheme}
        >
            {isDark ? <Light size={20} /> : <Asleep size={20} />}
        </HeaderGlobalAction>
    );
}

