import { Component } from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class WeatherDay extends Component{
    render(){
        return(
            <>
                <Card className="w-25 p-4 m-4 bg-light test-dark" key={this.props.forcastObj.date}>
                    <Card.Header className="card-header">{this.props.forcastObj.date}</Card.Header>
                    <Card.Body className="card-text">{this.props.forcastObj.description}</Card.Body>
                </Card>
            </>
        );
    }
}

export default WeatherDay;