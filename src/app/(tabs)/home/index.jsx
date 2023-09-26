import { StyleSheet, Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Link, Stack } from "expo-router"

export default HomeIndex = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Dashboard" }} />
      <View style={styles.container}>
        <Text style={styles.test}>Home page of the Home tab</Text>
        <StatusBar style="auto" />
        <Link href={"/home/product-view"}>
          <Text>Go to Products</Text>
        </Link>
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
