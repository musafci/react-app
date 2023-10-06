import React, { Component} from "react";

class App extends Component {
    state = {
        count: 0
    }
    intervalId = null;

    incrementTimer = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    
    decrementTimer = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1             
            })            
        }
    }

    startTimer = () => {
        if (this.state.count > 0 && this.intervalId === null) {
            this.intervalId = setInterval(() => {
                this.setState({count: this.state.count - 1}, () => {
                    if (this.state.count === 0) {
                        clearInterval(this.intervalId);
                        this.intervalId = null;
                        alert("counter finished");
                    }                    
                })
            }, 1000)
        }
    }

    pauseTimer = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetTimer = () => {
        this.setState({count: 0})
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    render() {
        return (
            <div className="Container">
               <button onClick={this.incrementTimer}>+</button>
                <h2>{this.state.count}</h2>
               <button onClick={this.decrementTimer} disabled={this.state.count <= 0}>-</button>
               <div>
                    <button onClick={this.startTimer}>Start</button>
                    <button onClick={this.pauseTimer}>Pause</button>
                    <button onClick={this.resetTimer}>Reset</button>
               </div>
            </div>
        );
    }
}

export default App;