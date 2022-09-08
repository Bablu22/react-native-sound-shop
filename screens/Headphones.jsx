import { View, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CategoryBanner from "../components/CategoryBanner";
import BannerTitle from "../components/BannerTitle";
import CategoryProduct from "../components/CategoryProduct";
import Footer from "../components/Footer";

export default function Headphones() {
  const { status, products } = useSelector((state) => ({ ...state.products }));

  // Headpnones Products
  const headphonesProducts = products.filter(
    (product) => product.category === "headphones"
  );

  return (
    <ScrollView>
      <BannerTitle />
      <CategoryBanner title="HEADPHONES" />
      <View style={{ margin: 20 }}>
        {headphonesProducts.map((product) => (
          <CategoryProduct key={product.id} product={product} />
        ))}
      </View>
      <Footer />
    </ScrollView>
  );
}
