import React, { Component} from "react";
import Profile from "./profile";

class Child extends Component {
    render() {
        this.props.func(this)
        return (
            <div>
                <h1>I'm Child</h1>
            </div>
        );
    }
}

class App extends Component {
    getContext(context) {
        console.log(context);
    }

    render() {
        this.getContext(this)
        return (
            <div>
                <Profile/>
                <Child func={this.getContext}/>
            </div>
        );
    }
}

export default App;