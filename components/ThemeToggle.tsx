"use client";

import { HeaderGlobalAction } from "@carbon/react";
import { Asleep, Light } from "@carbon/icons-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [theme, setTheme] = useState("g10");

    const toggleTheme = () => {
        const newTheme = theme === "g10" ? "g100" : "g10";
        setTheme(newTheme);
        document.body.setAttribute("class", `cds-theme--${newTheme}`);
        // Dispatch a custom event for Theme provider to listen to if needed, 
        // or just rely on body class if global styles handle it.
    };

    useEffect(() => {
        // Initial set
        document.body.setAttribute("class", `cds-theme--${theme}`);
    }, [theme]);

    // Use a ref or simple document query to find the correct Theme provider content if needed
    // For now, toggling the body class is the standard Carbon way for global theme

    return (
        <HeaderGlobalAction
            aria-label="Toggle Theme"
            tooltipAlignment="end"
            onClick={toggleTheme}
        >
            {theme === "g10" ? <Asleep size={20} /> : <Light size={20} />}
        </HeaderGlobalAction>
    );
}
