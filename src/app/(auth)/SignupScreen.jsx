import React, { useState } from "react"
import { Alert, StyleSheet, View, Text } from "react-native"
import { Stack, router } from "expo-router"
import { supabase } from "../lib/supabase"
import CustomButton from "../../components/CustomButton"
import CustomInput from "../../components/CustomInput"

export default function signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const signUpWithEmail = async (email, password) => {
    setLoading(true)
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if (!error && data) {
      console.log("Registrering godkänd. Bekräfta via angiven e-post")
      router.replace("/(auth)/LoginScreen")
    }
    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.textMedium}>Skapa konto</Text>

        <CustomInput
          placeholder="testman@test.com"
          label="Email"
          value={email}
          setValue={setEmail}
          autoCapitalize={"none"}
        />

        <CustomInput
          placeholder="Lösenord"
          label="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          isPassword
          autoCapitalize={"none"}
        />

        <CustomButton
          text="Skapa konto"
          disabled={loading}
          onPress={() => signUpWithEmail(email, password)}
        />

        <Text>[Tillbaka till start]</Text>
      </View>
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
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  textMedium: {
    fontSize: 20,
  },
})
