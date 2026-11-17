/**
 * App colors for light and dark mode.
 * SupaMenu is an orange app: headers, the tab bar and buttons are orange in BOTH modes.
 * Only the content area changes: soft cream in light mode, dark grey in dark mode.
 * The same values are available to Tailwind classes via tailwind.config.js
 * (e.g. `bg-cream dark:bg-surface-dark`).
 */

const primary = '#f7941d';

export const Colors = {
  primary,
  light: {
    text: '#11181C',
    color: '#fff',
    background: '#FFF4E6',
    card: '#fff',
    border: '#FFE0B8',
    tint: primary,
    icon: primary,
    tabIconDefault: '#687076',
    tabIconSelected: primary,
  },
  dark: {
    text: '#ECEDEE',
    color: '#000',
    background: '#151718',
    card: '#1E2022',
    border: '#3A2A17',
    tint: primary,
    icon: primary,
    tabIconDefault: '#9BA1A6',
    tabIconSelected: primary,
  },
};
