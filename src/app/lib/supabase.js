import "react-native-url-polyfill/auto"
import { createClient } from "@supabase/supabase-js"
import AsyncStorage from "@react-native-async-storage/async-storage"
// import * as SecureStore from "expo-secure-store"

// const ExpoSecureStoreAdapter = {
//   getItem: () => {
//     return SecureStore.getItemAsync(key)
//   },
//   setItem: (key, value) => {
//     SecureStore.setItemAsync(key, value)
//   },
//   removeItem: (key) => {
//     SecureStore.deleteItemAsync(key)
//   },
// }

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    // storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
