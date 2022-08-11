import React, {Component} from "react";
import Profile from "./profile";
// import Skills from "./profile/skills";
// import LearnProps from "./props";

class App extends Component {
    render() {
        return(
            <div className="CustomClass">
                <Profile/>

                {/* <div>
                    <LearnProps name="musa"/>
                    <LearnProps name="rana"/>
                    <Skills skillA={"PHP"} skillB={"Laravel"} skillC={"Vue.js"}/>
                </div> */}
            </div>
        )
    }
}

export default App;