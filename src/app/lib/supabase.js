// TODO: Save --For devices only
// import "react-native-url-polyfill/auto"
// import * as SecureStore from "expo-secure-store"
// import { createClient } from "@supabase/supabase-js"

// const ExpoSecureStoreAdapter = {
//   getItem: (key) => {
//     return SecureStore.getItemAsync(key)
//   },
//   setItem: (key, value) => {
//     SecureStore.setItemAsync(key, value)
//   },
//   removeItem: (key) => {
//     SecureStore.deleteItemAsync(key)
//   },
// }

// const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL
// const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY

// export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
//   auth: {
//     storage: ExpoSecureStoreAdapter,
//     autoRefreshToken: true,
//   },
// })

// TODO: Save --For web only
import "react-native-url-polyfill/auto"
import { createClient } from "@supabase/supabase-js"
import AsyncStorage from "@react-native-async-storage/async-storage"

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
