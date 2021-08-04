import { Component } from "react";
import AppForm from "./UI/AppForm";
import Results from "./UI/Results";
import { Card } from "react-bootstrap";
import Weather from "./UI/Weather";
import Movies from "./UI/Movies";
import 'bootstrap/dist/css/bootstrap.min.css';

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