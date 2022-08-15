import React, {Component} from "react";
import Style from './style.module.css';
class App extends Component {

    state = {
        name: '',
    }

    buttonClickEvent = (event) => {
        console.log(event);
        console.log(event.target);
        console.log("react event");
    };

    onChangeEvent = (event) => {
        console.log(event.target.value);
        this.setState({name: event.target.value})
    };

    onFocusEvent = (event) => {
        console.log("I am focus.");
    };

    onBlueEvent = (event) => {
        if(!this.state.name) {
            alert("Please enter your name.");
        }
        console.log("I am blur");
    }

    render() {
        return(
            <div className={Style.App}>
                <h1>Event in React</h1>
                <button className={Style.button} onClick={this.buttonClickEvent}>Click Me</button>
                <br/>
                <input onChange={this.onChangeEvent} onFocus={this.onFocusEvent} onBlur={this.onBlueEvent} value={this.state.name} type="text" placeholder="Enter your name"/>
                <br />
                <br />
                {this.state.name && <h3>Welcome, {this.state.name}</h3>}
            </div>
        )
    }
}

export default App;