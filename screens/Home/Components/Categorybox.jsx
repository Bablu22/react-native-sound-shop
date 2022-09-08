import { Image, Pressable, View } from "react-native";
import React from "react";
import { colors } from "../../../theme";
import { AntDesign } from "@expo/vector-icons";
import Text from "../../../components/text/text";

export default function Categorybox({ title, image, onPress }) {
  return (
    <Pressable
      style={{
        marginVertical: 32,
        marginHorizontal: 20,
        borderRadius: 16,
        backgroundColor: colors.grey,
        alignItems: "center",
        padding: 20,
      }}
    >
      <Image source={image} style={{ top: -60 }} />
      <View
        style={{ alignItems: "center", justifyContent: "center", top: -20 }}
      >
        <Text preset="h6">{title}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text
          preset="subtitle"
          centerd
          textColor="#7c7c7c"
          style={{ marginRight: 10 }}
        >
          SHOP
        </Text>
        <AntDesign name="right" size={14} color={colors.primary} />
      </View>
    </Pressable>
  );
}
