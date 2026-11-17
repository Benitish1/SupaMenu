import OrangeScreen, { CARD } from '@/components/core/OrangeScreen'
import { ThemedText } from '@/components/core/ThemedText'
import OrderSuccessful from '@/components/in_screens/OrderSuccessful'
import { cn } from '@/utils/cn'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

const Checkout = () => {
    const [ordered, setOrdered] = React.useState(false)
    const [tab, setTab] = React.useState(1)
    const [method, setMethod] = React.useState<string | null>(null)
    const mobilePayments = ['MTN Mobile Money', 'Airtel Money', 'Vodafone Cash']
    const cards = ['Visa', 'Mastercard']
    const options = tab === 0 ? cards : mobilePayments

    return (
        <>
            <OrangeScreen
                title="Checkout"
                right={
                    <View className="items-end">
                        <Text className="text-white font-bold text-lg">$100</Text>
                        <Text className="text-white/80 text-xs">incl. VAT (18%)</Text>
                    </View>
                }
            >
                <ScrollView contentContainerClassName="p-4 pb-8">
                    {/* Payment type tabs */}
                    <View className={cn(CARD, 'flex-row p-1')}>
                        {['Credit Card', 'Mobile'].map((label, i) => (
                            <Pressable
                                key={label}
                                onPress={() => { setTab(i); setMethod(null) }}
                                className={cn('flex-1 py-3 rounded-xl items-center', tab === i ? 'bg-primary' : '')}
                            >
                                <Text className={cn('font-bold', tab === i ? 'text-white' : 'text-gray-500')}>{label}</Text>
                            </Pressable>
                        ))}
                    </View>

                    {options.map((payment) => {
                        const selected = method === payment
                        return (
                            <Pressable
                                key={payment}
                                onPress={() => setMethod(payment)}
                                className={cn(CARD, 'flex-row mt-3 p-3 items-center', selected ? 'border-2 border-primary dark:border-primary' : '')}
                            >
                                <View className="w-11 h-11 rounded-full bg-primary items-center justify-center">
                                    <MaterialIcons name={tab === 0 ? 'credit-card' : 'phone-android'} size={22} color="white" />
                                </View>
                                <ThemedText className="flex-1 ml-3 font-semibold">{payment}</ThemedText>
                                <MaterialIcons name={selected ? 'radio-button-checked' : 'radio-button-unchecked'} size={22} color="#f7941d" />
                            </Pressable>
                        )
                    })}

                    <Text className="text-sm text-gray-400 mt-6 text-center">
                        We will send the order details to your email after a successful payment
                    </Text>
                    <Pressable
                        onPress={() => (method ? setOrdered(true) : alert('Please choose a payment method'))}
                        className="mt-6 rounded-full p-4 bg-primary items-center"
                    >
                        <Text className="text-white text-lg font-bold">Pay for the order</Text>
                    </Pressable>
                </ScrollView>
            </OrangeScreen>
            {ordered && <OrderSuccessful />}
        </>
    )
}

export default Checkout
