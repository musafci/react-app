import React, {Component} from "react";
class App extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.count = 5;
    //     this.state = {
    //         count: 0
    //     }
    // }

    // count = 10;

    render() {
        
        // console.log("count", this.state.count);

        return(
            <div className="CustomClass">
                <h1>State</h1>
                <h2>Count: {this.state.count}</h2>

                <button onClick={() => {
                    // this.count++
                    this.setState({count: this.state.count + 1});

                    console.log("clicked", this.state.count);

                    }}>Add + 1
                </button>
            </div>
        )
    }
}

export default App;