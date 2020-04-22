import React, { Component } from "react";
//import "./App.css";
import WeatherDisplay from "./weatherDisplay";
import { Navbar, Row, Col, Container, ButtonGroup } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const PLACES = [
  { name: "Балахна", zip: "579514" },
  { name: "Нижний Новгород", zip: "520555" },
  { name: "Москва", zip: "524901" },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: PLACES[0],
    };
  }
  handler = (zipa) => (e) => {
    e.preventDefault();
    this.setState({ active: zipa });
  };

  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Погода</Navbar.Brand>
        </Navbar>

        <Container>
          <Row>
            <Col sm={4}>
              <h1>Выберите город:</h1>{" "}
              <ButtonGroup vertical>
                {PLACES.map((x, i) => (
                  <button
                    onClick={this.handler(x)}
                    className="btn btn-primary"
                    key={i}
                  >
                    {" "}
                    {x.name}{" "}
                  </button>
                ))}
              </ButtonGroup>
            </Col>

            <Col sm={8}>
              <WeatherDisplay
                city={this.state.active}
                key={this.state.active.zip}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
