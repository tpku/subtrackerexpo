import React from "react"
import { Text, StyleSheet, Pressable } from "react-native"

const CustomButton = (props) => {
  const {
    text,
    onPress,
    btnType = "PRIMARY",
    textType = "PRIMARY",
    isLoggedIn = "",
  } = props
  return (
    <Pressable
      style={[
        styles.container,
        styles[`container_${btnType}`],
        styles[`${isLoggedIn}`],
      ]}
      onPress={onPress}>
      <Text style={[styles.text, styles[`text_${textType}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 200,
    paddingVertical: 8,

    borderRadius: 15,
    alignItems: "center",
  },

  container_PRIMARY: {
    backgroundColor: "#3693cf",
    borderWidth: 0,
  },

  container_SECONDARY: {
    backgroundColor: "#ffffff",
  },

  container_TERTIARY: {
    backgroundColor: "#3693cf",
    borderColor: "white",
    borderWidth: 2,
  },

  container_ERROR: {
    backgroundColor: "#999fa3",
    pointerEvents: "none",
  },

  text: {
    fontSize: 20,
    padding: 4,
    color: "beige",
  },

  text_PRIMARY: {
    color: "#f5f5dc",
  },

  text_SECONDARY: {
    color: "#3693cf",
  },

  text_TERTIARY: {
    color: "#ffffff",
  },

  text_ERROR: {
    color: "#bb3a40",
  },
  loggedIn: {
    display: "flex",
  },
  loggedOut: {
    display: "none",
  },
})

export default CustomButton
