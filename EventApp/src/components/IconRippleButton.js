import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import Ripple from "react-native-material-ripple";

const IconRippleButton = ({
  style,
  color,
  size,
  name,
  onPress,
  gotoScreen,
  rippleColor
}) => {
  return (
    <Ripple
      onPress={() => onPress(gotoScreen)}
      rippleCentered
      rippleFades
      rippleColor={rippleColor}
      style={style}
      rippleOpacity={0.7}
      rippleContainerBorderRadius={30}
    >
      <View style={styles.MenuBurgerButtonContainer}>
        <Text>
          <Feather name={name} size={size} color={color} />
        </Text>
      </View>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  MenuBurgerButtonContainer: {
    backgroundColor: "transparent",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30
  }
});

export default IconRippleButton;
