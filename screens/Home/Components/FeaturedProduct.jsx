import { View, useWindowDimensions, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../../../theme";
import Text from "../../../components/text/text";

const FeaturedProduct = ({ title, image, onPress, name, category }) => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.contsiner}>
      <View style={[styles.outerCircle, { width: width - 50 }]}>
        <View style={[styles.innercircle, { width: width - 90 }]}>
          <Image
            source={image}
            style={{ height: 172, width: 180 }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={{ paddingBottom: 32, marginTop: 24 }}>
        <Text preset="h3" centered uppercase white>
          {name}
        </Text>
        <Text preset="h3" centered uppercase white>
          {category}
        </Text>
        <Text style={{ width: 250, marginTop: 16 }} white centered>
          Upgrade to premium speakers that are phenominally build to deliver
          truly remarkbale sound
        </Text>
      </View>
    </View>
  );
};

export default FeaturedProduct;

const styles = StyleSheet.create({
  contsiner: {
    marginVertical: 20,
    backgroundColor: colors.primary,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  outerCircle: {
    borderWidth: 1,
    borderColor: "#d8d8d8",
    borderRadius: 400,
    height: 320,
    alignItems: "center",
    justifyContent: "center",
  },
  innercircle: {
    borderWidth: 1,
    borderColor: "#d8d8d8",
    borderRadius: 400,
    height: 280,
    alignItems: "center",
    justifyContent: "center",
  },
});
