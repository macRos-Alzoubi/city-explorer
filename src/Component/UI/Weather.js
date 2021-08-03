import { Component } from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends Component{
    render(){
        return(
            <>
                <section>
                    <h2 className="text-center text-dark mb-5">City Weather Forcast</h2>
                    {this.props.forcastData.map(forcastObj => {
                    return(
                        <Card className="w-50 p-4 m-4 bg-light test-dark" key={forcastObj.date}>
                            <Card.Header className="card-header">{forcastObj.date}</Card.Header>
                            <Card.Body className="card-text">{forcastObj.description}</Card.Body>
                        </Card>
                    );
                })}
                </section>
            </>
        );
    }
}

export default Weather;