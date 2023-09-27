import { useEffect } from "react"
import * as Notifications from "expo-notifications"
import { router, Slot } from "expo-router"

function useNotificationObserver() {
  useEffect(() => {
    let isMounted = true

    function redirectFunction(notification) {
      const url = notification.request.content.data?.url
      if (url) {
        router.push(url)
      }
    }

    Notifications.getLastNotificationResponseAsync().then((response) => {
      if (!isMounted || !response?.notification) {
        return
      }
      redirectFunction(response?.notification)
    })

    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        redirectFunction(response.notification)
      }
    )

    return () => {
      isMounted = false
      subscription.remove()
    }
  }, [])
}

export default function Layout() {
  useNotificationObserver()

  return <Slot />
}

// import { Stack } from "expo-router"

// const StackLayout = () => {
//   return (
//     <Stack>
//       <Stack.Screen
//         name="(tabs)"
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="(auth)"
//         options={{
//           headerShown: false,
//         }}
//       />
//     </Stack>
//   )
// }

// export default StackLayout
