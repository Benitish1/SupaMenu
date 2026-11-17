import { images } from '@/assets/data'
import OrangeScreen, { CARD } from '@/components/core/OrangeScreen'
import { ThemedText } from '@/components/core/ThemedText'
import { cn } from '@/utils/cn'
import { FontAwesome6 } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'

const cartItems = [
  { name: 'Pizza', image: images.pizza, quantity: 1, price: 50 },
  { name: 'Pasta', image: images.pasta, quantity: 1, price: 50 },
];

const Cart = () => {
  const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0)
  return (
    <OrangeScreen
      title="Cart"
      right={
        <View className="bg-white rounded-full px-3 py-1">
          <Text className="text-primary font-bold">{cartItems.length} items</Text>
        </View>
      }
    >
      <ScrollView contentContainerClassName="p-4 pb-8">
        {cartItems.map((item, i) => (
          <CartItem item={item} key={i} />
        ))}
        <View className={cn(CARD, 'flex-row justify-between items-center p-4 mt-6')}>
          <ThemedText className="font-bold text-lg">Total</ThemedText>
          <Text className="text-primary font-bold text-xl">${total}</Text>
        </View>
        <Pressable onPress={() => router.push('/checkout')} className="flex-row mt-4 rounded-full p-4 bg-primary justify-center items-center">
          <Text className="text-white text-lg font-bold">Checkout</Text>
        </Pressable>
      </ScrollView>
    </OrangeScreen>
  )
}

const CartItem = ({ item }: { item: typeof cartItems[number] }) => {
  return (
    <View className={cn(CARD, 'flex-row mt-3 justify-between items-center p-3')}>
      <View className="flex-row flex-1 gap-x-3 items-center">
        <Image source={{ uri: item.image }} accessibilityLabel={item.name} className="w-16 h-16 rounded-xl bg-orange-100 dark:bg-border-dark" />
        <View>
          <ThemedText className="font-bold">{item.name}</ThemedText>
          <Text className="text-gray-500 text-sm">Quantity: {item.quantity}</Text>
          <Text className="text-primary font-bold">${item.price}</Text>
        </View>
      </View>
      {/* remove from cart */}
      <FontAwesome6 name="trash" size={18} color="#f7941d" />
    </View>
  )
}

export default Cart
