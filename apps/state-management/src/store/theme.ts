import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const useThemeStore = create(
  persist<ThemeState>(
    (set, get) => ({
      theme: 'light',
      toggleTheme: () => {
        set({
          theme: get().theme === 'light' ? 'dark' : 'light',
        });
      },
    }),
    { name: 'theme' }
  )
);
