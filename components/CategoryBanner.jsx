import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../theme";
import Text from "./text/text";

const CategoryBanner = ({ title }) => {
  return (
    <View style={styles.constiner}>
      <Text preset="h4" uppercase white>
        {title}
      </Text>
    </View>
  );
};

export default CategoryBanner;

const styles = StyleSheet.create({
  constiner: {
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderTopColor: "#979797",
  },
});
