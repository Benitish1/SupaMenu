import ParallaxScrollView from '@/components/core/ParallaxScrollView';
import { useAuth } from '@/contexts/AuthProvider';
import { Colors } from '@/constants/Colors';
import useStorage from '@/hooks/useStorage';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, TextInput, View, ScrollView } from 'react-native';
import { loginUser } from '@/services/localAuth';
import { useColorScheme } from '@/hooks/useColorScheme';

const LoginScreen = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [data, setData] = React.useState({
    email: '',
    password: '',
  });
  const { storeData } = useStorage()
  const { setToken , setUser } = useAuth();
  const router = useRouter()
  const socialIconColor = useColorScheme() === 'dark' ? 'white' : 'black'


  const validateForm = () => {
    if (data.email === '' || data.password === '') {
      alert('Please fill in all fields')
      return false
    }

    if(data.password.length < 4) {
      alert('Password must be atleast 4 characters')
      return false
    }

    if(!data.email.includes('@')) {
      alert('Invalid email')
      return false
    }
    return true
  }

  const onLogin = async () => {
      if (!validateForm()) return
      try {
        setIsLoading(true)
        const { token, user } = await loginUser(data.email, data.password);
        await storeData('token', token)
        await storeData('user', user)
        setUser(user)
        setToken(token)
        router.push('/(tabs)')
      } catch (error) {
        console.log(error)
        alert('Invalid email or password')
      } finally {
        setIsLoading(false)
      }
  }

  return (
    <View
      className=' bg-primary flex-1 pt-20'>
      <View className=' bg-white dark:bg-surface-dark rounded-t-[30px] flex-1'>
          <View className='flex mt-6 flex-row items-center justify-center'>
            <Text className=' text-4xl font-bold text-black dark:text-white'>Supa</Text>
            <Text className=' text-4xl text-primary font-bold'>Menu</Text>
          </View>
          <Text className='font-bold mt-6 text-center text-black dark:text-white'>Welcome ...</Text>
          <ScrollView className='flex-1 px-3'>
            <Text className='font-bold mt-1 opacity-50 text-sm text-center text-black dark:text-white'>Sign in to continue</Text>
            <View className='mt-8 flex-row items-center border-2 border-gray-300 dark:border-border-dark p-1 rounded-md'>
              <Feather name="mail" size={28} color="gray" />
              <TextInput onChangeText={(text) => setData({ ...data, email: text })}
                style={{
                  fontSize: 16,
                }}
                placeholderTextColor={'gray'}
                className=' w-full h9 flex-row items-center outline-none p-2 text-black dark:text-white'
                placeholder='Your Email' />
            </View>
            <View className='mt-4 flex-row items-center border-2 border-gray-300 dark:border-border-dark p-1 rounded-md'>
              <Feather name="lock" size={28} color="gray" />
              <TextInput
                onChangeText={(text) => setData({ ...data, password: text })}
                placeholderTextColor={'gray'}
                secureTextEntry
                style={{
                  fontSize: 16,
                }}
                className=' w-full flex-row items-center outline-none p-2 text-black dark:text-white'
                placeholder='Your Password' />

            </View>
            <Pressable
            disabled={isLoading}
              onPress={onLogin}
              className={`${isLoading ? `bg-primary` : `bg-[#f7951dc0]` } w-full flex-row  items-center justify-center mt-6 p-3 px-8 rounded-md`}>
              <Text className='text-white text-lg font-bold'>
                {isLoading ? 'Loading...' : 'Sign in'}
              </Text>
            </Pressable>
            <View className='flex-row items-center mt-4'>
              <View className='flex-1 border-b-2 border-gray-300 dark:border-border-dark'></View>
              <Text className='mx-2 text-gray-400'>OR</Text>
              <View className='flex-1 border-b-2 border-gray-300 dark:border-border-dark'></View>
            </View>
            {/* google + facebook  */}
            <Pressable
              onPress={() => console.log('google')}
              className='bg-white dark:bg-card-dark border-2 border-gray-200 dark:border-border-dark w-full flex-row  items-center justify-center mt-4 p-3 px-5 rounded-md'>
              <AntDesign name="google" size={24} color={socialIconColor} />
              <Text className='text-gray-500 flex-1 text-center w-fit text-lg font-bold '>Sign in with Google</Text>
            </Pressable>
            <Pressable
              onPress={() => console.log('facebook')}
              className=' border-2 border-gray-200 dark:border-border-dark w-full flex-row  items-center justify-center mt-4 p-3 px-5 rounded-md'>
              <FontAwesome name="facebook-f" size={24} color={socialIconColor} />
              <Text className='text-gray-500 flex-1 text-center w-fit text-lg font-bold '>Sign in with Facebook</Text>
            </Pressable>
            <Text onPress={() => alert('Password reset is not available in offline mode. Create a new account instead.')} className='text-center mt-4 text-primary font-semibold'>Forgot Password?</Text>
            <Text className='text-center my-4 text-gray-400'>Don't have an account? <Link href={'/register'} className='text-primary font-bold'>Sign up</Link></Text>
          </ScrollView>
      </View>
      {/* </View> */}
    </View>
  )
}

export default LoginScreen