"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <button className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground">
                <span className="sr-only">Toggle theme</span>
                <div className="w-5 h-5" />
            </button>
        )
    }

    return (
        <button
            className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground hover:text-foreground"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Moon className="w-5 h-5" />
            ) : (
                <Sun className="w-5 h-5" />
            )}
        </button>
    )
}
