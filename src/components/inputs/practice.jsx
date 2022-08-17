import React, {Component} from "react";

class Practice extends Component {

    state = {
        name: '',
        country: '',
        bio: '',
        birthDay: '',
        gender: '',
        agree: false
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };


    handleCheckBox = (event) => {
        this.setState({
            agree: event.target.checked
        })
    }

    render() {
        const {name, country, bio, birthDay, agree} = this.state;

        return(
            <div>
                <h3>React Input & Froms</h3>


                <input onChange={this.handleChange} value={name} className="form-control my-2" type="text" name="name" placeholder="Enter your name"/>
                
                <select onChange={this.handleChange} value={country} className="form-control my-2" name="country">
                    <option>Select Country</option>
                    <option value="BD">BD</option>
                    <option value="KSA">KSA</option>
                </select>

                <textarea onChange={this.handleChange} value={bio} className="form-control my-2" name="bio" cols="30" rows="5"></textarea>

                <input onChange={this.handleChange} value={birthDay} className="form-control my-2" type="date" name="birthDay"/>

                <div>
                    <input onChange={this.handleChange} type="radio" name="gender" value="male" /> Male
                    <input onChange={this.handleChange} type="radio" name="gender" value="female" /> Female
                </div>

                <div>
                    <input onChange={this.handleCheckBox} checked={agree} type="checkbox" name="agree"/> I agree
                </div>

                <button onClick={() => {console.log(this.state)}} className="btn btn-success">Get Data</button>
            </div>
        )
    }
}


export default Practice;