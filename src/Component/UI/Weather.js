import { Component } from "react";
import WeatherDay from "./WeatherDay";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends Component{
    render(){
        return(
            <>
                <section className="mb-5">
                    <h2 className="text-center text-dark mb-5">City Weather Forcast</h2>
                    <Container className="d-flex flex-wrap justify-content-center">
                    {this.props.forcastData.map(forcastObj => {
                        return(
                            <WeatherDay forcastObj={forcastObj}/>
                        );
                    })}
                    </Container>
                </section>
            </>
        );
    }
}

export default Weather;