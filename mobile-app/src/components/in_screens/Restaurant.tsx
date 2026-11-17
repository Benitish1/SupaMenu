import { CARD } from '@/components/core/OrangeScreen'
import { cn } from '@/utils/cn'
import { FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { ThemedText } from '../core/ThemedText'

interface RestaurantProps {
    restaurant: { id: number; name: string; image: string; rating: number; distance: number };
}

const Restaurant = ({ restaurant }: RestaurantProps) => {
    const router = useRouter();
    return (
        <Pressable onPress={() => router.push(`/restaurant/${restaurant.id}`)}>
            <View className={cn(CARD, 'p-3 mt-3 flex-row items-center')}>
                <Image
                    source={{ uri: restaurant.image }}
                    accessibilityLabel={restaurant.name}
                    className="w-24 h-24 rounded-xl bg-orange-100 dark:bg-border-dark"
                    resizeMode="cover"
                />
                <View className="flex-1 ml-3">
                    <ThemedText className="font-bold text-lg">{restaurant.name}</ThemedText>
                    <View className="flex-row items-center mt-1">
                        <FontAwesome name="star" size={14} color="#f7941d" />
                        <Text className="text-primary font-semibold ml-1">{restaurant.rating}</Text>
                        <Text className="text-gray-400 ml-3">{restaurant.distance} km away</Text>
                    </View>
                </View>
                <View className="bg-primary rounded-full px-3 py-1.5">
                    <Text className="text-white text-xs font-bold">View</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default Restaurant
