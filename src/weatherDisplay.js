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
    {name:'weather',loc:'Погода',symbol:''},
    {name:'wind_cdir_full',loc:'Ветер',symbol:''},
    {name:'wind_dir',loc:'Направление ветра',symbol:'ч'},
    {name:'wind_spd',loc:'Скорость ветра',symbol:'м/с'},
    {name:'clouds',loc:'Облачность',symbol:'%'},
    {name:'pres',loc:'Давление',symbol:'мм'},
    {name:'rh',loc:'Влажность',symbol:'%'},
    {name:'vis',loc:'Видимость',symbol:'М'},
    {name:'snow',loc:'Осадки',symbol:'мм'},
    {name:'sunrise',loc:'Восход',symbol:'UTC+0'},
    {name:'sunset',loc:'Закат',symbol:'UTC+0'},]
    function normalize(data){
      if (typeof data=='number'){
        return Math.round(data)
      }
      if (typeof data=='object'){
        return data.description
      }
      return data
    }
    const dataWeather = this.state.weatherData
      ? this.state.weatherData.data.data[0]
      : null;
    const img = dataWeather ? dataWeather.weather.icon : null;
    const iconUrl = "icons\\" + img + ".png";
    return (
      <>
      {!dataWeather?<Spinner animation="border" role="status" style={{margin:'50%'}}>
  <span className="sr-only">Loading...</span>
</Spinner>:
      <div>
        <h2>
          Погода в г.{this.props.city.name} <br/>{new Date().toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })} {" "}
          <img src={iconUrl} alt="img" width="64" height="64" />
        </h2>


        <Table striped bordered hover size="sm">

  <tbody>
    {
      properties.map(pro=>dataWeather[pro.name]?<tr key={pro.name}><td>{pro.loc}:</td><td>{`${normalize(dataWeather[pro.name])} ${pro.symbol}`}</td> </tr>:null)
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


