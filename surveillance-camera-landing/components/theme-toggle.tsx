// components/theme-toggle.tsx
'use client';

import { useTheme } from '@/components/theme-provider';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 opacity-0" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 relative"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

// Alternative version with tooltip
export function ThemeToggleWithTooltip() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="group relative rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 opacity-0" />
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="group relative rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute left-2 top-2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        
        {/* Tooltip */}
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 rounded bg-gray-900 px-2 py-1 text-xs text-white transition-all group-hover:scale-100 dark:bg-gray-100 dark:text-gray-900">
          {theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
        </span>
      </button>
    </div>
  );
}

// Alternative version with neon purple styling
export function NeonThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="rounded-full p-2 border-2 border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/50"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 opacity-0" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-full p-2 border-2 border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/50 neon-glow"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-purple-500" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-purple-500" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
