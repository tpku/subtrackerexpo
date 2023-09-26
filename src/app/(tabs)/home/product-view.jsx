import { StyleSheet, Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Link, Stack } from "expo-router"

export default ProductView = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Product View" }} />
      <View style={styles.container}>
        <Text style={styles.test}>Product View of the Home tab</Text>
        <StatusBar style="auto" />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a3a3a3",
    gap: 24,
  },
  test: {
    backgroundColor: "red",
  },
})
