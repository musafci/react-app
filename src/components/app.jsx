import React, {Component} from "react";
class App extends Component {
    
    state = {
        count: 0,
    }

    render() {        

        return(
            <div className="CustomClass">

                <h1>State</h1>
                <h2>Count: {this.state.count}</h2>

                <button onClick={() => {

                    this.setState((prev) => {
                        return {
                            count: prev.count+1
                        }
                    }, () => {
                        console.log("clicked", this.state.count);
                    });                    

                    }}>Add + 1
                </button>

            </div>
        )
    }
}

export default App;