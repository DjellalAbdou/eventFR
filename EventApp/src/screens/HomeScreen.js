import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Feather } from "@expo/vector-icons";
import EventComp from "../components/EventComp";

const { height, width } = Dimensions.get("window");

const HomeScreen = () => {
  const [inputField, setInputField] = useState("");
  const [focused, setFocused] = useState(false);

  const handleFocuse = towhat => {
    setFocused(towhat);
  };

  const handleChange = text => {
    setInputField(text);
  };

  return (
    <ImageBackground
      source={require("../../assets/skyline.png")}
      style={styles.screenContainer}
      imageStyle={styles.backgroundImage}
      resizeMode="contain"
    >
      <View style={styles.positionContainer}>
        <View style={styles.iconContainer}>
          <Text style={styles.positionText}>Paris</Text>
          <Feather name="map-pin" size={18} color="#BBBBBB" />
        </View>
      </View>
      <View>
        <Text style={styles.title}>evenements</Text>
      </View>

      <View
        style={[styles.textinputContainer, focused ? styles.borderInput : null]}
      >
        <TouchableOpacity onPress={() => handleFocuse(true)}>
          <Feather name="search" size={25} color="#BBBBBB" />
        </TouchableOpacity>

        <TextInput
          style={styles.textInput}
          name="inputField"
          value={inputField}
          placeholder="Seacher evenement..."
          placeholderTextColor="#BBBBBB"
          //clearTextOnFocus
          onChangeText={text => handleChange(text)}
          selectionColor="#76EF4D"
          onFocus={() => handleFocuse(true)}
          onBlur={() => handleFocuse(false)}
        />
      </View>
      <View style={styles.eventsContainer}>
        <EventComp />
        <EventComp />
        <EventComp />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: width,
    height: height - 50,
    backgroundColor: "#F8F8F8"
  },
  backgroundImage: {
    position: "absolute",
    top: height / 2 - 60,
    width: width,
    opacity: 0.33
  },
  positionContainer: {
    width: width,
    marginTop: 30,
    alignItems: "flex-end"
  },
  positionText: {
    marginRight: 10,
    color: "#BBBBBB",
    fontSize: 20
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginRight: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginLeft: 20
  },
  textinputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingBottom: 8,
    marginHorizontal: 20,
    paddingHorizontal: 10
  },
  textInput: {
    paddingLeft: 30,
    fontSize: 18,
    color: "#062743"
  },
  borderInput: {
    borderBottomColor: "#76EF4D",
    borderBottomWidth: 2
  },
  eventsContainer: {
    marginTop: "10%"
  }
});

export { HomeScreen };
