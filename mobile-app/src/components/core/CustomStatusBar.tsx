import { Colors } from "@/constants/Colors";
import useColorScheme from "@/hooks/useColorScheme";
import { StatusBar, StatusBarProps } from "expo-status-bar";
import { View, StyleSheet, StatusBar as NativeStatusBar } from "react-native";

// Since SDK 54 Android apps are always edge-to-edge, so the status bar itself
// can't have a background color. We paint the area behind it with a View instead.
interface CustomStatusBarProps extends StatusBarProps {
    backgroundColor?: string;
}

const CustomStatusBar = ({ backgroundColor, ...props }: CustomStatusBarProps) => {
    const colorScheme = useColorScheme();
    const bgColor = backgroundColor ?? Colors[colorScheme].background;
    return (
        <View style={[styles.statusBar, { backgroundColor: bgColor }]}>
            <StatusBar style={colorScheme === "dark" ? "light" : "dark"} {...props} />
        </View>
    );
};

const styles = StyleSheet.create({
    statusBar: {
        height: NativeStatusBar.currentHeight,
    },
});

export default CustomStatusBar;
