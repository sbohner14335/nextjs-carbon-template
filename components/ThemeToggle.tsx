"use client";

import { HeaderGlobalAction } from "@carbon/react";
import { Asleep, Light } from "@carbon/icons-react";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    const currentTheme = useMemo<"g10" | "g100">(
        () => (theme === "g100" ? "g100" : "g10"),
        [theme],
    );

    const toggleTheme = () => {
        setTheme(currentTheme === "g10" ? "g100" : "g10");
    };

    // Don't render until mounted to avoid hydration mismatch
    if (!mounted) return null;

    return (
        <HeaderGlobalAction
            aria-label={currentTheme === "g10" ? "Switch to dark theme" : "Switch to light theme"}
            tooltipAlignment="end"
            onClick={toggleTheme}
        >
            {currentTheme === "g10" ? <Asleep size={20} /> : <Light size={20} />}
        </HeaderGlobalAction>
    );
}
