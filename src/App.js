import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { weather } from "@api";

const getPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

export default class App extends React.Component {
  state = {
    loading: false,

    temp: "",
    wind: "",
    windSpeed: "",
    description: "",
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const { coords } = await getPosition();

    try {
      const response = await weather.getByCoordinates(
        coords.latitude,
        coords.longitude
      );
      if (response.count > 0) {
        const [weatherData] = response.data;

        this.setState({
          temp: weatherData.temp,
          wind: weatherData.wind_cdir_full,
          windSpeed: weatherData.wind_spd,
          description: weatherData.weather.description,
          loading: false,
        });
      }
    } catch (e) {
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading, temp, wind, windSpeed, description } = this.state;

    return (
      <View style={styles.container}>
        {loading ? (
          <Text>Загрузка ...</Text>
        ) : (
          <>
            <Text>Температура: {temp} °С</Text>
            <Text>Ветер: {wind}</Text>
            <Text>Скорость ветра: {windSpeed} м/с</Text>
            <Text>Погода: {description}</Text>
          </>
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
