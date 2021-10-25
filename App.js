import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./src/screens/home.screen";
import { City } from "./src/screens/city.screen";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator mode='card' headerMode='float'>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{
						title: "Welcome To Weatherly",
						headerTitleAlign: "center",
					}}></Stack.Screen>
				<Stack.Screen
					name='City'
					component={City}
					options={{
						title: "Feels Like",
						headerTitleAlign: "center",
						animationTypeForReplace: "push",
						gestureEnabled: true,
						gestureDirection: "horizontal",
						cardStyleInterpolator: forFade,
					}}></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const forFade = ({ current, layouts }) => ({
  cardStyle: {
    // opacity: current.progress,
    transform: [
      {
        translateX: current.progress.interpolate({
          inputRange: [0, 1],
					outputRange: [layouts.screen.width, 0],
				}),
			},
		],
	},
});
