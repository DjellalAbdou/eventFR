import { createStackNavigator } from "react-navigation-stack";
import BaseNavigation from "./BaseNavigation";
import MyEventsScreen from "../screens/MyEventsScreen";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: BaseNavigation
    },
    MyEvents: {
      screen: MyEventsScreen
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    mode: "card"
  }
);

export default AppNavigator;
