import React, { Component} from "react";
import Profile from "./profile";

class Child extends Component {
    render() {
        return (
            <div>
                <h1>I'm Child</h1>
                {this.props.children} {/* render children props */}
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Profile/>
                <Child>
                    <h2>I'm parent</h2> {/*child props data*/}
                    <h2>I'm child from patent</h2> {/*child props data*/}
                </Child>
            </div>
        );
    }
}

export default App;