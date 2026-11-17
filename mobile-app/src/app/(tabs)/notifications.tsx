import { notifications } from '@/assets/data'
import OrangeScreen, { CARD } from '@/components/core/OrangeScreen'
import { ThemedText } from '@/components/core/ThemedText'
import { cn } from '@/utils/cn'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const Notifications = () => {
    return (
        <OrangeScreen
            title="Notifications"
            right={
                <View className="w-8 h-8 bg-white rounded-full items-center justify-center">
                    <Text className="text-primary font-bold">{notifications.length}</Text>
                </View>
            }
        >
            <ScrollView contentContainerClassName="p-4 pb-8">
                {notifications.length === 0 && (
                    <ThemedText className="text-center text-gray-500 mt-6">You have no notifications yet</ThemedText>
                )}
                {notifications.map((item) => (
                    <View key={item.id} className={cn(CARD, 'flex-row mt-3 p-4 items-start')}>
                        <View className="w-10 h-10 rounded-full bg-primary items-center justify-center">
                            <MaterialIcons name="notifications" size={22} color="white" />
                        </View>
                        <View className="flex-1 ml-3">
                            <Text className="text-primary font-bold">{item.title}</Text>
                            <ThemedText className="mt-1">{item.message}</ThemedText>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </OrangeScreen>
    )
}

export default Notifications
