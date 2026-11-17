import { menu, restaurants } from '@/assets/data';
import OrangeScreen, { CARD } from '@/components/core/OrangeScreen';
import { ThemedText } from '@/components/core/ThemedText';
import { cn } from '@/utils/cn';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

const RestaurantId = () => {
    const { id } = useLocalSearchParams();
    const restaurant = restaurants.find((r) => r.id === Number(id));

    return (
        <OrangeScreen title={restaurant?.name ?? 'Restaurant'}>
            <ScrollView contentContainerClassName="p-4 pb-8">
                {restaurant && (
                    <Image
                        source={{ uri: restaurant.image }}
                        accessibilityLabel={restaurant.name}
                        className="w-full h-48 rounded-2xl bg-orange-100 dark:bg-border-dark"
                        resizeMode="cover"
                    />
                )}
                <View className="flex-row justify-center items-center mt-3 gap-x-4">
                    <View className="flex-row items-center bg-primary rounded-full px-3 py-1">
                        <FontAwesome name="star" size={14} color="white" />
                        <Text className="text-white font-bold ml-1">{restaurant?.rating}</Text>
                    </View>
                    <Text className="text-gray-500">{restaurant?.distance} km away</Text>
                </View>

                <Text className="text-primary text-2xl font-bold mt-6">Menu</Text>
                {menu.map((item) => (
                    <Pressable key={item.name} className={cn(CARD, 'flex-row mt-3 p-3 items-center')}>
                        <Image
                            source={{ uri: item.image }}
                            accessibilityLabel={item.name}
                            className="w-16 h-16 rounded-xl bg-orange-100 dark:bg-border-dark"
                        />
                        <View className="flex-1 ml-3">
                            <ThemedText className="text-lg font-bold">{item.name}</ThemedText>
                            <Text className="text-primary font-bold">${item.price.toFixed(2)}</Text>
                        </View>
                        <View className="w-9 h-9 rounded-full bg-primary items-center justify-center">
                            <FontAwesome6 name="plus" size={16} color="white" />
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
        </OrangeScreen>
    )
}

export default RestaurantId
