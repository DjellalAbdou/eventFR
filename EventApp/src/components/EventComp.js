import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableNativeFeedback
} from "react-native";
import { Feather } from "@expo/vector-icons";
import NavigationService from "../navigation/routes/NavigationService";

const { width, height } = Dimensions.get("window");

const EventComp = ({ item, modal, edit, removeModal }) => {
  const changeRoute = route => {
    if (modal) removeModal();
    NavigationService.navigate(route);
  };

  const like = JSON.parse(item.liked);

  return (
    <TouchableNativeFeedback onPress={() => changeRoute("currentEvent")}>
      <View
        style={[
          styles.compContainer,
          modal || edit ? { width: width * 0.7 } : null
        ]}
      >
        <ImageBackground
          resizeMode="cover"
          source={item ? { uri: item.image } : require("../../assets/work.jpg")}
          style={styles.backgroundimage}
        >
          <View style={styles.cardContainer}>
            <View style={styles.bookmarkContainer}>
              <Feather
                name="bookmark"
                size={28}
                color={like ? "#76EF4D" : "#ffffff"}
              />
            </View>
            <View style={styles.textsWrapper}>
              <Text style={styles.title}> {item.title}</Text>
              <View style={styles.dateandtimeContainer}>
                <View style={styles.dateContainer}>
                  <Feather name="calendar" size={15} color="#ffffff" />
                  <Text style={styles.dateandtimeText}>{item.date}</Text>
                </View>
                <View style={styles.dateContainer}>
                  <Feather name="clock" size={15} color="#ffffff" />
                  <Text style={styles.dateandtimeText}>
                    {item.timeStart}- {item.timeEnd}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableNativeFeedback>
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
    width: "100%",
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
