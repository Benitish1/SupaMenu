import CustomStatusBar from '@/components/core/CustomStatusBar';
import { ArrowIcon } from '@/components/icons';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface Props {
    title?: string;
    /** Small text above the title. */
    subtitle?: string;
    showBack?: boolean;
    /** Shown at the right of the title row (e.g. a badge or button). */
    right?: React.ReactNode;
    /** Extra content inside the orange header, under the title (e.g. a search box). */
    header?: React.ReactNode;
    children: React.ReactNode;
}

/**
 * SupaMenu screen layout: an orange header (in light AND dark mode) with a rounded
 * content sheet below it. The sheet is cream in light mode and dark grey in dark mode.
 */
const OrangeScreen = ({ title, subtitle, showBack = true, right, header, children }: Props) => {
    const router = useRouter();
    return (
        <View className="flex-1 bg-primary">
            <CustomStatusBar style="light" backgroundColor={Colors.primary} />
            <View className="px-4 pt-3 pb-6">
                <View className="flex-row items-center gap-x-3">
                    {showBack && (
                        <Pressable
                            onPress={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)'))}
                            accessibilityRole="button"
                            accessibilityLabel="Go back"
                            className="w-10 h-10 rounded-full justify-center items-center bg-white/20 border border-white/60"
                            style={{ transform: [{ rotate: '180deg' }] }}
                        >
                            <ArrowIcon size={20} color="white" />
                        </Pressable>
                    )}
                    <View className="flex-1">
                        {subtitle ? <Text className="text-white/80 text-sm">{subtitle}</Text> : null}
                        {title ? <Text className="text-white text-2xl font-bold" numberOfLines={1}>{title}</Text> : null}
                    </View>
                    {right}
                </View>
                {header ? <View className="mt-4">{header}</View> : null}
            </View>
            <View className="flex-1 bg-cream dark:bg-surface-dark rounded-t-[30px] overflow-hidden">
                {children}
            </View>
        </View>
    );
};

/** Card style used on every screen: white on cream (light), dark grey with orange edge (dark). */
export const CARD = 'bg-white dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl';

export default OrangeScreen;
