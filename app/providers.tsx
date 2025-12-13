"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="g10"
            enableSystem={false}
            storageKey="carbon-theme"
            value={{ g10: "cds--g10", g100: "cds--g100" }}
        >
            {children}
        </ThemeProvider>
    );
}
