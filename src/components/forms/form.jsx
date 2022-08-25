import React from "react";
import PropTypes from 'prop-types';
import TextInput from './text-input';

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

export default Form;