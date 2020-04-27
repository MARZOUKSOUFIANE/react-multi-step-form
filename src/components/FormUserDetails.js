import React, { Component } from 'react'
import ButtonAppBar from './ButtonAppBar';
import { Button, TextField } from '@material-ui/core';
import { Line, Circle } from 'rc-progress';


export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const { values , handleChange} = this.props
        return (
            <React.Fragment>
                    <ButtonAppBar title="Enter User Details" />
                    <br /> 
                    <Line percent={this.props.step*25} strokeWidth="1" strokeColor="blue" />
                    <br />
                    <TextField id="standard-basic" label="Enter your firstName" onChange={handleChange('firstName')} defaultValue={values.firstName} style={styles.TextField}/>
                    <br />
                    <TextField id="standard-basic" label="Enter your lastName" onChange={handleChange('lastName')} defaultValue={values.lastName} style={styles.TextField}/>
                    <br />  
                    <TextField id="standard-basic" label="Enter your email" onChange={handleChange('email')} defaultValue={values.email} style={styles.TextField}/>
                    <br />
                    <Button style={styles.Button} onClick={this.continue} variant="contained" color="primary" >continue</Button>
                    <Button style={styles.Button} variant="contained" color="primary" disabled>Return</Button>
                </React.Fragment>
        )
    }
}

const styles = {
    Button: {
        margin: 15
    },
    TextField: {
        margin: 40,
        width: 400,
    }
}
export default FormUserDetails
