import React from "react";
import {
	StyleSheet,
	Text,
	Image,
	View,
} from "react-native";
import { colors, size, styled_components } from "../styles/styles";

export const WeatherBox = ({city}) => {
	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<Image 
					style={{width : 80, height : 80}}
					source={{uri : `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}} />
				<View style={styles.min_max}>
					<Text>Max : {city.main.temp_max} C</Text>
					<Text style={styles.temp}>{city.main.temp} C</Text>
					<Text>Min : {city.main.temp_min} C</Text>
				</View>
				<View style={styles.extras}>
					<Text>Pressure : {city.main.pressure}</Text>
					<Text>Humidity : {city.main.humidity}</Text>
				</View>
			</View>
			<Text style={styled_components.title}>{city.name}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		alignItems: "center",
		justifyContent: "center",
	},
	box : {
		flex : .4,
		padding : size.md,
		marginBottom : "10%",
		flexDirection : "row",
		backgroundColor: colors.secondary,
		alignItems: "center",
	},
	temp : {
		fontSize : size.xl,
		fontWeight : "bold",
		padding : size.md
	},
	min_max : {
		height : "150%",
		padding : size.xl,
		justifyContent : "space-between",
		alignItems : "center",
	},
	extras : {
		justifyContent : "space-between",
		alignItems : "center",
		padding : size.md,
		flexDirection : "column"
	}
});
