import React, {useEffect, useState} from "react";
import { TouchableOpacity, Image , StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors, size, styled_components } from "../styles/styles";
import SearchIcon from "../icons/loupe.png"

export const Home =  (props) => {
  const [city, setCity] = useState(null)
  const [errors, setErrors] = useState(null)

  const CITIES = [
		"New York",
		"London",
		"Ohio",
    "Tokyo",
		"Illinois",
    "Patna",
		"Delhi",
		"Kolkata",
    "Zurich",
    "Delaware",
	];

  const fetchWeather = (name) =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=8c162db965960ac6ab92a2a2b887e217`)
    .then(resp => resp.json())
    .then(d=> {
      if (d.cod === 200){
        props.navigation.navigate("City", {city: d})
        setErrors(null)
      }
      else{
        setErrors(d)
      }
    })
    .catch(e => console.log(e))
  }

  // useEffect(() => fetchWeather("London"), [])

  return (
		<View style={styles.container}>
      {
        errors && <Text style={{ color : "crimson", fontWeight : "bold"}}>{errors.message}</Text> 
      }
			<Text style={styled_components.subtitle}>Search How Your City Feels Like Today</Text>
      <TextInput
        style = {styles.input}
        placeholder = "Enter City Name"
        onChangeText = {text => setCity(text)}
        onSubmitEditing = {() => fetchWeather(city)}
      />
      <TouchableOpacity
        style = {styles.button}
        onPress={() =>{ 
          city && fetchWeather(city)
        }}
      >
        <Image 
          style={{height : 30, width : 30}}
          source={SearchIcon}
        />
      </TouchableOpacity>
      <Text style={{...styled_components.subtitle, fontSize : 15, margin : size.md}}>
        Check Out..How These Cities Feel Like !!  
      </Text>
      <View style={styles.cityList}>
        {
          CITIES.map( city =>(
            <TouchableOpacity
            key={city}
            style={styles.pills}
            onPress={() => fetchWeather(city)}
            >
              <Text>{city}</Text>
            </TouchableOpacity>
            )
            ) 
        }
      </View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
    height : 30,
    width : "80%",
    padding: size.xs,
		margin: size.md,
		backgroundColor: colors.input,
    textAlign: "center",
    justifyContent: "center",
	},
	button: {
		margin: size.md,
		padding: size.xs,
		height: 60,
		width: 60,
		borderRadius: 50,
		justifyContent: "center",
    alignItems : "center",
		backgroundColor: colors.buttons,
	},
  cityList: {
    width : "100%",
    flexWrap : "wrap",
    flexDirection : "row",
    justifyContent : "space-evenly"
  },  
  pills: {
    backgroundColor : colors.secondary,
    margin: size.sm,
    padding : size.sm,
    borderRadius : 50,

  }
});
