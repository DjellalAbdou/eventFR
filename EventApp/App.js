import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BaseNavigation from "./src/navigation/BaseNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <BaseNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
