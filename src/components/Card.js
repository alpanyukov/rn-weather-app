import React from "react";
import { View, StyleSheet } from "react-native";

const s = StyleSheet.create({
  card: {
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 5,
    margin: 10,
    borderRadius: 3,
    width: 300,
    elevation: 3,
  },
});

export default ({ style, children, ...props }) => (
  <View style={[s.card, style]} {...props}>
    {children}
  </View>
);
