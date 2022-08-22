import React from "react";

class UnControllForm extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const data = {}

        data.name = event.target.name.value;
        data.email = event.target.email.value;
        data.password = event.target.password.value;

        console.log(data);    
        console.dir(event.target);

        event.target.reset();
    };

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control" type="text" name="name" placeholder="Name" />
                    <input className="form-control" type="email" name="email" placeholder="Email" />
                    <input className="form-control" type="password" name="password" placeholder="*****" />
                    <button type="submit" className="btn btn-success">Button</button>
                </form>
            </div>
        )
    }
}

export default UnControllForm;