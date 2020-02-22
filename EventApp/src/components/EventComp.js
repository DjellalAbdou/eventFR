import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  StyleSheet
} from "react-native";
import { Feather } from "@expo/vector-icons";
import NavigationService from "../navigation/routes/NavigationService";

const { width, height } = Dimensions.get("window");

const EventComp = props => {
  const changeRoute = route => {
    if (props.modal) props.removeModal();
    NavigationService.navigate(route);
  };

  return (
    <TouchableOpacity onPress={() => changeRoute("currentEvent")}>
      <View
        style={[
          styles.compContainer,
          props.modal ? { width: width * 0.7 } : null
        ]}
      >
        <ImageBackground
          resizeMode="cover"
          source={require("../../assets/work.jpg")}
          style={styles.backgroundimage}
        >
          <View style={styles.cardContainer}>
            <View style={styles.bookmarkContainer}>
              <Feather name="bookmark" size={28} color="#ffffff" />
            </View>
            <View style={styles.textsWrapper}>
              <Text style={styles.title}> Startup community #1</Text>
              <View style={styles.dateandtimeContainer}>
                <View style={styles.dateContainer}>
                  <Feather name="calendar" size={15} color="#ffffff" />
                  <Text style={styles.dateandtimeText}>22.03.20</Text>
                </View>
                <View style={styles.dateContainer}>
                  <Feather name="clock" size={15} color="#ffffff" />
                  <Text style={styles.dateandtimeText}>18:30 - 20:30</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  compContainer: {
    marginHorizontal: 20,
    borderRadius: 28,
    marginBottom: 15
  },
  backgroundimage: {
    width: "100%",
    height: 150,
    overflow: "hidden",
    borderRadius: 28,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: "#062743",
    shadowOffset: { height: 0, width: 0 },
    elevation: 2
  },
  bookmarkContainer: {
    alignItems: "flex-end",
    marginRight: 20,
    marginTop: 10
  },
  cardContainer: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 15,
    color: "#ffffff",
    fontWeight: "bold"
  },
  dateandtimeContainer: {
    flexDirection: "row",
    marginTop: 5
  },
  dateContainer: {
    flexDirection: "row"
  },
  dateandtimeText: {
    fontSize: 10,
    color: "#ffffff",
    marginHorizontal: 10
  },
  textsWrapper: {
    marginLeft: 20,
    marginBottom: 20,
    flexDirection: "column"
  }
});

export default EventComp;
