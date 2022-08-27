import React from "react";
import Form from "./form";

const initValues = {
    name: '',
    email: '',
    password: '',
    birthDay: '',
    gender: '',
}

class SignUpForm extends React.Component {

    state = {
        values: initValues,
        agreement: false,
    }

    handleChange = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        });
    };

    handleAgreement = event => {
        this.setState({
            agreement: event.target.checked
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const { isValid, errors } = this.validate();

        if(isValid) {
            console.log(this.state.values);
            event.target.reset();
            this.setState({values: initValues, agreement: false})
        } else {
            console.log(errors);
        }
    };

    validate = () => {
        const errors = {}
        const { values: {name, email, password, gender, birthDay} } = this.state

        if(!name) {
            errors.name = "Please provide your name"
        }

        if(!email) {
            errors.email = "Please provide your email"
        }

        if(!password) {
            errors.password = "Please provide your password"
        }

        if(!gender) {
            errors.gender = "Please select your gender"
        }

        if(!birthDay) {
            errors.birthDay = "Please select your birthDay"
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    };

    render() {
        return(
            <div className="my-5">
                <h1 className="my-3">Registration From</h1>
                <Form
                    values={this.state.values}
                    agreement={this.state.agreement}
                    handleChange={this.handleChange}
                    handleAgreement={this.handleAgreement}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}


export default SignUpForm;