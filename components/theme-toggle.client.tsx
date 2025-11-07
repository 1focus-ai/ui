'use client'

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

import { cn } from "@/lib/utils"

type Theme = "light" | "dark"

const STORAGE_KEY = "ui-theme"
const DARK_MEDIA_QUERY = "(prefers-color-scheme: dark)"

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null
  const value = window.localStorage.getItem(STORAGE_KEY)
  return value === "light" || value === "dark" ? value : null
}

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "light"
  const stored = getStoredTheme()
  if (stored) return stored
  return window.matchMedia(DARK_MEDIA_QUERY).matches ? "dark" : "light"
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return
  document.documentElement.classList.toggle("dark", theme === "dark")
}

export function ThemeToggle({
  className,
}: {
  className?: string
}) {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    if (typeof window === "undefined") return

    const media = window.matchMedia(DARK_MEDIA_QUERY)
    const handleChange = (event: MediaQueryListEvent) => {
      if (getStoredTheme()) return
      const nextTheme = event.matches ? "dark" : "light"
      setTheme(nextTheme)
    }

    media.addEventListener("change", handleChange)
    return () => media.removeEventListener("change", handleChange)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, nextTheme)
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-sm font-medium text-muted-foreground transition hover:border-border hover:bg-card hover:text-foreground",
        className,
      )}
      aria-pressed={theme === "dark"}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun
        className={cn(
          "h-4 w-4 transition-transform duration-200",
          theme === "dark" && "-rotate-90 scale-0",
        )}
      />
      <Moon
        className={cn(
          "h-4 w-4 transition-transform duration-200",
          theme === "light" && "rotate-90 scale-0",
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
