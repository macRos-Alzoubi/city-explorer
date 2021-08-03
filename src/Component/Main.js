import { Component } from "react";
import AppForm from "./UI/AppForm";
import Results from "./UI/Results";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import Weather from "./UI/Weather";
import Movies from "./UI/Movies";

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            cityName : '',
            latitude : '',
            longitude : '',
            forcastData: [],
            moviesData: [],
            doShowResults: false,
            errMsg : '',
        }
    }

    setCityInfo = (cityName, latitude, longitude, forcastData, moviesData) => {
        this.setState({
            cityName : cityName,
            latitude : latitude,
            longitude : longitude,
            forcastData : forcastData,
            moviesData : moviesData,
            doShowResults: true,
        });
    }

    // setGeoLocation = (cityName, latitude, longitude) =>{
    //     this.setState({
    //         cityName : cityName,
    //         latitude : latitude,
    //         longitude : longitude,
    //     });
    // }

    // setForcastData = (forcastData) =>{
    //     this.setState({
    //         forcastData : forcastData
    //     });
    // }

    // setMoviesData = (moviesData) =>{
    //     this.setState({
    //         moviesData : moviesData
    //     });
    // }

    errHandler = (errMsg) =>{
        this.setState({
            doShowResults: false,
            errMsg : errMsg,
        });

    }

    render(){
        return (
            <>
                <section>
                    <h2>City Explorer App</h2>
                    < AppForm 
                        // setGeoLocation={this.setGeoLocation}
                        // setForcastData={this.setForcastData}
                        // setMoviesData={this.setMoviesData}
                        setCityInfo={this.setCityInfo}
                        errHandler={this.errHandler}
                    />
                    {this.state.doShowResults && < Results 
                        cityName={this.state.cityName}
                        latitude={this.state.latitude}
                        longitude={this.state.longitude}

                    />}

                    {this.state.doShowResults && < Weather forcastData={this.state.forcastData}/>}

                    {this.state.doShowResults && <Movies moviesData={this.state.moviesData}/>}

                    {!this.state.doShowResults && <Card className="bg-light p-5"><Card.Text className="text-danger h4 text-center">{this.state.errMsg}</Card.Text> </Card>}
                </section>
            </>
        );
    }
}


export default Main;