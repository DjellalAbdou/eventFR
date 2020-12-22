import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";

import { Feather } from "@expo/vector-icons";
import NavigationService from "../navigation/routes/NavigationService";

const { height, width } = Dimensions.get("window");

const SettingsScreen = () => {
  const ChangeScreen = screen => {
    NavigationService.navigate(screen);
  };
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
          <Text style={styles.headerTitle}>Parametres</Text>
        </View>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../assets/skyline.png")}
            style={styles.screenContainer}
            imageStyle={styles.backgroundImage}
            resizeMode="contain"
          >
            <View style={styles.eventContainer}>
              <View style={styles.profilepicContainer}>
                <Image
                  source={require("../../assets/profile_freelance.jpg")}
                  style={styles.profilePic}
                />
                <Text style={styles.ProfileText}>abdou djellal</Text>
              </View>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => ChangeScreen("MyEvents")}
              >
                <Feather
                  style={styles.icons}
                  name="tag"
                  size={20}
                  color="#062743"
                />
                <Text style={styles.ProfileText}>mes evenements</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Feather
                  style={styles.icons}
                  name="map"
                  size={20}
                  color="#062743"
                />
                <Text style={styles.ProfileText}>changer de region</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Feather
                  style={styles.icons}
                  name="log-out"
                  size={20}
                  color="#062743"
                />
                <Text style={styles.ProfileText}>se déconnecter</Text>
              </TouchableOpacity>
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
    marginTop: "20%",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: "#062743",
    shadowOffset: { height: 0, width: 0 },
    elevation: 2,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 33,
    borderRadius: 16,
    height: "65%"
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 20
  },
  profilepicContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1
  },
  ProfileText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#062743",
    textTransform: "capitalize"
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20
  },
  icons: {
    width: 60,
    marginLeft: 10,
    marginRight: 20,
    textAlign: "center"
  }
});

export { SettingsScreen };
