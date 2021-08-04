import { Component } from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Movie extends Component{
    render(){
        return(
            <>
                <Card 
                    key={this.props.movieObj.overview}
                    className="h-25 m-5"
                    style={{width: '30%'}}
                            >
                    <Card.Img 
                    src={this.props.movieObj.image_url} 
                    alt={this.props.movieObj.title}
                    className="w-100 h-50"
                                />
                    <Card.Body>
                        <Card.Header>{this.props.movieObj.title}</Card.Header>
                        <Card.Text>{this.props.movieObj.overview}</Card.Text>
                        <Card.Footer>
                            <Card.Body>
                                <Card.Title>Average Votes: {this.props.movieObj.average_votes}</Card.Title>
                                <Card.Title>Total Votes: {this.props.movieObj.total_votes}</Card.Title>
                                <Card.Title>Popularity: {this.props.movieObj.popularity}</Card.Title>
                                <Card.Title>Released On : {this.props.movieObj.released_on}</Card.Title>
                             </Card.Body>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default Movie;