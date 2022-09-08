import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../theme";
import { Feather } from "@expo/vector-icons";
import Text from "../components/text/text";
import CounterInput from "react-native-counter-input";
import { addToCart } from "../store/CartSlice";

export default function DetailS({ navigation, route }) {
  const id = route.params.id;
  const { status, products } = useSelector((state) => ({ ...state.products }));
  const product = products.find((item) => item.id === id);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const addCart = () => {
    if (count === 0) {
      return Alert.alert("You cant add 0 items");
    }

    const CartProduct = {
      name: product.name,
      id: product.id,
      image: product.featuredImage,
      price: product.price,
      quantityPrice: product.price * count,
      count: count,
    };

    dispatch(addToCart(CartProduct ));
    Alert.alert("Product added to cart");
  };

  return (
    <ScrollView>
      <Pressable onPress={() => navigation.goBack()} style={{ padding: 20 }}>
        <Feather name="arrow-left" size={24} color={colors.primary} />
      </Pressable>
      <View style={styles.contsiner}>
        <Image source={product.featuredImage.source} />
      </View>
      <View style={{ padding: 20 }}>
        <Text preset="h2">{product.name}</Text>
        <Text preset="h2" uppercase>
          {product.category}
        </Text>
        <View>
          <Text
            textColor="#7d7d7d"
            style={{ marginTop: 10, textAlign: "justify" }}
          >
            {product.description}
          </Text>
          <Text preset="h3" style={{ marginTop: 15 }}>
            $ {product.price}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 16,
            justifyContent: "space-between",
          }}
        >
          <CounterInput
            initial={count}
            horizontal
            backgroundColor={colors.grey}
            style={{ borderRadius: 3 }}
            onChange={(counter) => {
              if (counter >= 0) {
                setCount(counter);
              }
            }}
          />
          <TouchableOpacity onPress={addCart} style={[styles.button]}>
            <Text style={{ color: colors.white }} centered>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text preset="h5">FEATURES</Text>
          <Text
            textColor="#7d7d7d"
            style={{ paddingTop: 12, lineHeight: 25, textAlign: "justify" }}
          >
            {product.features}
          </Text>
        </View>
        <View>
          {product.includedItems && (
            <View style={{ marginVertical: 20 }}>
              <Text preset="h4">IN THE BOX</Text>
              {product.includedItems.map((item) => (
                <View
                  key={item.name}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 12,
                  }}
                >
                  <Text preset="h6" textColor={colors.primary}>
                    {item.amount}x
                  </Text>
                  <Text textColor="#7d7d7d" style={{ marginLeft: 20 }}>
                    {item.name}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
        <View style={{ marginVertical: 32 }}>
          {product.images.map((item, index) => (
            <View
              key={index.toString()}
              style={{ marginVertical: 12, overflow: "hidden" }}
            >
              <Image
                source={item.source}
                style={{ alignSelf: "center", width: "100%", borderRadius: 12 }}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

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
    width: "50%",
    marginTop: 20,
    padding: 19,
    borderRadius: 3,
    marginBottom: 20,
  },
});
