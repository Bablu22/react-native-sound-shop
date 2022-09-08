import {
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { colors } from "../theme";
import Text from "./text/text";
import { useNavigation } from "@react-navigation/native";

const CategoryProduct = ({ product }) => {
  const { height, width } = useWindowDimensions();
  const { name, featuredImage, description, id } = product;
  const navigation = useNavigation();
  const handleOnPress = (id) => {
    navigation.navigate("Details", { id: id });
  };
  return (
    <View
      style={{
        borderWidth: 2,
        marginBottom: 20,
        borderColor: colors.grey,
        padding: 10,
      }}
    >
      <View style={styles.contsiner}>
        <Image source={featuredImage.source} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text preset="h3" centered>
          {name}
        </Text>
        <Text preset="h4" centered uppercase>
          headphones
        </Text>
        <Text
          textColor="#919191"
          style={{ marginTop: 20, marginHorizontal: 20, textAlign: "justify" }}
        >
          {description}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => handleOnPress(id)}
        style={[styles.button]}
      >
        <Text style={{ color: colors.white }} centered>
          SEE PRODUCT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryProduct;

const styles = StyleSheet.create({
  contsiner: {
    backgroundColor: colors.grey,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  button: {
    backgroundColor: colors.primary,
    width: "70%",
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 17,
    borderRadius: 3,
    marginBottom: 20,
  },
});
