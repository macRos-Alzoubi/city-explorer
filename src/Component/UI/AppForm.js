import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from "react-bootstrap";
import axios from "axios";


class AppForm extends Component{

    submitHandler = async(event) =>{
        event.preventDefault();

        const CITY_NAME = event.target['city-name'].value;
        try{
            //${process.env.REACT_APP_LOCATIONIQ_API_URL}
            let url = `https://${process.env.REACT_APP_LOCATIONIQ_API_URL}?key=${process.env.REACT_APP_kEY}&q=${CITY_NAME}&format=json`;
            let respons = await axios.get(url);
            let geoData = respons.data[0];
            
            // http://localhost:3001/weather?lat=31.95&lon=35.91&searchQuery=Amman
            url = `http://localhost:3001/weather?lat=${geoData.lat.slice(0, geoData.lat.indexOf('.') + 3)}&lon=${geoData.lon.slice(0, geoData.lon.indexOf('.') + 3)}&searchQuery=${CITY_NAME}`;
            respons = await axios.get(url);
            let forcastData = respons.data;

            if(respons.data.error)
                throw new Error(`${respons.data.status} ${respons.data.error}`);
            
            this.props.setCityInfo(geoData.display_name, geoData.lat, geoData.lon, forcastData);

              
        }catch(err){
            this.props.errHandler(err.message);
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