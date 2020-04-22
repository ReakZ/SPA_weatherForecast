import React, { Component } from "react";
import axios from "axios";

class WeatherDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
    };
  }

  async componentDidMount() {
    const zip = this.props.city.zip;
    const key = "bb0b0802a59b4e2a9ac00155ebcc3c2a";
    const URL = `https://api.weatherbit.io/v2.0/current?city_id=${zip}&lang=ru&key=${key}`;

    await axios.get(URL).then((x) => this.setState({ weatherData: x }));
  }

  render() {
    const dataWeather = this.state.weatherData
      ? this.state.weatherData.data.data[0]
      : null;
    const lol = dataWeather ? dataWeather.weather.icon : null;
    const iconUrl = "icons\\" + lol + ".png";
    return (
      <>
        <h1>
          {this.props.city.name}{" "}
          <img src={iconUrl} alt="lol" width="64" height="64" />
        </h1>

        <ul>
          <li>Облачность: {dataWeather ? dataWeather.clouds : null}%</li>
          <li>Восход: {dataWeather ? dataWeather.sunset : null}</li>
          <li>Закат: {dataWeather ? dataWeather.sunrise : null}</li>
          <li>Температура: {dataWeather ? dataWeather.temp : null}</li>
          <li>Давление: {dataWeather ? dataWeather.pres : null}</li>
          <li>Влажность: {dataWeather ? dataWeather.rh : null}</li>
          <li>Видимость: {dataWeather ? dataWeather.vis : null}</li>
          <li> {dataWeather > 0 ? dataWeather.snow : null}</li>
        </ul>
      </>
    );
  }
}

export default WeatherDisplay;
