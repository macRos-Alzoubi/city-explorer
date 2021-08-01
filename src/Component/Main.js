import { Component } from "react";
import AppForm from "./UI/AppForm";
import Results from "./UI/Results";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            cityName : '',
            latitude : '',
            longitude : '',
            doShowResults: false,
            errMsg : '',
        }
    }

    setlocationVars = (cityName, latitude, longitude) => {
        this.setState({
            cityName : cityName,
            latitude : latitude,
            longitude : longitude,
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
                        setlocationVars={this.setlocationVars}
                        errHandler={this.errHandler}
                    />
                    {this.state.doShowResults && < Results 
                        cityName={this.state.cityName}
                        latitude={this.state.latitude}
                        longitude={this.state.longitude}

                    />}

                    {!this.state.doShowResults && <Card><Card.Text>{this.state.errMsg}</Card.Text> </Card>}
                </section>
            </>
        );
    }
}


export default Main;