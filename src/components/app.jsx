import React, {Component} from "react";
import Inputs from "./inputs";
import Style from './style.module.css';
import UnControllForm from "./UnControllForm";
class App extends Component {

    render() {
        return(
            <div className={Style.App}>
                <UnControllForm/>
            </div>
        )
    }
}

export default App;