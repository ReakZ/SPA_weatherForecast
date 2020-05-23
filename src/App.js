import React, { Component } from "react";
//import "./App.css";
import WeatherDisplay from "./weatherDisplay";
import { Navbar, Row, Col, Container, ButtonGroup,Nav} from "react-bootstrap";
import WeatherGraph from './weatherGraph';
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherForecast from './weatherForecast'
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
          <Navbar.Brand>Погода в Доме <img src="./icons/c03d.png" alt="" width="32" height="32"/></Navbar.Brand>
          <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
        </Navbar>

        <Container fluid>
          <Row>
            <Col sm={2}>

              
              <h4>Города:</h4>{" "}
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

            <Col sm={4}>
              <WeatherDisplay
                city={this.state.active}
                key={this.state.active.zip}
              />
            </Col>

            <Col sm={6}>
            <WeatherGraph city={this.state.active}/>
            <WeatherForecast city={this.state.active}/>
            </Col>
          </Row>
          
         
          
        </Container>
       
      </div>
    );
  }
}

export default App;
