import { useAppTheme } from "@/contexts/ThemeProvider";

/** The theme currently in use ('light' | 'dark'), based on the user's choice in the app. */
export const useColorScheme = () => useAppTheme().colorScheme;

export default useColorScheme;
