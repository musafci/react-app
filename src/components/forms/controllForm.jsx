import React from "react";
import PropTypes from 'prop-types';

const TextInput = props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input 
            onChange={props.onChange} 
            value={props.value}
            className="form-control my-2" 
            type={props.type}
            name={props.name}
            id={props.name}
            placeholder={props.placeholder} />
    </div>
);

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder:  PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

TextInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder:''
};


const Form = props => (
    <form onSubmit={props.handleSubmit}>
        <TextInput name="name" label="Name" placeholder="Enter your name" value={props.values.name}  onChange={props.handleChange} />
        <TextInput type="email" name="email" label="Email" placeholder="Enter your email" value={props.values.email}  onChange={props.handleChange} />
        <TextInput type="password" name="password" label="Password" placeholder="Enter your password" value={props.values.password}  onChange={props.handleChange} />
        <button type="submit" className="btn btn-success">Button</button>
    </form>
);

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
};




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
                <Form values={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default ControllForm;