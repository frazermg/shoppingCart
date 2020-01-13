import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      // !! finish off product item props
      renderItem={itemData => <ProductItem />}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: "All Products"
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
