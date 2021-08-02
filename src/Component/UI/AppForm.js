import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from "react-bootstrap";
import axios from "axios";


class AppForm extends Component{

    submitHandler = async(event) =>{
        event.preventDefault();

        const CITY_NAME = event.target['city-name'].value;
        try{
            const URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_kEY}&q=${CITY_NAME}&format=json`;
            const RESPONS = await axios.get(URL);
            const DATA = RESPONS.data[0];
            this.props.setlocationVars(DATA.display_name, DATA.lat, DATA.lon, DATA.icon);
        }catch{
            this.props.errHandler('Unable to geocode');
        }

        event.target.reset();
    }

    render(){
        return (
            <>
                <Form className="m-5 bg-light p-5 w-50" onSubmit={this.submitHandler}>
                    <Form.Group className="d-flex justifi">
                        <Form.Control 
                            type="text"
                            name="city-name"
                            placeholder="Please Enter City Name"
                            className="w-75 mx-1"
                            />
                        <Button type="submit">Explore!</Button>
                    </Form.Group>
                </Form>
            </>
        );
    }
}

export default AppForm;