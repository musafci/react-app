import React, {Component} from "react";


const name = "World"

const user = {
    name: "Md Abu Musa",
    position: "Software Engineer"
}

const attribute = {
    title: 'This is H1 tag',
    id: "h1id"
}

function employee(data) {
    return data.name+' '+data.position
}

//Functional component
const MyFunctionalComponent = () => <h3 {...attribute}>Hello, {name}, {employee(user)}</h3>

//Functional component
function MyComponent() {
    return(
        <h1>This is another component!, {10+20}</h1>
    );
}


// Classbased component
class App extends Component {
    render() {
        const name = "Md Abu Musa";

        const bio = <div>
            <h3>{name}</h3>
            <p>Software Engineer</p>
        </div>

        return(
            <div className="CustomClass">
                <h1>What is Jsx?</h1>
                <p>Jsx is awesome.</p>
                <p>{new Date().toDateString()}</p>
                <MyComponent/>
                <MyFunctionalComponent/>
                {bio}
            </div>
        )
    }
}

export default App;