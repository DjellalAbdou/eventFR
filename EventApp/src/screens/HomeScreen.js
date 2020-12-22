import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Feather } from "@expo/vector-icons";
import EventComp from "../components/EventComp";
import { eventApi } from "../api";
import Modal from "react-native-modal";

const { height, width } = Dimensions.get("window");

const HomeScreen = () => {
  const [inputField, setInputField] = useState("");
  const [focused, setFocused] = useState(false);
  const [allEvents, setAllEvents] = useState([]);
  const [allEventsFiltred, setAllEventsFiltred] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [choosenFilter, setChoosenFilter] = useState([]);

  const handleFocuse = towhat => {
    setFocused(towhat);
  };

  const setEvents = events => {
    setAllEvents(events);
    setAllEventsFiltred(events);
  };

  useEffect(() => {
    eventApi.getAllEvents(setEvents);
    console.log(allEventsFiltred.length);
  }, []);

  const handleChange = text => {
    setInputField(text);
  };

  const modifyFilters = filter => {
    let newfiltered = [...choosenFilter];
    if (choosenFilter.includes(filter)) {
      newfiltered.splice(choosenFilter.indexOf(filter), 1);
      setChoosenFilter(newfiltered);
    } else setChoosenFilter([...choosenFilter, filter]);
  };

  return (
    <ImageBackground
      source={require("../../assets/skyline.png")}
      style={styles.screenContainer}
      imageStyle={styles.backgroundImage}
      resizeMode="contain"
    >
      {/* <View style={styles.positionContainer}>
        <View style={styles.iconContainer}>
          <Text style={styles.positionText}>Paris</Text>
          <Feather name="map-pin" size={18} color="#BBBBBB" />
        </View>
      </View> */}

      <View style={styles.positionContainer}>
        <Text style={styles.title}>evenements</Text>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Feather name="filter" size={25} color="#062743" />
        </TouchableOpacity>
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
          /* onFocus={() => handleFocuse(true)}
          onBlur={() => handleFocuse(false)} */
        />
      </View>
      <View style={styles.eventsContainer}>
        <FlatList
          style={{ height: "82%" }}
          data={allEventsFiltred}
          keyExtractor={item => item._id}
          renderItem={({ item }) => <EventComp item={item} />}
        />
      </View>
      <Modal
        isVisible={modalVisible}
        style={styles.bottomModal}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        useNativeDriver
        hideModalContentWhileAnimating
        backdropTransitionOutTiming={0}
        backdropTransitionInTiming={0}
        hasBackdrop
        onSwipeComplete={() => {
          setModalVisible(false);
        }}
        swipeDirection="down"
        deviceHeight={height}
        deviceWidth={width}
        onBackButtonPress={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContent}>
          <View>
            <Text style={styles.modalTitle}>choissier vos filtres</Text>
          </View>
          <View style={styles.greenBorderContainer}>
            <View style={styles.greenBorder} />
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap"
            }}
          >
            <TouchableOpacity
              onPress={() => {
                modifyFilters("soirées étudiants");
              }}
              style={{ width: "45%", borderRadius: 7 }}
            >
              <View
                style={[
                  styles.filterChoise,
                  ,
                  choosenFilter.includes("soirées étudiants")
                    ? { borderColor: "#76EF4D", borderWidth: 1 }
                    : null
                ]}
              >
                <Text style={styles.filtersText}>soirées étudiants</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                modifyFilters("boite de nuit");
              }}
              style={{ width: "45%", borderRadius: 7 }}
            >
              <View
                style={[
                  styles.filterChoise,
                  choosenFilter.includes("boite de nuit")
                    ? { borderColor: "#76EF4D", borderWidth: 1 }
                    : null
                ]}
              >
                <Text style={styles.filtersText}>boite de nuit</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                modifyFilters("événements et festivals");
              }}
              style={{ width: "45%", borderRadius: 7 }}
            >
              <View
                style={[
                  styles.filterChoise,
                  choosenFilter.includes("événements et festivals")
                    ? { borderColor: "#76EF4D", borderWidth: 1 }
                    : null
                ]}
              >
                <Text style={styles.filtersText}>événements et festivals</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                modifyFilters("soirées privées");
              }}
              style={{ width: "45%", borderRadius: 7 }}
            >
              <View
                style={[
                  styles.filterChoise,
                  choosenFilter.includes("soirées privées")
                    ? { borderColor: "#76EF4D", borderWidth: 1 }
                    : null
                ]}
              >
                <Text style={styles.filtersText}>soirées privées</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                modifyFilters("autres");
              }}
              style={{ width: "45%", borderRadius: 7 }}
            >
              <View
                style={[
                  styles.filterChoise,
                  choosenFilter.includes("autres")
                    ? { borderColor: "#76EF4D", borderWidth: 1 }
                    : null
                ]}
              >
                <Text style={styles.filtersText}>autres</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 30,
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity style={styles.sendBtn}>
              <Text style={styles.sendTxt}>valider</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    //width: width,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20
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
    textTransform: "capitalize"
    //marginLeft: 20
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
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    width
  },
  greenBorder: {
    backgroundColor: "#76EF4D",
    borderRadius: 30,
    width: 80,
    height: 7
  },
  greenBorderContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  modalTitle: {
    fontSize: 20,
    color: "#062743",
    fontWeight: "bold",
    marginBottom: 22
  },
  filterChoise: {
    borderColor: "#BBBBBB",
    borderWidth: 0.5,

    marginTop: 15,
    borderRadius: 7
  },
  filtersText: {
    color: "#062743",
    fontSize: 11,
    paddingHorizontal: 15,
    paddingVertical: 10
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

export { HomeScreen };
