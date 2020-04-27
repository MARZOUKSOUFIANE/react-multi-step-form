import React, { Component } from 'react'
import ButtonAppBar from './ButtonAppBar';
import { Button, TextField } from '@material-ui/core';
import { Line, Circle } from 'rc-progress';


export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const { values , handleChange} = this.props
        return (
            <React.Fragment>
                    <ButtonAppBar title="Enter Personal Details" />
                    <br /> 
                    <Line percent={this.props.step*25} strokeWidth="1" strokeColor="blue" />
                    <br />
                    <TextField id="standard-basic" label="Enter your occupation" onChange={handleChange('occupation')} defaultValue={values.occupation} style={styles.TextField}/>
                    <br />
                    <TextField id="standard-basic" label="Enter your city" onChange={handleChange('city')} defaultValue={values.city} style={styles.TextField}/>
                    <br />  
                    <TextField id="standard-basic" label="Enter your bio" onChange={handleChange('bio')} defaultValue={values.bio} style={styles.TextField}/>
                    <br />
                    <Button style={styles.Button} onClick={this.continue} variant="contained" color="primary" >continue</Button>
                    <Button style={styles.Button} onClick={this.back} variant="contained" color="secondary" >Return</Button>
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
export default FormPersonalDetails
