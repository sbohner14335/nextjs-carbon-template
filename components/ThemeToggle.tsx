"use client";

import { HeaderGlobalAction } from "@carbon/react";
import { Asleep, Light } from "@carbon/icons-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"g10" | "g100">("g10");
    const [mounted, setMounted] = useState(false);

    // Initialize theme from localStorage after component mounts (client-side only)
    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("carbon-theme") as "g10" | "g100" | null;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "g10" ? "g100" : "g10";
        setTheme(newTheme);
        // Save to localStorage
        localStorage.setItem("carbon-theme", newTheme);
    };

    useEffect(() => {
        if (!mounted) return; // Don't run on server-side

        // Remove any existing Carbon theme classes and add the current one
        document.body.classList.remove("cds--g10", "cds--g100");
        document.body.classList.add(`cds--${theme}`);
    }, [theme, mounted]);

    // Don't render until mounted to avoid hydration mismatch
    if (!mounted) return null;

    return (
        <HeaderGlobalAction
            aria-label={theme === "g10" ? "Switch to dark theme" : "Switch to light theme"}
            tooltipAlignment="end"
            onClick={toggleTheme}
        >
            {theme === "g10" ? <Asleep size={20} /> : <Light size={20} />}
        </HeaderGlobalAction>
    );
}
