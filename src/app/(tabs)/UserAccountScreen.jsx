import React from "react"
import { StyleSheet, View, Text, TextInput } from "react-native"
import { Link, Stack, router } from "expo-router"

import InputField from "../../components/InputField"
import CustomButton from "../../components/CustomButton"
export default UserAccountScreen = () => {
  const DeleteAccount = () => {
    // <Link href={}/>
    router.replace("/DeleteUserAccount/Confirm")
  }
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "User Settings" }} />

      <View style={styles.container}>
        <Text style={{ fontSize: 22 }}>Kontodetaljer</Text>
        <View style={styles.textRow}>
          <Text style={styles.textMedium}>Förnamn:</Text>
          <InputField
            placeholder="Förnamn"
            // value={firstName}
            // setValue={setFirstName}
          />
        </View>
        <View style={styles.textRow}>
          <Text style={styles.textMedium}>Efternamn:</Text>{" "}
          <InputField
            placeholder="Efternamn"
            // value={lastName}
            // setValue={setLastName}
          />
        </View>
        <View style={styles.textRow}>
          <Text style={styles.textMedium}>E-post:</Text>
          <InputField
            placeholder="E-post"
            // value={lastName}
            // setValue={setLastName}
          />
        </View>
        <View style={styles.textRow}>
          <Text style={styles.textMedium}>Adress:</Text>
          <InputField
            placeholder="Adress"
            // value={lastName}
            // setValue={setLastName}
          />
        </View>
        <View style={styles.textRow}>
          <Text style={styles.textMedium}>Telefon:</Text>
          <InputField
            placeholder="Telefon"
            // value={lastName}
            // setValue={setLastName}
          />
        </View>
        <CustomButton
          text="Spara ändringar"
          // onPress={logout}
          // btnType={"SECONDARY"}
          // textType="TERTIARY"
          // isLoggedIn={"loggedIn"}
        />

        <CustomButton
          text="Logga ut"
          // onPress={logout}
          btnType="SECONDARY"
          textType="SECONDARY"
          // isLoggedIn={"loggedIn"}
        />
        <CustomButton
          text="Avsluta konto"
          onPress={DeleteAccount}
          // isLoggedIn={"loggedIn"}
        />

        {/* FIXME: Remove */}
        {/* <Link href="/DeleteUserAccount/``">
          <Text style={styles.test}>User 1</Text>
        </Link>
        <Link href="/user/2">
          <Text style={styles.test}>User 2</Text>
        </Link>
        <Link href="/user/3">
          <Text style={styles.test}>User 3</Text>
        </Link> */}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ececec",
    gap: 24,
  },
  textMedium: {
    fontSize: 22,
  },
  textRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  test: {
    backgroundColor: "red",
  },
})
