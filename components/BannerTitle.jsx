import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../theme/Colors";

const BannerTitle = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/audiophile.png")} />
    </View>
  );
};

export default BannerTitle;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
});
