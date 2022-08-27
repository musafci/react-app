import React from "react";
import PropTypes from 'prop-types';
import TextInput from "./text-input";

const Form = ({values, agreement, errors, handleChange, handleAgreement, handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <TextInput
                name="name"
                label="Name"
                value={values.name}
                error={errors.name}
                type="text"
                onChange={handleChange}
                placeholder="Enter Name"
            />
            <TextInput
                name="email"
                label="Email"
                value={values.email}
                error={errors.email}
                type="email"
                onChange={handleChange}
                placeholder="Enter Email"
            />
            <TextInput
                name="password"
                label="Password"
                value={values.password}
                error={errors.password}
                type="password"
                onChange={handleChange}
                placeholder="Enter password"
            />
            <TextInput
                name="birthDay"
                label="Birthday"
                value={values.birthDay}
                error={errors.birthDay}
                type="date"
                onChange={handleChange}
            />
            <div className="form-group">
                <label>
                    <input className="mx-2" type="radio" name="gender" value="Male" onChange={handleChange} />
                    Male
                </label>
                <label className="mx-4">
                    <input className="mx-2" type="radio" name="gender" value="Female" onChange={handleChange} />
                    Female
                </label>
                <label className="mx-4">
                    <input className="mx-2" type="radio" name="gender" value="Other" onChange={handleChange} />
                    Other
                </label>
                {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
            </div>
            <div className="form-group">
                <label>
                    <input className="mx-2" type="checkbox" name="agreement" checked={agreement} onChange={handleAgreement} />
                    Agree
                </label>
            </div>

            <button type="submit" className="btn btn-success my-2" disabled={!agreement}>Create User</button>
        </form>
    );
};

Form.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form;