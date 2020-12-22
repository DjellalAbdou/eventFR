import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import BaseNavigation from "./src/navigation/BaseNavigation";
import AppNavigator from "./src/navigation/AppNavigator";
import Root from "./src/navigation/Root";
import { LocaleConfig } from "react-native-calendars";
import NavigationService from "./src/navigation/routes/NavigationService";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ],
  monthNamesShort: [
    "Janv.",
    "Févr.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc."
  ],
  dayNames: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
  ],
  dayNamesShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
  today: "Aujourd'hui"
};
LocaleConfig.defaultLocale = "fr";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Root
        ref={navigationRef => {
          NavigationService.setTopLevelNavigator(navigationRef);
        }}
        theme="light"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
