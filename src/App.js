import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { weather } from "@api";
import WeatherPage from "./WeatherPage";

const getPosition = options =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });

export default class App extends React.Component {
  state = {
    loading: false,
    errorMessage: "",

    temp: "",
    description: "",
    city: "",
    iconUri: "",
    code: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const { coords } = await getPosition({
        enableHighAccuracy: true,
        timeout: 2000,
      });
      const response = await weather.getByCoordinates(
        coords.latitude,
        coords.longitude
      );
      if (response.count > 0) {
        const [weatherData] = response.data;

        this.setState({
          city: weatherData.city_name,
          temp: weatherData.temp,
          description: weatherData.weather.description,
          iconUri: `https://www.weatherbit.io/static/img/icons/${
            weatherData.weather.icon
          }.png`,
          code: weatherData.weather.code,
          loading: false,
        });
      }
    } catch (e) {
      this.setState({ loading: false, errorMessage: e.message });
    }
  }

  render() {
    const {
      loading,
      temp,
      description,
      city,
      iconUri,
      code,
      errorMessage,
    } = this.state;

    return (
      <View style={styles.container}>
        {loading ? (
          <Text>Загрузка ...</Text>
        ) : errorMessage ? (
          <Text style={{ color: "tomato" }}>{errorMessage}</Text>
        ) : (
          <WeatherPage
            temp={temp}
            description={description}
            city={city}
            code={code}
            iconUri={iconUri}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
