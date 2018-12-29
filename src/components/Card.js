import React from "react";
import { View, StyleSheet } from "react-native";

const s = StyleSheet.create({
  card: {
    elevation: 3,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 3,
    borderRadius: 3,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 5,
  },
});

export default ({ style, children, ...props }) => (
  <View style={[s.card, style]} {...props}>
    {children}
  </View>
);
