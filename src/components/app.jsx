import React, {Component} from "react";

//Functional component
const MyFunctionalComponent = () => <h1>Functional component.</h1>

// Classbased component
class App extends Component {
    render() {
        return(
            <div className="CustomClass">
                <h1>What is Jsx?</h1>
                <p>Jsx is awesome.</p>
                <MyComponent/>
                <MyFunctionalComponent/>
            </div>
        )
    }
}

//Functional component
function MyComponent() {
    return(
        <h1>This is another component!</h1>
    );
}

export default App;