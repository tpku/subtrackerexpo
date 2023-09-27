import React, { useState } from "react"
import { Alert, StyleSheet, View, Text } from "react-native"
import { Stack } from "expo-router"
import { supabase } from "../lib/supabase"
import CustomButton from "../../components/CustomButton"
import CustomInput from "../../components/CustomInput"

export default login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const signInWithEmail = async (email, password) => {
    setLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (data) {
      console.log(data)
    }

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  // FIXME: Add restore password supabase function
  const onRetrievePasswordPress = async (content) => {
    console.warn("Retrieve password pressed")
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.textMedium}>Logga in</Text>

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
          text="Logga in"
          disabled={loading}
          onPress={() => signInWithEmail(email, password)}
        />

        <Text>[Återställ lösenord]</Text>
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
