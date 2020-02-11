import { createStackNavigator } from "react-navigation-stack";
import BaseNavigation from "./BaseNavigation";
import MyEventsScreen from "../screens/MyEventsScreen";
import { AddScreen } from "../screens";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: BaseNavigation
    },
    MyEvents: {
      screen: MyEventsScreen
    },
    AddEvent: {
      screen: AddScreen
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    mode: "card"
  }
);

export default AppNavigator;
