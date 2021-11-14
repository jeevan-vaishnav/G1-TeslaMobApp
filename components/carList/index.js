import React from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import cars from "./cars";
import CarItem from "../carItem";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default CarsList;
{
  /* <CarItem
name={"Model X"}
tagline={"Order Online for "}
taglineCTA={"Touchless Delivery"}
image={require("../../assets/images/Model3.jpeg")}
/> */
}
