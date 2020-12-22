import React from "react";
import {
  AddScreen,
  CalendarScreen,
  HomeScreen,
  LikesScreen,
  SettingsScreen,
  MapScreen
} from "../screens";
import TestScreen from "../screens/TestScreen";
import { Routes } from "./routes/navigationRoutes";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Feather } from "@expo/vector-icons";
import AddButton from "../components/AddButton";

const BaseNavigation = createBottomTabNavigator(
  {
    [Routes.TabHome]: {
      screen: HomeScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Feather name="home" size={18} color={tintColor} />
        )
      })
    },
    [Routes.TabLikes]: {
      screen: LikesScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Feather name="heart" size={18} color={tintColor} />
        )
      })
    },
    [Routes.TabAdd]: {
      screen: AddScreen,
      navigationOptions: () => ({
        tabBarIcon: <AddButton />
      })
    },
    [Routes.TabCalendar]: {
      screen: MapScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Feather name="map" size={18} color={tintColor} />
        )
      })
    },
    [Routes.TabSettings]: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Feather name="settings" size={18} color={tintColor} />
        )
      })
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#76EF4D",
      inactiveTintColor: "#ffffff",
      style: {
        backgroundColor: "#062743",
        height: 50
      },
      tabStyle: {}
    }
  }
);

export default BaseNavigation;
