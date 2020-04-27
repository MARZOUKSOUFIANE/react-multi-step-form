import React, { Component } from 'react'
import ButtonAppBar from './ButtonAppBar';
import { Button, List, ListItem, ListItemText, Container } from '@material-ui/core';
import { Line, Circle } from 'rc-progress';


export class Confirm extends Component {

    continue = e => {
        e.preventDefault()
        // PROCESS YOUR FORM
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const { values : {firstName,lastName,email,occupation,city,bio} } = this.props
        return (
            <React.Fragment>
                    <ButtonAppBar title="Confirm your data" />
                    <br /> 
                    <Line percent={this.props.step*25} strokeWidth="1" strokeColor="blue" />
                    <Container style={styles.root}>
                    <List>
                        <ListItem>
                            <ListItemText 
                            primary="FirstName"
                            secondary={firstName}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                            primary="LastName"
                            secondary={lastName}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                            primary="Email"
                            secondary={email}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                            primary="Occupation"
                            secondary={occupation}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                            primary="City"
                            secondary={city}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                            primary="Bio"
                            secondary={bio}
                            />
                        </ListItem>
                        
                    </List>
                    </Container>
                    <Button style={styles.Button} onClick={this.continue} variant="contained" color="primary" >Confirm</Button>
                    <Button style={styles.Button} onClick={this.back} variant="contained" color="secondary" >Return</Button>
                </React.Fragment>
        )
    }
}

const styles = {
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    Button: {
        margin: 15
    },
    List: {
        margin: 100,
        width: 400,
        textAlign: 'center'
    }
}
export default Confirm
