import React, {Component} from "react";
import './style.css';
import Style from './style.module.css';
class App extends Component {

    render() {
        const style = {
            color: 'green',
            fontSize: '22px',
            fontWeight: '600'
        }

        return(
            <div className="CustomClass">
                <h1 style={{color:'red', fontSize: '20px'}}>
                    Inline Style 1
                </h1>

                <h1 style={style}>
                    Inline Style 2
                </h1>

                <button className="button">Normal Style Import Button</button>
                <button className={Style.button}>Module Based Style Impot Button</button>

            </div>
        )
    }
}

export default App;