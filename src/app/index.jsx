import { router } from "expo-router"
import { useEffect } from "react"
import { Alert } from "react-native"
import { supabase } from "./lib/supabase"

export default Index = () => {
  // const [session, setSession] = (useState < Session) | (null > null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        // setSession(session)
        router.replace("/(tabs)/home/")
      } else {
        console.log("No user")
        Alert.alert("No user")
      }
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        // setSession(session)
        router.replace("/(tabs)/home/")
      } else {
        console.log("No user")
        Alert.alert("No user")
        router.replace("/(auth)/login")
      }
    })
  }, [])
}
