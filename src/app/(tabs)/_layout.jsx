import { Tabs, router } from "expo-router"
import { Alert } from "react-native"
import { supabase } from "../lib/supabase"

export default () => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    if (!session) {
      router.replace("/(auth)/login")
      console.log("No user")
      Alert.alert("No user")
    }
  })
  return (
    <>
      <Tabs screenOptions={{ headerShown: false }}>
        {/* <Tabs> */}
        {/* <Tabs.Screen name="home" options={{ headerTitle: false }} /> */}
        <Tabs.Screen
          name="home"
          options={{ tabBarLabel: "Home", title: "Home" }}
        />
        <Tabs.Screen
          name="UserAccountScreen"
          options={{ tabBarLabel: "User", title: "Profil" }}
        />
        <Tabs.Screen name="product" />
      </Tabs>
    </>
  )
}
