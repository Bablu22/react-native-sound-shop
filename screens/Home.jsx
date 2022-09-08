import {
  View,
  ActivityIndicator,
  ScrollView,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/productSlice";
import BannerTitle from "../components/BannerTitle";
import { colors } from "../theme/Colors";
import Text from "../components/text/text";
import Categorybox from "./Home/Components/Categorybox";
import FeaturedProduct from "./Home/Components/FeaturedProduct";

export default function Home() {
  const dispatch = useDispatch();
  const { status, products } = useSelector((state) => ({ ...state.products }));
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProduct());
    }
  }, []);

  // Featured Products
  const featuredProducts = products.filter((product) => product.is_featured);

  if (status === "looding") {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  } else {
    return (
      <ScrollView>
        <BannerTitle />
        <View style={{ backgroundColor: colors.black }}>
          <Image
            style={{ alignSelf: "center", width: "100%" }}
            source={require("../assets/images/home-banner.png")}
            resizeMode="cover"
          />
        </View>
        <View style={{ position: "absolute", width: "100%", top: 250 }}>
          <Text preset="h2" white centered>
            Welcome
          </Text>
          <Text
            textColor={colors.grey}
            centered
            style={{ width: width - 30, alignSelf: "center", marginTop: 20 }}
          >
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music people
          </Text>
        </View>
        <View style={{ paddingVertical: 32 }}>
          <Categorybox
            title="HEADPHONES"
            image={require("../assets/images/home-headphone.png")}
          />
          <Categorybox
            title="SPEAKERS"
            image={require("../assets/images/home-speaker.png")}
          />
          <Categorybox
            title="EARPHONES"
            image={require("../assets/images/home-earphone.png")}
          />
        </View>
        <View style={{ paddingVertical: 32, paddingHorizontal: 16 }}>
          {featuredProducts.map((product) => (
            <FeaturedProduct
              key={product.id}
              name={product.name}
              image={product.featuredImage.source}
              category={product.category}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}
