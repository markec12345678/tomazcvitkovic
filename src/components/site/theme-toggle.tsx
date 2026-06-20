"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Po hydration-u prikažemo dejansko stanje (da se izognemo mismatch)
  React.useEffect(() => setMounted(true), []);

  const current = theme === "system" ? resolvedTheme : theme;
  const isDark = current === "dark";

  const toggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className="relative h-10 w-10 rounded-md border border-border text-foreground transition-colors hover:bg-secondary"
      aria-label={isDark ? "Preklopi na svetli način" : "Preklopi na temni način"}
      title={isDark ? "Svetli način" : "Temni način"}
    >
      {/* Sun ikona (vidna v light načinu) */}
      <Sun
        className={`h-[18px] w-[18px] transition-all duration-300 ${
          mounted && !isDark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        }`}
      />
      {/* Moon ikona (vidna v dark načinu) */}
      <Moon
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
          mounted && isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      />
      {/* Fallback pred hydration (prepreči layout shift) */}
      {!mounted && (
        <span className="h-[18px] w-[18px]" aria-hidden="true" />
      )}
    </Button>
  );
}
