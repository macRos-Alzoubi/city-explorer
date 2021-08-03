import { Component } from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Movies extends Component {
    render(){
        return(
            <>
                {/* {console.log(this.props.moviesData)} */}
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

// {
//     "title": "Sleepless in Seattle",
//     "overview": "A young boy who tries to set his dad up on a date after the death of his mother. He calls into a radio station to talk about his dad’s loneliness which soon leads the dad into meeting a Journalist Annie who flies to Seattle to write a story about the boy and his dad. Yet Annie ends up with more than just a story in this popular romantic comedy.",
//     "average_votes": "6.60",
//     "total_votes": "881",
//     "image_url": "https://image.tmdb.org/t/p/w500/afkYP15OeUOD0tFEmj6VvejuOcz.jpg",
//     "popularity": "8.2340",
//     "released_on": "1993-06-24"

// this.title = title;
// this.overview = overview;
// this.average_votes= averageVotes;
// this.total_votes = totalVotes;
// this.image_url = imageUrl;
// this.popularity = popularity;
// this.released_on = releasedOn;
//   }