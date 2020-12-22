import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import EventComp from "../components/EventComp";
import { Feather } from "@expo/vector-icons";
import IconRippleButton from "../components/IconRippleButton";
import EditEventComp from "../components/EditEventComp";
import { eventApi } from "../api";
import { FlatList } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

const MyEventsScreen = props => {
  const [myEvents, setMyEvents] = useState([]);

  const setEvents = events => {
    setMyEvents(events);
  };

  useEffect(() => {
    eventApi.getAllEvents(setEvents);
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
          <View style={styles.goBackContainer}>
            <IconRippleButton
              style={styles.gobackArrow}
              name="arrow-left"
              size={30}
              rippleColor="#ffffff"
              color="#ffffff"
              onPress={() => props.navigation.goBack()}
            />
            <Text style={styles.headerTitle}>mes evenements</Text>
          </View>
        </View>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../assets/skyline.png")}
            style={styles.screenContainer}
            imageStyle={styles.backgroundImage}
            resizeMode="contain"
          >
            <View style={styles.eventContainer}>
              <View style={styles.greenBorderContainer}>
                <View style={styles.greenBorder} />
              </View>
              <View style={{ marginTop: 20 }}>
                <FlatList
                  data={myEvents}
                  keyExtractor={item => item._id}
                  renderItem={({ item }) => <EditEventComp item={item} />}
                />
                {/* <EditEventComp />
                <EditEventComp />
                <EditEventComp /> */}
              </View>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MyEventsScreen;

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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "22%",
    width
  },
  headerTitle: {
    marginLeft: 20,
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff"
  },
  container: {
    //marginTop: 20,
    backgroundColor: "#F8F8F8",
    borderTopLeftRadius: 31,
    borderTopRightRadius: 31,
    height: height,
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
    marginTop: 20
  },
  goBackContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  gobackArrow: {
    position: "absolute",
    left: 25
  },
  greenBorder: {
    backgroundColor: "#76EF4D",
    borderRadius: 30,
    width: 80,
    height: 7
  },
  greenBorderContainer: {
    justifyContent: "center",
    alignItems: "center"
  }
});
