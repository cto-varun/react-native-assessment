import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Header({ onAdd }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable}>
        <Ionicons name="chevron-back-outline" size={20} />
      </TouchableOpacity>
      <Text style={styles.heading}>INVOICES</Text>
      <TouchableOpacity style={styles.touchable} onPress={onAdd}>
        <Ionicons name="add-circle-outline" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  touchable: {
    padding: 12,
  },
});
