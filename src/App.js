import React, { Component } from "react";
//import "./App.css";
import WeatherDisplay from "./weatherDisplay";
import {
  Navbar,
  Row,
  Col,
  Container,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import WeatherGraph from "./weatherGraph";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherForecast from "./weatherForecast";
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
          <Navbar.Brand href="/">
            Погода в Доме{" "}
            <img src="./icons/c03d.png" alt="" width="32" height="32" />
          </Navbar.Brand>
          <Nav className="mr-auto">
            {PLACES.map((x, i) => (
              <Nav.Link onClick={this.handler(x)}>{x.name}</Nav.Link>
            ))}

            <NavDropdown title="Другие города... " id="collasible-nav-dropdown">
              <NavDropdown.Item>Санкт Петербург</NavDropdown.Item>

              <NavDropdown.Item>Владивосток</NavDropdown.Item>

              <NavDropdown.Item>Заволжье</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Название города"
              className="mr-sm-2"
            />
            <Button variant="outline-secondary">Найти</Button>
          </Form>
        </Navbar>

        <Container>
          <Row>
            <Col sm={4}>
              <WeatherDisplay
                city={this.state.active}
                key={this.state.active.zip}
              />
            </Col>

            <Col sm={6}>
              <WeatherGraph city={this.state.active} />
              <WeatherForecast city={this.state.active} />
            </Col>
          </Row>
        </Container>
        <footer className="footer">
          <Container>
            <span className="text-muted">
              Weather in home 2020{" "}
              <a href="https://github.com/ReakZ/">GitHub</a>
            </span>
          </Container>
        </footer>
      </div>
    );
  }
}

export default App;
