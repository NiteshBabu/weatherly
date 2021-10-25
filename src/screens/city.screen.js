import React, { useState } from "react";
import {TextInput, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { WeatherBox } from "../components/weather-box.components";
import { colors, size, styled_components } from "../styles/styles";

export const City = ({navigation, route}) =>{
  const city = route.params.city
  return (
		<View style={styles.container}>
			<WeatherBox city={city} />
			<Text style={{ ...styled_components.subtitle, marginTop: "30%", height : "10%" }}>
				===={city.weather[0].main}====
			</Text>
		</View>
	);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: colors.background,
		alignItems: "center",
    justifyContent : "space-between"
	},
});
