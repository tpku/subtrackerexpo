import { View, StyleSheet } from "react-native"
import React from "react"
import { Link, Stack, router } from "expo-router"
import CustomButton from "../../components/CustomButton"
import usePushNotifications from "../usePushNotifications"

export default StartScreen = () => {
  // FIXME: Delete
  const { expoPushToken } = usePushNotifications()

  // FIXME: Delete
  console.log(expoPushToken)

  const NavigateLogin = () => {
    // <Link href={}/>
    router.replace("/LoginScreen")
  }
  const NavigateSignup = () => {
    // <Link href={}/>
    router.replace("/SignupScreen")
  }
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <CustomButton text="Logga in" onPress={NavigateLogin} />
        <CustomButton text="Skapa konto" onPress={NavigateSignup} />
      </View>
      {/*  // FIXME: Delete */}
      {usePushNotifications()}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
})
