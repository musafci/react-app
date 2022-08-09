import React, {Component} from "react";

class App extends Component {
    render() {
        return (
                React.createElement("div", {
                    className: "CustomClass"
                },
                React.createElement("h1", null, "What is Jsx?"),
                React.createElement("p", null, "Jsx is HTML in Javascript and it's awesome.")
            )
        )       
    }
}

export default App;