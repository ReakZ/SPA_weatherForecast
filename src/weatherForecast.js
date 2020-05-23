import React, { Component } from "react";

import { data2 } from "./initionalState";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
class WeatherForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherWeekData: null,
    };
  }

  async componentDidMount() {
    // here get week data for city
    this.setState({ weatherWeekData: data2 });
  }

  render() {
    return (
      <div className="line-chart-wrapper">
        <h4>Прогноз погоды на след. неделю для г.{this.props.city.name}</h4>
        <LineChart
          width={600}
          height={300}
          data={this.state.weatherWeekData}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Legend />
          <Tooltip />
          <XAxis dataKey="name" />
          <YAxis />

          <Line
            type="monotone"
            dataKey="День"
            stroke="#ff0000"
            strokeWidth={2}
          />
          <Line type="monotone" dataKey="Ночь" stroke="#00bfff" />
        </LineChart>
      </div>
    );
  }
}

export default WeatherForecast;
