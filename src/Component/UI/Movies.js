import { Component } from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Movies extends Component {
    render(){
        return(
            <>
                <section>
                    {this.props.moviesData.length && <h2 className="text-center text-dark mb-5">Movies Related To The City</h2>}
                    {this.props.moviesData.map(movieObj => {
                    return(
                        
                        <Card 
                            key={movieObj.overview}
                            className="d-inline-block w-25 h-25 m-5"
                            >
                            <Card.Img 
                                src={movieObj.image_url} 
                                alt={movieObj.title}
                                className="w-100 h-50"
                                />
                            <Card.Body>
                                <Card.Header>{movieObj.title}</Card.Header>
                                <Card.Text>{movieObj.overview}</Card.Text>
                                <Card.Footer>
                                    <Card.Body>
                                        <Card.Title>Average Votes: {movieObj.average_votes}</Card.Title>
                                        <Card.Title>Total Votes: {movieObj.total_votes}</Card.Title>
                                        <Card.Title>Popularity: {movieObj.popularity}</Card.Title>
                                        <Card.Title>Released On : {movieObj.released_on}</Card.Title>
                                    </Card.Body>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    );
                })}
                </section>
            </>
        );
    }
}

export default Movies;
