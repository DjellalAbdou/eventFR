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
import IconRippleButton from "../components/IconRippleButton";

const { height, width } = Dimensions.get("window");

const EventScreen = props => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/ski.jpg")}
        style={styles.fullBG}
        imageStyle={styles.eventBG}
        //resizeMode="contain"
      >
        <View style={styles.headerContainer}>
          <IconRippleButton
            style={styles.gobackArrow}
            name="arrow-left"
            size={25}
            rippleColor="#ffffff"
            color="#ffffff"
            onPress={() => props.navigation.goBack()}
          />
          <View style={styles.headerTitlesContainer}>
            <Text style={styles.headerTitle}>partie de barbecue</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.headerSubtitle, { marginRight: 30 }]}>
                1 fevrier 2020
              </Text>
              <Text style={styles.headerSubtitle}>18:30 - 20:30</Text>
            </View>
          </View>
          <View style={styles.userContainer}>
            <Image
              source={require("../../assets/profile_freelance.jpg")}
              style={styles.profilePic}
            />
            <Text style={styles.userName}>par abdou djellal</Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <ImageBackground
            source={require("../../assets/skyline.png")}
            style={styles.detailsBG}
            resizeMode="contain"
            imageStyle={styles.detailsImage}
          >
            <View style={styles.greenBorderContainer}>
              <View style={styles.greenBorder} />
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionTitle}>description</Text>
              <Text style={styles.descriptionContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                blandit ex quam. Proin auctor blandit rhoncus. Fusce a mauris id
                odio consectetur porttitor non vel diam. Aliquam placerat sem
                non tellus consectetur hendrerit. Vestibulum a tellus convallis
                elit bibendum bibendum. Curabitur vitae placerat purus. Vivamus
                hendrerit diam sit amet semper iaculis. Fusce eget blandit enim.
                Mauris a convallis libero. Sed aliquam lorem ut aliquet mollis.
              </Text>
            </View>
            <View style={styles.cardContainer}>
              <View style={[styles.card, { width: "66%" }]}>
                <Text style={styles.cardTitle}>location</Text>
                <Text style={styles.cardContent}>paris - 75005 France</Text>
              </View>
              <View style={[styles.card, { width: "30%" }]}>
                <Text style={styles.cardTitle}>places</Text>
                <Text style={styles.cardContent}>30 / 50</Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30
              }}
            >
              <TouchableOpacity style={styles.sendBtn}>
                <Text style={styles.sendTxt}>participer</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  fullBG: {
    height,
    width
  },
  eventBG: {
    height: "60%",
    width
  },
  headerContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 40
  },
  headerTitlesContainer: {
    marginTop: 30,
    paddingLeft: 15
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "capitalize"
  },
  headerSubtitle: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold"
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 20
  },
  userName: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize"
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "40%"
  },
  detailsContainer: {
    backgroundColor: "#F8F8F8",
    width,
    height: "60%",
    borderTopLeftRadius: 31,
    borderTopRightRadius: 31,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: "#062743",
    shadowOffset: { height: 0, width: 0 },
    elevation: 2
  },
  greenBorder: {
    backgroundColor: "#76EF4D",
    borderRadius: 30,
    width: 80,
    height: 7
  },
  greenBorderContainer: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  descriptionTitle: {
    color: "#062743",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 20
  },
  descriptionContent: {
    color: "#062743",
    fontSize: 12
  },
  descriptionContainer: {
    marginLeft: 30,
    marginRight: 20,
    marginBottom: 20
  },
  detailsBG: {
    width,
    height: "100%"
  },
  detailsImage: {
    position: "absolute",
    top: (height * 60) / 100 - 205,
    height: 180,
    width,
    opacity: 0.33
  },
  card: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    shadowOpacity: 0.29,
    shadowRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { height: 0, width: 0 },
    elevation: 2,
    backgroundColor: "#F4F4F4",
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  cardContainer: {
    flexDirection: "row",
    marginHorizontal: 30,
    justifyContent: "space-between"
  },
  cardTitle: {
    color: "#BBBBBB",
    fontSize: 12,
    marginBottom: 10
  },
  cardContent: {
    color: "#062743",
    fontSize: 12
  },
  sendBtn: {
    backgroundColor: "#76EF4D",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.29,
    shadowRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { height: 0, width: 0 },
    elevation: 2,
    paddingVertical: 12,
    paddingHorizontal: 45
  },
  sendTxt: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold"
  }
});

export default EventScreen;
