import AsyncStorage from '@react-native-async-storage/async-storage';
import { colorScheme as nativewindColorScheme } from 'nativewind';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useColorScheme as useSystemColorScheme } from 'react-native';

export type ThemeMode = 'light' | 'dark' | 'system';
export type ColorScheme = 'light' | 'dark';

const STORAGE_KEY = 'themeMode';
const CYCLE: ThemeMode[] = ['light', 'dark', 'system'];
// SupaMenu's design is white + orange, so light is the default until the user picks otherwise.
const DEFAULT_MODE: ThemeMode = 'light';

interface ThemeContextValue {
    /** What the user picked: light, dark or follow the phone. */
    mode: ThemeMode;
    /** The theme actually in use right now. */
    colorScheme: ColorScheme;
    setMode: (mode: ThemeMode) => void;
    /** light → dark → system → light */
    cycleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
    mode: DEFAULT_MODE,
    colorScheme: 'light',
    setMode: () => { },
    cycleMode: () => { },
});

export const useAppTheme = () => useContext(ThemeContext);

const applyToNativeWind = (mode: ThemeMode) => {
    try {
        // Drives Tailwind `dark:` classes. On native it also overrides the app's
        // Appearance, so system UI (alerts, keyboard) matches the chosen theme.
        nativewindColorScheme.set(mode);
    } catch (e) {
        // Throws during static web rendering where there is no `window`.
    }
};

// Apply the default right away. Otherwise NativeWind follows the phone's theme
// (dark on a dark phone) until the saved choice has loaded from storage.
applyToNativeWind(DEFAULT_MODE);

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setModeState] = useState<ThemeMode>(DEFAULT_MODE);
    const systemScheme = useSystemColorScheme();

    useEffect(() => {
        AsyncStorage.getItem(STORAGE_KEY)
            .then((saved) => {
                const initial = CYCLE.includes(saved as ThemeMode) ? (saved as ThemeMode) : DEFAULT_MODE;
                setModeState(initial);
                applyToNativeWind(initial);
            })
            .catch(() => applyToNativeWind(DEFAULT_MODE));
    }, []);

    const setMode = useCallback((next: ThemeMode) => {
        setModeState(next);
        applyToNativeWind(next);
        AsyncStorage.setItem(STORAGE_KEY, next).catch(() => { });
    }, []);

    const cycleMode = useCallback(() => {
        setMode(CYCLE[(CYCLE.indexOf(mode) + 1) % CYCLE.length]);
    }, [mode, setMode]);

    const colorScheme: ColorScheme =
        mode === 'system' ? (systemScheme === 'dark' ? 'dark' : 'light') : mode;

    return (
        <ThemeContext.Provider value={{ mode, colorScheme, setMode, cycleMode }}>
            {children}
        </ThemeContext.Provider>
    );
}
