import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    render(){
        return (
            <>
                <header className="App-header d-flex justify-content-center bg-dark text-light" >
                    <h1>City Explorer</h1>
                </header>
            </>
        );
    }
}

export default Header;