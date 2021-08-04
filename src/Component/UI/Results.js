import { Component } from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Results extends Component{
    render(){
        return (
            <>
                <section className="d-flex justify-content-center mb-5">
                    <Card className="w-75 p-3 bg-light" >
                        <Card.Title>{this.props.cityName}</Card.Title>
                        <Card.Body className="d-flex">
                            <Card.Body>
                                <Card.Text>latitude: {this.props.latitude}</Card.Text>
                                <Card.Text>longitude: {this.props.longitude}</Card.Text>
                            </Card.Body>
                            <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d3ab1ae808729a0a639f4b074bd743ac&center=${this.props.latitude},${this.props.longitude}`}/>
                        </Card.Body>
                    </Card>
                </section>
            </>
        );
    }
}

export default Results;