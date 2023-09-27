import { Tabs, router } from "expo-router"
import { Alert } from "react-native"
import { supabase } from "../lib/supabase"
import * as Notifications from "expo-notifications"

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

// async function schedulePushNotification() {
//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title: "You've got mail! 📬",
//       body: "Here is the notification body",
//       data: { data: "goes here" },
//     },
//     trigger: { seconds: 2 },
//   })
// }

export default () => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    if (!session) {
      router.replace("/(auth)/login")
      console.log("No user")
      Alert.alert("No user")
    } else if (session) {
      // Notifications.scheduleNotificationAsync({
      //   content: {
      //     title: "Look at that notification",
      //     body: "Welcome!",
      //   },
      //   trigger: null,
      // })
      // schedulePushNotification()
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
      </Tabs>
    </>
  )
}
