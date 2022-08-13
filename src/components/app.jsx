import React, {Component} from "react";
class App extends Component {
    
    state = {
        count: 0
    }

    intervalId = null;

    incrementCount = () => {
        this.setState({count: this.state.count +1});
    };

    decrementCount = () => {
        if(this.state.count > 0) {
            this.setState({count: this.state.count -1});
        }
    };

    startTimer = () => {
        if(this.state.count > 0 && !this.intervalId) {
            this.intervalId =  setInterval(() => {
                this.setState({count: this.state.count -1}, () => {
                    if(this.state.count === 0) {
                        alert("Counter Finished.")
                        clearInterval(this.intervalId)
                        this.intervalId = null
                    }
                })
            }, 1000)
        }
    };

    stopTimer = () => {
        if(this.intervalId) {
            clearInterval(this.intervalId)
            this.intervalId = null
        }
    };

    resetTimer = () => {
        this.setState({count: 0})
        clearInterval(this.intervalId)
        this.intervalId = null
    };

    render() {

        return(
            <div className="CustomClass">
                <div>
                    <h1>Simple Timer</h1>
                    <button onClick={this.incrementCount}>+</button>
                    <span>{this.state.count}</span>
                    <button onClick={this.decrementCount}>-</button>
                </div>

                <div>
                    <button onClick={this.startTimer}>Start</button>
                    <button onClick={this.stopTimer}>Stop</button>
                    <button onClick={this.resetTimer}>Reset</button>
                </div>                
            </div>
        )
    }
}

export default App;