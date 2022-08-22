import React, {Component} from "react";
import Inputs from "./inputs";
import Style from './style.module.css';
import UnControllForm from "./forms/UnControllForm";
import ControllForm from "./forms/controllForm";
class App extends Component {

    render() {
        return(
            <div className={Style.App}>
                {/* <UnControllForm/> */}
                <ControllForm/>
            </div>
        )
    }
}

export default App;