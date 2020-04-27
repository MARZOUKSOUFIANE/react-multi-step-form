import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             step:1,
             firstName: '',
             lastName: '',
             email: '',
             occupation: '',
             city: '',
             bio: ''
        }
    }

    //Go  to next state
    nextStep = () => {
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }

    //Go back to prev state
    prevStep = () => {
        const {step} = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }
    
    render() {
        const {step} = this.state
        const {firstName,lastName,email,occupation,city,bio} = this.state
        const values = {firstName,lastName,email,occupation,city,bio}

        switch(step) {
            case 1:
                return (
                    <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    step={this.state.step}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    step={this.state.step}
                    />
                )
            case 3:
                return (
                    <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    step={this.state.step}
                    />
                )
            case 4:
                return (
                    <Success
                    step={this.state.step}
                    />
                )
        }
        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm
