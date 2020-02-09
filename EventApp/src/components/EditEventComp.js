import React from "react";
import { View, Text, StyleSheet } from "react-native";
import EventComp from "./EventComp";
import IconRippleButton from "./IconRippleButton";

const EditEventComp = () => {
  return (
    <View style={styles.columnsContainer}>
      <View style={styles.firstColumn}>
        <IconRippleButton
          style={styles.button}
          name="edit-2"
          size={25}
          //rippleColor="#ffffff"
          color="#062743"
          onPress={() => console.log("pressed edit")}
        />
        <IconRippleButton
          style={styles.button}
          name="trash-2"
          size={25}
          //rippleColor="#ffffff"
          color="#062743"
          onPress={() => console.log("pressed delete")}
        />
      </View>
      <EventComp edit />
    </View>
  );
};

const styles = StyleSheet.create({
  columnsContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
    //width: "80%",
    //marginHorizontal: 20
    //backgroundColor: "red"
  },
  firstColumn: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    //backgroundColor: "red",
    height: 150,
    marginBottom: 15
  },
  button: {
    backgroundColor: "#ffffff",
    shadowOpacity: 0.29,
    shadowRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { height: 3, width: 0 },
    elevation: 2,
    borderRadius: 50
  }
});

export default EditEventComp;
