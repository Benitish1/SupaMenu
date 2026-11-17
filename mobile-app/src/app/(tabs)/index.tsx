import { images, products, restaurants } from '@/assets/data';
import GridView from '@/components/core/GridView';
import OrangeScreen from '@/components/core/OrangeScreen';
import { ThemedText } from '@/components/core/ThemedText';
import ThemeToggle from '@/components/core/ThemeToggle';
import Product from '@/components/in_screens/Product';
import Restaurant from '@/components/in_screens/Restaurant';
import { Colors } from '@/constants/Colors';
import { useAuth } from '@/contexts/AuthProvider';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, ScrollView, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [query, setQuery] = React.useState('');
  const { user } = useAuth() as any;
  const q = query.trim().toLowerCase();
  const shownRestaurants = restaurants.filter((r) => r.name.toLowerCase().includes(q));
  const shownProducts = products.filter((p) => p.name.toLowerCase().includes(q));
  const firstName = user?.fullNames?.split(' ')[0];

  return (
    <OrangeScreen
      showBack={false}
      subtitle={firstName ? `Hello ${firstName} 👋` : 'Hello 👋'}
      title="What would you like today?"
      right={<ThemeToggle />}
      header={
        <View className="flex-row items-center gap-x-3 px-4 rounded-full bg-white dark:bg-surface-dark">
          <FontAwesome5 name="search" size={16} color={Colors.primary} />
          <TextInput
            placeholder="Search coffee or restaurants"
            className="flex-1 py-3 text-black dark:text-white"
            placeholderTextColor="gray"
            value={query}
            onChangeText={setQuery}
          />
        </View>
      }
    >
      <ScrollView contentContainerClassName="p-4 pb-8">
        {/* Promo banner */}
        <ImageBackground
          source={{ uri: images.restaurantTable }}
          className="h-36 rounded-2xl overflow-hidden bg-primary"
          resizeMode="cover"
        >
          <View className="flex-1 justify-center p-4 bg-black/40">
            <Text className="text-white text-xl font-bold">10% off your first order</Text>
            <View className="self-start bg-primary rounded-full px-4 py-1.5 mt-2">
              <Text className="text-white font-bold">Order now</Text>
            </View>
          </View>
        </ImageBackground>

        <SectionTitle title="Popular Restaurants" />
        {shownRestaurants.map((item) => (
          <Restaurant restaurant={item} key={item.id} />
        ))}

        <SectionTitle title="Popular Products" />
        <GridView
          data={shownProducts}
          gap={6}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item) => <Product item={item} />}
        />

        {q && shownRestaurants.length === 0 && shownProducts.length === 0 && (
          <ThemedText className="text-center text-gray-500 mt-6">Nothing found for "{query}"</ThemedText>
        )}
      </ScrollView>
    </OrangeScreen>
  );
}

const SectionTitle = ({ title }: { title: string }) => (
  <View className="flex-row items-center mt-6">
    <FontAwesome5 name="hotjar" size={20} color={Colors.primary} />
    <ThemedText className="text-lg font-bold ml-2">{title}</ThemedText>
  </View>
);
