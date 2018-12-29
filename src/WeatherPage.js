import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from "react-native";
import Card from "./components/Card";

const s = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
  },

  subWrapper: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 12,
  },
});

const getImageURLByCode = code => {
  if (code === null) return null;
  code = parseInt(code, 10);

  if (code > 100 && code < 300)
    return "https://images.unsplash.com/photo-1429552077091-836152271555?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=332&q=80";
  if (code > 299 && code < 400)
    return "https://images.unsplash.com/photo-1541919329513-35f7af297129?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
  if (code > 399 && code < 600)
    return "https://images.unsplash.com/photo-1525087740718-9e0f2c58c7ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";
  if (code > 599 && code < 700)
    return "https://images.unsplash.com/photo-1514030849962-49ac486d3d20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80";
  if (code > 699 && code < 800)
    return "https://images.unsplash.com/photo-1527334134460-f21a05ef62f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80";
  if (code === 800)
    return "https://images.unsplash.com/photo-1509803874385-db7c23652552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
  if (code > 799 && code < 900)
    return "https://images.unsplash.com/photo-1489396484786-6fd33253e5fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";

  return null;
};

class WeatherPage extends React.PureComponent {
  render() {
    const { temp, description, city, iconUri, code } = this.props;

    const image = getImageURLByCode(code);

    return (
      <SafeAreaView style={s.wrapper}>
        <ImageBackground
          style={s.wrapper}
          source={image ? { uri: image } : undefined}
        >
          <View style={s.subWrapper}>
            <Card>
              <Text style={{ fontSize: 34, textAlign: "center" }}>{city}</Text>
              <View style={s.row}>
                {iconUri ? (
                  <Image
                    source={{ uri: iconUri }}
                    resizeMode="contain"
                    style={{ width: 80, height: 80 }}
                  />
                ) : null}
                <Text style={{ fontSize: 60 }}>{temp}°</Text>
              </View>
              <Text style={{ fontSize: 28, textAlign: "center" }}>
                {description}
              </Text>
            </Card>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default WeatherPage;
