import { CARD } from '@/components/core/OrangeScreen'
import { cn } from '@/utils/cn'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { ThemedText } from '../core/ThemedText'

interface Props {
    item: { name: string; image: string; price: number }
}

const Product = ({ item }: Props) => {
    return (
        <View className={cn(CARD, 'p-2 overflow-hidden')}>
            <Image
                source={{ uri: item.image }}
                accessibilityLabel={item.name}
                className="w-full h-28 rounded-xl bg-orange-100 dark:bg-border-dark"
                resizeMode="cover"
            />
            <View className="px-1 pt-2">
                <ThemedText className="font-bold">{item.name}</ThemedText>
                <Text className="text-primary font-bold">${item.price.toFixed(2)}</Text>
            </View>
        </View>
    )
}

export default Product
