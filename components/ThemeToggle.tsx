"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <button className="btn btn-outline" style={{ padding: '8px', minWidth: '40px', fontSize: '1.2rem' }}>
                <span className="sr-only">Toggle theme</span>
                <span aria-hidden="true">🌓</span>
            </button>
        )
    }

    return (
        <button
            className="btn btn-outline"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            style={{ padding: '8px', minWidth: '40px', fontSize: '1.2rem' }}
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        >
            {theme === "light" ? (
                <span>🌙</span>
            ) : (
                <span>☀️</span>
            )}
        </button>
    )
}
