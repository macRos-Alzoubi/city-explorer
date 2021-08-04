import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from "./Movie";
import { Container } from "react-bootstrap";

class Movies extends Component {
    render(){
        return(
            <>
                <section>
                    {this.props.moviesData.length && <h2 className="text-center text-dark mb-5">Movies Related To The City</h2>}
                    <Container className="d-flex flex-wrap justify-content-center">
                    {this.props.moviesData.map(movieObj => {
                        return(
                            <Movie movieObj={movieObj}/>
                        );
                    })}
                    </Container>
                </section>
            </>
        );
    }
}

export default Movies;
