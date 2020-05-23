import React, { Component } from "react";
import axios from "axios";
import {Spinner,Table} from "react-bootstrap";
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
    let properties=[{name:'temp',loc:'Температура',symbol:'°C'},
    {name:'clouds',loc:'Облачность',symbol:'%'},
    {name:'sunrise',loc:'Восход',symbol:'UTC 0'},
    {name:'sunset',loc:'Закат',symbol:'UTC 0'},
    {name:'pres',loc:'Давление',symbol:'мм'},
    {name:'rh',loc:'Влажность',symbol:'%'},
    {name:'vis',loc:'Видимость',symbol:'М'},
    {name:'snow',loc:'Осадки',symbol:'мм'}]

    const dataWeather = this.state.weatherData
      ? this.state.weatherData.data.data[0]
      : null;
    const lol = dataWeather ? dataWeather.weather.icon : null;
    const iconUrl = "icons\\" + lol + ".png";
    return (
      <>
      {!dataWeather?<Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>:
      <div>
        <h2>
          Погода на {Date().getString} в г.{this.props.city.name}{" "}
          <img src={iconUrl} alt="img" width="64" height="64" />
        </h2>


        <Table striped bordered hover size="sm">

  <tbody>
    {
      properties.map(pro=>dataWeather[pro.name]?<tr key={pro.name}><td>{pro.loc}:</td><td>{`${dataWeather[pro.name]} ${pro.symbol}`}</td> </tr>:null)
    }
  </tbody>
</Table>
        </div>
  }
      </>
    );
  }
}

export default WeatherDisplay;


{/* <ul>
<li>Облачность: {dataWeather ? dataWeather.clouds : null}%</li>
<li>Восход: {dataWeather ? dataWeather.sunset : null}</li>
<li>Закат: {dataWeather ? dataWeather.sunrise : null}</li>
<li>Температура: {dataWeather ? dataWeather.temp : null}</li>
<li>Давление: {dataWeather ? dataWeather.pres : null}</li>
<li>Влажность: {dataWeather ? dataWeather.rh : null}</li>
<li>Видимость: {dataWeather ? dataWeather.vis : null}</li>
<li> {dataWeather > 0 ? dataWeather.snow : null}</li>
        </ul> */}