import { Redirect } from "expo-router"

export default Index = () => {
  // return <Redirect href="/" />
  return <Redirect href={"/(auth)/login"} />
}
