import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  return <FlatList data={products} keyExtractor={products.id} />;
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
