import { restaurants as all } from '@/assets/data'
import OrangeScreen from '@/components/core/OrangeScreen'
import { ThemedText } from '@/components/core/ThemedText'
import Restaurant from '@/components/in_screens/Restaurant'
import { Colors } from '@/constants/Colors'
import { FontAwesome5 } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, TextInput, View } from 'react-native'

const Restaurants = () => {
  const [query, setQuery] = React.useState('')
  const restaurants = all.filter((r) =>
    r.name.toLowerCase().includes(query.trim().toLowerCase())
  )

  return (
    <OrangeScreen
      title="Restaurants"
      header={
        <View className="flex-row items-center gap-x-3 px-4 rounded-full bg-white dark:bg-surface-dark">
          <FontAwesome5 name="search" size={16} color={Colors.primary} />
          <TextInput
            className="flex-1 py-3 text-black dark:text-white"
            placeholderTextColor="gray"
            placeholder="Search restaurants"
            value={query}
            onChangeText={setQuery}
          />
        </View>
      }
    >
      <ScrollView contentContainerClassName="p-4 pb-8">
        {restaurants.map((item) => (
          <Restaurant restaurant={item} key={item.id} />
        ))}
        {restaurants.length === 0 && (
          <ThemedText className="text-center text-gray-500 mt-6">No restaurant matches "{query}"</ThemedText>
        )}
      </ScrollView>
    </OrangeScreen>
  )
}

export default Restaurants
