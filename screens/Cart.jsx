import {
  View,
  ScrollView,
  Pressable,
  Image,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Text from "../components/text/text";
import { colors } from "../theme";
import CounterInput from "react-native-counter-input";
import { addToCart, removeCart, reset } from "../store/CartSlice";

export default function Cart() {
  const cart = useSelector((state) => [...state.cart]);
  const totalAmount = cart.reduce((acc, item) => acc + item.quantityPrice, 0);

  const dispatch = useDispatch();

  return (
    <ScrollView>
      <View>
        <View
          style={{
            padding: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text preset="h6">Cart{`(${cart.length})`}</Text>
          <Pressable
            onPress={() => {
              Alert.alert("Remove item ?", "Do you want to remove all item ?", [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                {
                  text: "Remove",
                  onPress: () => dispatch(reset()),
                },
              ]);
            }}
          >
            <Text
              preset="h6"
              style={{ textDecorationLine: "underline", fontWeight: "bold" }}
              textColor="#757575"
            >
              Remove all
            </Text>
          </Pressable>
        </View>
        <View style={{ marginVertical: 20 }}>
          {cart.map((item) => (
            <View
              key={item.id}
              style={{ flexDirection: "row", alignItems: "center", padding: 8 }}
            >
              <View
                style={{
                  backgroundColor: colors.grey,
                  borderRadius: 12,
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 20,
                }}
              >
                <Image
                  source={item.image.source}
                  resizeMode="contain"
                  style={{ height: 36, width: 36 }}
                />
              </View>
              <View style={{ flex: 1, marginLeft: 20 }}>
                <Text preset="h6">{item.name}</Text>
                <Text>{`${item.quantityPrice}`}</Text>
              </View>
              <CounterInput
                initial={item.count}
                horizontal
                backgroundColor={colors.grey}
                increaseButtonBackgroundColor={colors.primary}
                decreaseButtonBackgroundColor={colors.primary}
                style={{ borderRadius: 3, width: 150, height: 50 }}
                onChange={(counter) => {
                  if (counter === 0) {
                    Alert.alert(
                      "Remove item ?",
                      "Do you want to remove this item ?",
                      [
                        {
                          text: "Cancel",
                          onPress: () => console.log("Cancel Pressed"),
                          style: "cancel",
                        },
                        {
                          text: "Remove",
                          onPress: () => dispatch(removeCart(item.id)),
                        },
                      ]
                    );
                  }

                  const cartProduct = {
                    ...item,
                    quantityPrice: counter * item.price,
                    count: counter,
                  };
                  dispatch(addToCart(cartProduct));
                }}
              />
            </View>
          ))}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 20,
            }}
          >
            <Text preset="h5">Total:</Text>
            <Text preset="h5">{`$${totalAmount}`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity>
          <Text style={{ color: colors.white }} centered>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "70%",
    marginTop: 30,
    padding: 19,
    borderRadius: 3,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
