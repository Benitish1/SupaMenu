// Food photos from Unsplash (free to use). `w=400` keeps downloads small.
const photo = (id: string) => `https://images.unsplash.com/photo-${id}?w=400&q=70&auto=format&fit=crop`;

export const images = {
  pizza: photo('1565299624946-b28f40a0ae38'),
  pasta: photo('1621996346565-e3dbc646d9a9'),
  burger: photo('1550547660-d9450f859349'),
  salad: photo('1512621776951-a57141f2eefd'),
  drink: photo('1544145945-f90425340c7e'),
  tacos: photo('1551504734-5ee1c4a1479b'),
  restaurantTable: photo('1414235077428-338989a2e8c0'),
};

export const restaurants = [
  {
    id: 1,
    name: "Starbucks",
    image: photo('1501339847302-ac426a4a7cbb'),
    rating: 4.5,
    distance: 0.5,
  },
  {
    id: 2,
    name: "Costa Coffee",
    image: photo('1554118811-1e0d58224f24'),
    rating: 4.2,
    distance: 0.8,
  },
  {
    id: 3,
    name: "Dunkin' Donuts",
    image: photo('1517248135467-4c7edcad34c4'),
    rating: 4.0,
    distance: 1.0,
  },
  {
    id: 4,
    name: "McCafe",
    image: photo('1555396273-367ea4eb4db5'),
    rating: 3.8,
    distance: 0.3,
  },
];

export const products = [
  {
    id: 1,
    name: "Cappuccino",
    image: photo('1572442388796-11668a67e53d'),
    price: 3.5,
    hotelId: 1,
  },
  {
    id: 2,
    name: "Espresso",
    image: photo('1510591509098-f4fdc6d0ff04'),
    price: 2.5,
    hotelId: 2,
  },
  {
    id: 3,
    name: "Iced Coffee",
    image: photo('1461023058943-07fcbe16d735'),
    price: 4.0,
    hotelId: 3,
  },
  {
    id: 4,
    name: "Latte",
    image: photo('1561882468-9110e03e0f78'),
    price: 3.8,
    hotelId: 4,
  },
];

/** Menu shown on every restaurant page. */
export const menu = [
  { name: "Burger", image: images.burger, price: 8.5 },
  { name: "Pizza", image: images.pizza, price: 12.0 },
  { name: "Pasta", image: images.pasta, price: 10.0 },
  { name: "Salad", image: images.salad, price: 6.5 },
  { name: "Drink", image: images.drink, price: 4.0 },
];

export const notifications = [
  {
    id: 1,
    title: "Welcome",
    message: "Thanks for joining SupaMenu! Browse restaurants to get started.",
  },
  {
    id: 2,
    title: "Promotion",
    message: "Get 10% off your first order at Starbucks this week.",
  },
];
