"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            storageKey="carbon-theme"
            themes={["g10", "g100"]}
            value={{ g10: "cds--g10", g100: "cds--g100", light: "cds--g10", dark: "cds--g100" }}
        >
            {children}
        </ThemeProvider>
    );
}
