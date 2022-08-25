import React from "react";
import Form from "./form";

class ControllForm extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);

        event.target.reset();
        this.setState({name:'', email:'', password:''})
    };

    render() {
        return(
            <div>
                <Form 
                    values={this.state} 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                />
            </div>
        )
    }
}

export default ControllForm;