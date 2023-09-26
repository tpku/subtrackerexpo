import { Stack } from "expo-router"

export default HomeLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }} />
    // <View>
    //   <Stack screenOptions={{ headerTitle: "Home" }}>
    //     <Stack.Screen name="home" />
    //   </Stack>
    // </View>
  )
}
