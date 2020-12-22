import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  FlatList
} from "react-native";
import EventComp from "../components/EventComp";
import { eventApi } from "../api";
const { height, width } = Dimensions.get("window");

const LikesScreen = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [allEventsFiltred, setAllEventsFiltred] = useState([]);

  const setEvents = events => {
    setAllEvents(events);
    setAllEventsFiltred(events);
  };

  useEffect(() => {
    eventApi.getLikedEvents(setEvents);
    console.log(allEventsFiltred.length);
  }, []);

  return (
    <View>
      <ImageBackground
        source={require("../../assets/dotted.png")}
        style={styles.fullbackground}
        imageStyle={styles.dotted}
        resizeMode="contain"
      >
        <View style={styles.headerShapeLeft} />
        <View style={styles.headerShapeRight} />
        <View style={styles.HeaderContainer}>
          <Text style={styles.headerTitle}>Favoris</Text>
        </View>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../assets/skyline.png")}
            style={styles.screenContainer}
            imageStyle={styles.backgroundImage}
            resizeMode="contain"
          >
            <View style={styles.eventContainer}>
              <FlatList
                style={{ height: "100%" }}
                data={allEventsFiltred}
                keyExtractor={item => item._id}
                renderItem={({ item }) => <EventComp item={item} />}
              />
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  fullbackground: {
    height,
    width,
    backgroundColor: "#76EF4D"
  },
  dotted: {
    position: "absolute",
    top: -height / 2 + 20,
    left: "auto",
    right: 30,
    width: 70,
    opacity: 0.47
  },
  headerShapeLeft: {
    position: "absolute",
    top: -10,
    left: -30,
    width: 110,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    opacity: 0.47,
    transform: [{ rotate: "334deg" }]
  },
  headerShapeRight: {
    position: "absolute",
    top: 70,
    right: -50,
    left: "auto",
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    opacity: 0.47,
    transform: [{ rotate: "329deg" }]
  },
  HeaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "22%",
    width
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff"
  },
  container: {
    //marginTop: 20,
    backgroundColor: "#F8F8F8",
    borderTopLeftRadius: 31,
    borderTopRightRadius: 31,
    height: "78%",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: "#062743",
    shadowOffset: { height: 0, width: 0 },
    elevation: 2
  },
  screenContainer: {
    width: width,
    height: "78%",
    backgroundColor: "#F8F8F8",
    borderTopLeftRadius: 31,
    borderTopRightRadius: 31
  },
  backgroundImage: {
    position: "absolute",
    top: height / 2 - 53,
    width: width,
    opacity: 0.33
  },
  eventContainer: {
    marginTop: 30
  }
});

export { LikesScreen };
