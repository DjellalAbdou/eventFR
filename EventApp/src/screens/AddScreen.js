import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  Image
} from "react-native";
import EventComp from "../components/EventComp";
import { Feather } from "@expo/vector-icons";
import IconRippleButton from "../components/IconRippleButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import TextArea from "react-native-textarea";
import { Dropdown } from "react-native-material-dropdown";
import SearchableDropdown from "react-native-searchable-dropdown";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import ModalDropdown from "react-native-modal-dropdown";
import { Formik } from "formik";
import { chooseFile } from "../utils/cameraUtil";

const { height, width } = Dimensions.get("window");
let data = [
  {
    value: "Banana"
  },
  {
    value: "Mango"
  },
  {
    value: "Pear"
  }
];

class AddScreen extends Component {
  date = new Date();

  state = {
    date: this.date,
    timeStart: this.date.getHours() + ":" + this.date.getMinutes(),
    timeEnd: this.date.getHours() + ":" + this.date.getMinutes(),
    mode: "date",
    show: false,
    isTimeStart: false,
    isTimeEnd: false,
    imageDetails: null
  };

  onChangePicker = (event, selectedDate) => {
    //console.log(this.state.mode);
    const currentDate =
      this.state.mode === "date"
        ? selectedDate || this.state.date
        : this.state.date;

    const chosenTime =
      this.state.mode === "time"
        ? selectedDate.getHours() + ":" + selectedDate.getMinutes() ||
          this.state.date.getHours() + ":" + this.state.date.getMinutes()
        : this.state.date.getHours() + ":" + this.state.date.getMinutes();

    this.setState({
      timeStart: this.state.isTimeStart ? chosenTime : this.state.timeStart,
      timeEnd: this.state.isTimeEnd ? chosenTime : this.state.timeEnd,
      date: currentDate,
      show: Platform.OS === "ios" ? true : false,
      isTimeStart: false,
      isTimeEnd: false
    });
  };

  render() {
    return (
      <View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <KeyboardAwareScrollView
            enableOnAndroid={true}
            enableAutomaticScroll={Platform.OS === "ios"}
          >
            <SafeAreaView>
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
                      onPress={() => this.props.navigation.goBack()}
                    />
                    <Text style={styles.headerTitle}>Ajouter evenement</Text>
                  </View>
                </View>
                <View style={styles.container}>
                  <ImageBackground
                    source={require("../../assets/skyline.png")}
                    style={styles.screenContainer}
                    imageStyle={styles.backgroundImage}
                    resizeMode="contain"
                    resizeMethod="auto"
                  >
                    <View style={styles.eventContainer}>
                      <View style={styles.formContainer}>
                        <Formik
                          initialValues={{
                            name: "",
                            description: "",
                            city: "",
                            street: "",
                            nbParticipant: ""
                          }}
                          onSubmit={values => {
                            let finishedObj = {
                              ...values,
                              timeStart: this.state.timeStart,
                              timeEnd: this.state.timeEnd,
                              date: this.state.date,
                              imageDetails: this.state.imageDetails
                            };
                            console.log(finishedObj);
                          }}
                        >
                          {formikProps => (
                            <View>
                              <View style={styles.sectionContainer}>
                                <Text style={styles.textTitle}>nom</Text>
                                <TextInput
                                  style={styles.textInput}
                                  name="name"
                                  value={formikProps.values.name}
                                  placeholder="nom de l'événement..."
                                  placeholderTextColor="#BBBBBB"
                                  selectionColor="#76EF4D"
                                  onChangeText={formikProps.handleChange(
                                    "name"
                                  )}
                                />
                              </View>
                              <View style={styles.sectionContainer}>
                                <Text style={styles.textTitle}>Date</Text>
                                <TouchableOpacity
                                  onPress={() => {
                                    this.setState({
                                      mode: "date",
                                      show: true
                                    });
                                  }}
                                >
                                  <TextInput
                                    style={styles.textInput}
                                    name="date"
                                    editable={false}
                                    value={
                                      this.state.date.getDate() +
                                      "-" +
                                      (this.state.date.getMonth() + 1) +
                                      "-" +
                                      this.state.date.getFullYear()
                                    }
                                    placeholder="choissisez..."
                                    placeholderTextColor="#BBBBBB"
                                    selectionColor="#76EF4D"
                                    onChangeText={formikProps.handleChange(
                                      "date"
                                    )}
                                  />
                                </TouchableOpacity>
                              </View>

                              <View style={styles.sectionContainer}>
                                <Text style={styles.textTitle}>temps</Text>
                                <View style={styles.timeContainer}>
                                  <TouchableOpacity
                                    style={{ width: "45%" }}
                                    onPress={() => {
                                      this.setState({
                                        mode: "time",
                                        show: true,
                                        isTimeStart: true
                                      });
                                    }}
                                  >
                                    <TextInput
                                      style={[styles.textInput]}
                                      name="timeStart"
                                      //value={inputField}
                                      value={this.state.timeStart}
                                      placeholder="debut..."
                                      placeholderTextColor="#BBBBBB"
                                      onChangeText={formikProps.handleChange(
                                        "timeStart"
                                      )}
                                      //clearTextOnFocus
                                      //onChangeText={text => handleChange(text)}
                                      selectionColor="#76EF4D"
                                      editable={false}
                                      //onBlur={() => handleFocuse(false)}
                                    />
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    style={{ width: "45%" }}
                                    onPress={() => {
                                      this.setState({
                                        mode: "time",
                                        show: true,
                                        isTimeEnd: true
                                      });
                                    }}
                                  >
                                    <TextInput
                                      style={[styles.textInput]}
                                      name="timeEnd"
                                      //value={inputField}
                                      placeholder="fin..."
                                      value={this.state.timeEnd}
                                      placeholderTextColor="#BBBBBB"
                                      onChangeText={formikProps.handleChange(
                                        "timeEnd"
                                      )}
                                      //clearTextOnFocus
                                      //onChangeText={text => handleChange(text)}
                                      selectionColor="#76EF4D"
                                      editable={false}
                                      //onBlur={() => handleFocuse(false)}
                                    />
                                  </TouchableOpacity>
                                </View>
                              </View>

                              <View style={styles.sectionContainer}>
                                <Text style={styles.textTitle}>Image</Text>
                                <TouchableOpacity
                                  onPress={() => chooseFile(this)}
                                  style={styles.imageWrapper}
                                >
                                  {this.state.imageDetails !== null ? (
                                    <Image
                                      style={styles.choosenImg}
                                      source={{
                                        uri: this.state.imageDetails.uri
                                      }}
                                    />
                                  ) : (
                                    <Feather
                                      name="image"
                                      size={50}
                                      color="#062743"
                                    />
                                  )}
                                </TouchableOpacity>
                              </View>
                              <View style={styles.sectionContainer}>
                                <Text style={styles.textTitle}>
                                  description
                                </Text>
                                <TextArea
                                  //style={{ height: 180 }}
                                  name="description"
                                  onChangeText={formikProps.handleChange(
                                    "description"
                                  )}
                                  value={formikProps.values.description}
                                  multiline
                                  containerStyle={styles.textArea}
                                  maxLength={200}
                                  placeholder="ecrire une description"
                                />
                              </View>
                              <View style={styles.sectionContainer}>
                                <Text style={styles.textTitle}>location</Text>
                                <View style={styles.timeContainer}>
                                  <TextInput
                                    style={[styles.textInput, { width: "45%" }]}
                                    name="city"
                                    value={formikProps.values.city}
                                    onChangeText={formikProps.handleChange(
                                      "city"
                                    )}
                                    //value={inputField}
                                    placeholder="ville..."
                                    placeholderTextColor="#BBBBBB"
                                    //clearTextOnFocus
                                    //onChangeText={text => handleChange(text)}
                                    selectionColor="#76EF4D"
                                    //onFocus={() => handleFocuse(true)}
                                    //onBlur={() => handleFocuse(false)}
                                  />
                                  <TextInput
                                    style={[styles.textInput, { width: "45%" }]}
                                    name="street"
                                    value={formikProps.values.street}
                                    onChangeText={formikProps.handleChange(
                                      "street"
                                    )}
                                    //value={inputField}
                                    placeholder="rue..."
                                    placeholderTextColor="#BBBBBB"
                                    //clearTextOnFocus
                                    //onChangeText={text => handleChange(text)}
                                    selectionColor="#76EF4D"
                                    //onFocus={() => handleFocuse(true)}
                                    //onBlur={() => handleFocuse(false)}
                                  />
                                </View>
                              </View>
                              <View style={styles.sectionContainer}>
                                <Text style={styles.textTitle}>
                                  nombre de partisipant
                                </Text>
                                <TextInput
                                  style={styles.textInput}
                                  name="nbParticipant"
                                  onChangeText={formikProps.handleChange(
                                    "nbParticipant"
                                  )}
                                  value={formikProps.values.nbParticipant}
                                  placeholder="nombre..."
                                  placeholderTextColor="#BBBBBB"
                                  selectionColor="#76EF4D"
                                  keyboardType="number-pad"
                                />
                              </View>
                              <View
                                style={[
                                  styles.sectionContainer,
                                  {
                                    justifyContent: "center",
                                    alignItems: "center"
                                  }
                                ]}
                              >
                                <TouchableOpacity
                                  style={styles.sendBtn}
                                  onPress={formikProps.handleSubmit}
                                >
                                  <Text style={styles.sendTxt}>ajouter</Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          )}
                        </Formik>
                      </View>
                      {this.state.show && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          timeZoneOffsetInMinutes={0}
                          value={this.state.date}
                          mode={this.state.mode}
                          is24Hour={true}
                          display="default"
                          onChange={this.onChangePicker}
                        />
                      )}
                    </View>
                  </ImageBackground>
                </View>
              </ImageBackground>
            </SafeAreaView>
          </KeyboardAwareScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export { AddScreen };

const styles = StyleSheet.create({
  fullbackground: {
    //height: "300%",
    width,
    backgroundColor: "#76EF4D"
  },
  dotted: {
    position: "absolute",
    //top: -height / 2 + 20,
    top: 0,
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
    height: (height * 22) / 100,
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
    //height: height,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: "#062743",
    shadowOffset: { height: 0, width: 0 },
    elevation: 2
  },
  screenContainer: {
    width: width,
    //height: "78%",
    backgroundColor: "#F8F8F8",
    borderTopLeftRadius: 31,
    borderTopRightRadius: 31
  },
  backgroundImage: {
    position: "absolute",
    top: "auto",
    bottom: -62,
    width: width,
    height: 250,
    opacity: 0.33
    //backgroundColor: "red"
  },
  eventContainer: {
    marginTop: 20,
    marginBottom: 120
  },
  goBackContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  gobackArrow: {
    position: "absolute",
    left: 20
  },
  formContainer: {
    //height: "80%",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 17,
    paddingTop: 30,
    marginHorizontal: 20,
    borderRadius: 16,
    shadowOpacity: 0.29,
    shadowRadius: 10,
    shadowColor: "#4A4646",
    shadowOffset: { height: 0, width: 0 },
    elevation: 2
  },
  textInput: {
    //paddingLeft: 30,
    fontSize: 18,
    color: "#062743",
    borderBottomColor: "#76EF4D",
    borderBottomWidth: 2,
    paddingBottom: 5
  },
  dropDown: {
    borderBottomColor: "#76EF4D",
    borderBottomWidth: 2,
    paddingBottom: 5
  },
  textTitle: {
    fontSize: 18,
    color: "#062743",
    textTransform: "capitalize",
    fontWeight: "bold",
    marginBottom: 10
  },
  imageWrapper: {
    marginTop: 20,
    height: 150,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.29,
    shadowRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { height: 0, width: 0 },
    elevation: 2,
    backgroundColor: "#FFFFFF",
    overflow: "hidden"
  },
  sectionContainer: {
    marginBottom: 30
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#BBBBBB",
    borderRadius: 11,
    padding: 10,
    height: 180
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
  },
  choosenImg: {
    height: 150,
    width: "100%"
  }
});
