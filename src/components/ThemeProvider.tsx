"use client";

import { ReactNode, useEffect } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (theme: "light" | "dark" | null) => {
      const shouldUseDark = theme ? theme === "dark" : media.matches;
      document.documentElement.classList.toggle("dark", shouldUseDark);
    };

    const savedTheme = localStorage.getItem("theme");
    applyTheme(
      savedTheme === "light" || savedTheme === "dark" ? savedTheme : null,
    );

    const handleSystemThemeChange = () => {
      const currentSavedTheme = localStorage.getItem("theme");
      if (!currentSavedTheme) {
        applyTheme(null);
      }
    };

    media.addEventListener("change", handleSystemThemeChange);
    return () => media.removeEventListener("change", handleSystemThemeChange);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newIsDark);
  };

  return (
    <>
      {children}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={toggleTheme}
          className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-surface-border bg-surface/95 text-primary shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 cursor-pointer"
          aria-label="Toggle theme"
          title="Toggle dark/light mode"
        >
          <svg
            className="h-5 w-5 scale-100 rotate-0 text-amber-500 opacity-100 transition-all duration-300 dark:scale-0 dark:-rotate-90 dark:opacity-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
          <svg
            className="absolute h-5 w-5 scale-0 rotate-90 text-sky-300 opacity-0 transition-all duration-300 dark:scale-100 dark:rotate-0 dark:opacity-100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
      </div>
    </>
  );
}
