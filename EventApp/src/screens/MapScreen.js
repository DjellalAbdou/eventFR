import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Platform,
  Button
} from "react-native";
import EventComp from "../components/EventComp";
import MapView, { Marker } from "react-native-maps";

import axios from "axios";
import Modal from "react-native-modal";

import { eventApi } from "../api";

const { height, width } = Dimensions.get("window");

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: 3.872225,
      latitude: 43.635753,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    },
    markers: [],
    modalVisible: false,
    selectedMarker: 0
  };

  setMarkers = events => {
    const newmarkers = events.map(event => {
      console.log(event);
      let geoloc = event.geoLocation;
      geoloc.latitude = Number(geoloc.latitude);
      geoloc.longitude = Number(geoloc.longitude);
      event.geoLocation = geoloc;
      return event;
    });
    this.setState({ markers: newmarkers, mapLoaded: true });
  };

  componentDidMount() {
    eventApi.getAllEvents(this.setMarkers);
    console.log(this.state.markers);
    // axios
    //   .get(
    //     "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=fQ2rRCwwueRTYMPypcpuPaTO58mLLQZe"
    //   )
    //   .then(resp => {
    //     console.log(resp);
    //     let data = resp.data;
    //     data = data._embedded.events;

    //     let markers = data.map(event => {
    //       let eventobj = {
    //         title: event.name,
    //         description: event.info,
    //         latlng: {
    //           latitude: parseInt(
    //             event._embedded.venues[0].location.latitude,
    //             10
    //           ),
    //           longitude: parseInt(
    //             event._embedded.venues[0].location.longitude,
    //             10
    //           )
    //         }
    //       };
    //       return eventobj;
    //     });

    //     console.log(data);
    //     this.setState({
    //       region: {
    //         ...this.state.region
    //       },
    //       markers,
    //       mapLoaded: true
    //     });
    //   });
  }

  onRegionChangeComplete = region => {
    this.setState({ region });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../assets/dotted.png")}
          style={styles.fullbackground}
          imageStyle={styles.dotted}
          resizeMode="contain"
        >
          <View style={styles.headerShapeLeft} />
          <View style={styles.headerShapeRight} />
          <View style={styles.HeaderContainer}>
            <Text style={styles.headerTitle}>Map</Text>
          </View>
          <View style={styles.container}>
            <ImageBackground
              source={require("../../assets/skyline.png")}
              style={styles.screenContainer}
              imageStyle={styles.backgroundImage}
              resizeMode="contain"
            >
              <View style={styles.eventContainer}>
                {this.state.mapLoaded ? (
                  <MapView
                    region={this.state.region}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                    style={{ flex: 1 }}
                    cacheEnabled={Platform.OS === "android" ? true : false}
                  >
                    {this.state.markers.map((marker, index) => (
                      <Marker
                        key={index}
                        coordinate={marker.geoLocation}
                        title={marker.title}
                        description={marker.description}
                        onPress={() => {
                          console.log("open model");
                          this.setState({
                            selectedMarker: index,
                            modalVisible: true
                          });
                        }}
                      />
                    ))}
                  </MapView>
                ) : (
                  <ActivityIndicator size="large" />
                )}
                <Button
                  title="press me"
                  onPress={() => {
                    this.setState({ modalVisible: true });
                  }}
                />
                <Modal
                  isVisible={this.state.modalVisible}
                  style={styles.bottomModal}
                  onBackdropPress={() => {
                    this.setState({ modalVisible: false });
                  }}
                  useNativeDriver
                  hideModalContentWhileAnimating
                  backdropTransitionOutTiming={0}
                  backdropTransitionInTiming={0}
                  hasBackdrop
                  onSwipeComplete={() => {
                    this.setState({ modalVisible: false });
                  }}
                  swipeDirection="down"
                  deviceHeight={height}
                  deviceWidth={width}
                  onBackButtonPress={() => {
                    this.setState({ modalVisible: false });
                  }}
                >
                  <View style={styles.modalContent}>
                    <View style={styles.greenBorderContainer}>
                      <View style={styles.greenBorder} />
                    </View>
                    <EventComp
                      item={this.state.markers[this.state.selectedMarker]}
                      modal
                      removeModal={() => {
                        this.setState({ modalVisible: false });
                      }}
                    />
                  </View>
                </Modal>
              </View>
            </ImageBackground>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

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
    marginTop: 30,
    height: "90%",
    marginHorizontal: 30,
    borderRadius: 20,
    overflow: "hidden"
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
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
  }
});

export { MapScreen };
