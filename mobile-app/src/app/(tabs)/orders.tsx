import { images } from '@/assets/data'
import OrangeScreen, { CARD } from '@/components/core/OrangeScreen'
import { ThemedText } from '@/components/core/ThemedText'
import { cn } from '@/utils/cn'
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

const orders = [
  {
    date: '2021-09-01',
    status: 'Delivered',
    total: 100,
    items: [
      { name: 'Pizza', image: images.pizza, quantity: 1, price: 50 },
      { name: 'Pasta', image: images.pasta, quantity: 1, price: 50 },
    ],
  },
];

const Orders = () => {
  return (
    <OrangeScreen title="Orders">
      <ScrollView contentContainerClassName="p-4 pb-8">
        {orders.map((order, i) => (
          <OrderItem order={order} key={i} />
        ))}
      </ScrollView>
    </OrangeScreen>
  )
}

const OrderItem = ({ order }: { order: typeof orders[number] }) => {
  return (
    <View className={cn(CARD, 'mt-3 p-4')}>
      <View className="flex-row justify-between items-center">
        <ThemedText className="font-bold">{order.date}</ThemedText>
        <View className="bg-primary rounded-full px-3 py-1">
          <Text className="text-white text-xs font-bold">{order.status}</Text>
        </View>
      </View>
      {order.items.map((item, i) => (
        <View key={i} className="flex-row items-center mt-3">
          <Image source={{ uri: item.image }} accessibilityLabel={item.name} className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-border-dark" />
          <ThemedText className="flex-1 ml-3">{item.name}</ThemedText>
          <Text className="text-gray-500">{item.quantity} x ${item.price}</Text>
        </View>
      ))}
      <View className="flex-row justify-between items-center mt-3 pt-3 border-t border-border-light dark:border-border-dark">
        <ThemedText className="font-bold">Total</ThemedText>
        <Text className="text-primary font-bold text-lg">${order.total}</Text>
      </View>
    </View>
  )
}

export default Orders
