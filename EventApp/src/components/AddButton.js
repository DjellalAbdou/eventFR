import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const AddButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Feather style={styles.icon} name="plus" size={30} color="#ffffff" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#76EF4D",
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 90,
    marginBottom: 20
  },
  icon: {
    zIndex: 20
  }
});

export default AddButton;
