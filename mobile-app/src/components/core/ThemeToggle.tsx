import { Colors } from '@/constants/Colors';
import { useAppTheme } from '@/contexts/ThemeProvider';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable } from 'react-native';

const ICONS = {
    light: 'sunny',
    dark: 'moon',
    system: 'phone-portrait-outline',
} as const;

const LABELS = {
    light: 'Light theme',
    dark: 'Dark theme',
    system: 'Use phone theme',
} as const;

/** Round button that cycles the app theme: light → dark → system. */
const ThemeToggle = () => {
    const { mode, cycleMode } = useAppTheme();
    return (
        <Pressable
            onPress={cycleMode}
            accessibilityRole="button"
            accessibilityLabel={`${LABELS[mode]}. Tap to change theme`}
            hitSlop={8}
            className="w-11 h-11 rounded-full items-center justify-center bg-white dark:bg-surface-dark"
        >
            <Ionicons name={ICONS[mode]} size={20} color={Colors.primary} />
        </Pressable>
    );
};

export default ThemeToggle;
