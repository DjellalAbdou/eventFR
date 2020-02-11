import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import EventComp from "../components/EventComp";
import { Feather } from "@expo/vector-icons";
import IconRippleButton from "../components/IconRippleButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import TextArea from "react-native-textarea";
import { Dropdown } from "react-native-material-dropdown";

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
  state = {
    date: new Date(),
    mode: "date",
    show: false
  };

  render() {
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
            >
              <ScrollView>
                <View style={styles.eventContainer}>
                  <View style={styles.formContainer}>
                    <View style={styles.sectionContainer}>
                      <Text style={styles.textTitle}>nom</Text>
                      <TextInput
                        style={styles.textInput}
                        name="inputField"
                        //value={inputField}
                        placeholder="nom de l'événement..."
                        placeholderTextColor="#BBBBBB"
                        //clearTextOnFocus
                        //onChangeText={text => handleChange(text)}
                        selectionColor="#76EF4D"
                        //onFocus={() => handleFocuse(true)}
                        //onBlur={() => handleFocuse(false)}
                      />
                    </View>
                    <View style={styles.sectionContainer}>
                      <Text style={styles.textTitle}>Date</Text>
                      <TextInput
                        style={styles.textInput}
                        name="inputField"
                        //value={inputField}
                        placeholder="choissisez..."
                        placeholderTextColor="#BBBBBB"
                        //clearTextOnFocus
                        //onChangeText={text => handleChange(text)}
                        selectionColor="#76EF4D"
                        onFocus={() => {
                          this.setState({ mode: "date", show: true });
                        }}
                        //onBlur={() => handleFocuse(false)}
                      />
                    </View>

                    <View style={styles.sectionContainer}>
                      <Text style={styles.textTitle}>temps</Text>
                      <View style={styles.timeContainer}>
                        <TextInput
                          style={[styles.textInput, { width: "45%" }]}
                          name="inputField"
                          //value={inputField}
                          placeholder="debut..."
                          placeholderTextColor="#BBBBBB"
                          //clearTextOnFocus
                          //onChangeText={text => handleChange(text)}
                          selectionColor="#76EF4D"
                          onFocus={() => {
                            this.setState({ mode: "time", show: true });
                          }}
                          //onBlur={() => handleFocuse(false)}
                        />
                        <TextInput
                          style={[styles.textInput, { width: "45%" }]}
                          name="inputField"
                          //value={inputField}
                          placeholder="fin..."
                          placeholderTextColor="#BBBBBB"
                          //clearTextOnFocus
                          //onChangeText={text => handleChange(text)}
                          selectionColor="#76EF4D"
                          onFocus={() => {
                            this.setState({ mode: "time", show: true });
                          }}
                          //onBlur={() => handleFocuse(false)}
                        />
                      </View>
                    </View>

                    <View style={styles.sectionContainer}>
                      <Text style={styles.textTitle}>Image</Text>
                      <TouchableOpacity style={styles.imageWrapper}>
                        <Feather name="image" size={50} color="#062743" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.sectionContainer}>
                      <Text style={styles.textTitle}>description</Text>
                      {/* <TextInput
                        name="inputField"
                        style={styles.textArea}
                        //value={inputField}
                        editable={true}
                        multiline={true}
                        placeholder="nom de l'événement..."
                        placeholderTextColor="#BBBBBB"
                        
                        //clearTextOnFocus
                        //onChangeText={text => handleChange(text)}
                        selectionColor="#76EF4D"
                        //onFocus={() => handleFocuse(true)}
                        //onBlur={() => handleFocuse(false)}
                      /> */}
                      <TextArea
                        containerStyle={styles.textArea}
                        maxLength={200}
                        placeholder="ecrire une description"
                      />
                    </View>
                    <View>
                      <Text style={styles.textTitle}>location</Text>
                      <View>
                        <Dropdown
                          label="Ville"
                          baseColor="#76EF4D"
                          textColor="#062743"
                          itemColor="#062743"
                          itemTextStyle={styles.dropDown}
                          data={data}
                        />
                        <TextInput
                          name="inputField"
                          //value={inputField}
                          placeholder="nom de l'événement..."
                          placeholderTextColor="#BBBBBB"
                          //clearTextOnFocus
                          //onChangeText={text => handleChange(text)}
                          selectionColor="#76EF4D"
                          //onFocus={() => handleFocuse(true)}
                          //onBlur={() => handleFocuse(false)}
                        />
                        <TextInput
                          name="inputField"
                          //value={inputField}
                          placeholder="nom de l'événement..."
                          placeholderTextColor="#BBBBBB"
                          //clearTextOnFocus
                          //onChangeText={text => handleChange(text)}
                          selectionColor="#76EF4D"
                          //onFocus={() => handleFocuse(true)}
                          //onBlur={() => handleFocuse(false)}
                        />
                      </View>
                    </View>
                    <View>
                      <Text style={styles.textTitle}>
                        nombre de partisipant
                      </Text>
                      <TextInput
                        name="inputField"
                        //value={inputField}
                        placeholder="nom de l'événement..."
                        placeholderTextColor="#BBBBBB"
                        //clearTextOnFocus
                        //onChangeText={text => handleChange(text)}
                        selectionColor="#76EF4D"
                        //onFocus={() => handleFocuse(true)}
                        //onBlur={() => handleFocuse(false)}
                      />
                    </View>
                  </View>
                </View>
                {this.state.show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={this.state.date}
                    mode={this.state.mode}
                    is24Hour={true}
                    display="default"
                  />
                )}
              </ScrollView>
            </ImageBackground>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export { AddScreen };

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
    left: 20
  },
  formContainer: {
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
    backgroundColor: "#FFFFFF"
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
    padding: 10
    //height: 110
  }
});
