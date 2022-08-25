import React, {Component} from "react";
import SignUpForm from "./signup-form";

class App extends Component {

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <SignUpForm/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;