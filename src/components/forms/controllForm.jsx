import React from "react";

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
        const {name, email, password} = this.state;

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={name} className="form-control my-2" type="text" name="name" placeholder="Name" />
                    <input onChange={this.handleChange} value={email} className="form-control my-2" type="email" name="email" placeholder="Email" />
                    <input onChange={this.handleChange} value={password} className="form-control my-2" type="password" name="password" placeholder="*****" />
                    <button type="submit" className="btn btn-success">Button</button>
                </form>
            </div>
        )
    }
}

export default ControllForm;