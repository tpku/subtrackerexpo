import { Tabs } from "expo-router"

export default () => {
  return (
    <>
      <Tabs screenOptions={{ headerShown: false }}>
        {/* <Tabs> */}
        {/* <Tabs.Screen name="home" options={{ headerTitle: false }} /> */}
        <Tabs.Screen
          name="home"
          options={{ tabBarLabel: "Home", title: "Home" }}
        />
        <Tabs.Screen
          name="UserAccountScreen"
          options={{ tabBarLabel: "User", title: "Profil" }}
        />
        <Tabs.Screen name="product" />
      </Tabs>
    </>
  )
}
