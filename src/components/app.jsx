import React, {Component} from "react";
import Inputs from "./inputs";
import Style from './style.module.css';
class App extends Component {

    render() {
        return(
            <div className={Style.App}>
                <Inputs/>
            </div>
        )
    }
}

export default App;