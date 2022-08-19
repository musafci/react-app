import React from "react";

class Inputs extends React.Component {
    state = {
        name: '',
        country: '',
        bio: '',
        birthDay: '',
        gender: '',
        agree: false,
        skills: [],
    };
    
    handleChange = (event) => {
       this.setState({
        [event.target.name]: event.target.value
       }); 
    };

    handleCheckbox = (event) => {
        this.setState({
            agree: event.target.checked
        })
    };

    handleSkillChange = (event) => {
        if(event.target.checked) {
            this.setState({
                skills: [...this.state.skills, event.target.value]
            })
        } else {
            const skills = this.state.skills.filter(skill => skill != event.target.value)
            this.setState({
                skills
            })
        }
    };
    
    render() {
        const {name, country, bio, birthDay, agree, skills} = this.state;

        return(
            <div>
                <h3>React Form & Input Elements</h3>

                <input onChange={this.handleChange} value={name} className="form-control my-2" type="text" name="name" placeholder="Enter your name"/>

                <select onChange={this.handleChange} value={country} className="form-control my-2" name="country">
                    <option value="">Select Country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Soudi Arabia">Soudi Arabia</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Thailand">Thailand</option>
                </select>

                <textarea onChange={this.handleChange} value={bio} className="form-control my-2" name="bio" id="" cols="20" rows="5"></textarea>

                <input onChange={this.handleChange} value={birthDay} className="form-control my-2" type="date" name="birthDay" id="" />

                <div>
                    <input onChange={this.handleChange} className="form-check-input" type="radio" name="gender" value="male" /> Male
                    <input onChange={this.handleChange} className="form-check-input" type="radio" name="gender" value="female" /> Female
                </div>

                <div>
                    Skills: <br/>
                    <input type="checkbox" name="skills" value="PHP" checked={skills.includes("PHP")} onChange={this.handleSkillChange} /> PHP
                    <input type="checkbox" name="skills" value="Laravel" checked={skills.includes("Laravel")} onChange={this.handleSkillChange} /> Laravel
                    <input type="checkbox" name="skills" value="React" checked={skills.includes("React")} onChange={this.handleSkillChange} /> React
                    <input type="checkbox" name="skills" value="Vue" checked={skills.includes("Vue")} onChange={this.handleSkillChange} /> Vue
                </div>

                <div>
                    <input onChange={this.handleCheckbox} checked={agree} type="checkbox" name="agree" id="" /> I agree all terms & condition.
                </div>

                <button onClick={() => {console.log(this.state)}} className="btn btn-success">Show Data</button>
            </div>
        )
    }
}

export default Inputs;