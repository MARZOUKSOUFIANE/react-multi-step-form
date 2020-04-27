import React, { Component } from 'react'
import ButtonAppBar from './ButtonAppBar';
import { Button, TextField, List, ListItem, ListItemText, Container } from '@material-ui/core';
import { Line, Circle } from 'rc-progress';



export class Success extends Component {


    render() {
        return (
            <React.Fragment>
                    <ButtonAppBar title="Success" />
                    <br />
                    <Line percent={this.props.step*25} strokeWidth="1" strokeColor="blue" />
                    <br/>
                    <h1>Thank you for your submission</h1>
                    <p>You will get an email with instruction soon;</p>
                </React.Fragment>
        )
    }
}

export default Success
