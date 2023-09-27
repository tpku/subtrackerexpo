import { StyleSheet, Text, View } from "react-native"
import { Stack, useLocalSearchParams } from "expo-router"

import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"

export default DeleteUserAccount = () => {
  const { DeleteState } = useLocalSearchParams()
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Avsluta konto" }} />
      <View style={styles.container}>
        <Text>LOGO</Text>
        <Text style={(styles.textMedium, styles.text)}>
          Bekräfta med email och lösenord för att radera konto
        </Text>
        <CustomInput placeholder="E-post" />
        <CustomInput placeholder="Lösenord" />
        <View>
          <Text style={styles.text}>
            ✓ Säker att du radera ditt konto på Subee?
          </Text>
        </View>
        <CustomButton text="Ångra" btnType="SECONDARY" textType="SECONDARY" />
        <CustomButton text="Radera" btnType="TERTIARY" />
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
    backgroundColor: "#3693cf",
    gap: 24,
  },
  text: {
    maxWidth: 248,
    color: "white",
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
