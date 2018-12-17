const API_KEY = "c2416309341347adb3a2206e10a7db1c";

class WeatherProvider {
  config = {
    baseUrl: "https://api.weatherbit.io/v2.0/",
    apiKey: API_KEY,
    lang: "ru",
  };

  constructor(config) {
    Object.assign(this.config, config);
  }

  getByCoordinates = (lat, lng) =>
    fetch(
      `${this.config.baseUrl}/current/?lang=${this.config.lang}&key=${
        this.config.apiKey
      }&lat=${lat}&lon=${lng}`
    ).then(res => res.json());

  getByName = (name, country = "RU") =>
    fetch(
      `${this.config.baseUrl}/current/?lang=${this.config.lang}&key=${
        this.config.apiKey
      }&city=${name}&country=${country}`
    ).then(res => res.json());
}

export default new WeatherProvider({});
