import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';


import TextField from '@material-ui/core/TextField';

export default class RSVPEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"Seminar",
            date:"Tuesday, July 16, 05:30pm - 07:30pm",
            description:"",
            address:"34 EAST 51ST STREET, 7TH FLOOR, NEW YORK",
            reminder:"",
            showForm: true,
            name:"",
            position:"",
            email:"",
            company:"",
            status:"",
        };
    }
    handleClick = (name, event) => {

        this.setState({
            status : event.target.innerHTML
        })
    }
    buttonClicked = ()=>{
        this.setState({showForm: false})
    }
    ContainedButtons(){
        return this.state.showForm? (
          <div>
            <Button variant="contained" color="primary" onClick={this.buttonClicked}>
              Default
            </Button>
        </div>
        ) : (<div></div>)
        }
    handleChange = (name, event) => {
        this.setState({
            [name] : event.target.value
        })
    }
    createDateAddress = () => {
        const listStyle = { paddingLeft: "0px"}
        return (
            <List component="nav" aria-label="Secondary mailbox folders">

                            <Divider />
                            <ListItem style={listStyle}>
                                <ListItemIcon style={{minWidth: "2px"}}>
                                    <Icon>access_time</Icon>
                                </ListItemIcon>
                                <ListItemText size="small" primary={this.state.date} />
                            </ListItem>
                            <Divider />
                            <ListItem style={listStyle}>
                                <ListItemIcon style={{minWidth: "2px"}}>
                                    <Icon>location_on</Icon>
                                </ListItemIcon>
                                <ListItemText size="small" primary={this.state.address} />
                            </ListItem>
                        </List>
        )
    }
    createForm = () => {
        return (
            
            <form >
                <TextField
                fullWidth
                id="standard-name"
                label="Name"
                value={this.state.name}
                onChange={this.handleChange.bind(this, "name")}
                margin="normal"
            />
            <TextField
                fullWidth
                id="standard-email"
                label="Email"
                value={this.state.email}
                onChange={this.handleChange}
                margin="normal"
            />
            <TextField
                fullWidth
                id="standard-company"
                label="Company"
                value={this.state.company}
                onChange={this.handleChange}
                margin="normal"
            />
            <TextField
                fullWidth
                id="standard-position"
                label="Position"
                value={this.state.position}
                onChange={this.handleChange}
                margin="normal"
            />
            
            </form>
            
        )
    }

    render() {

    const cardStyle = { marginTop : "10px"} 
    const cardContentStyle = { padding : "25px" }
    const listStyle = { paddingLeft: "0px"}
      return (
        <div>
            <Container maxWidth="sm" >
                <Card style={ cardStyle } >
                    <CardContent style={ cardContentStyle }>
                        <h2>{ this.state.title }</h2>
                        <ListItem style={listStyle}>
                                <ListItemIcon style={{minWidth: "2px"}}>
                                    <Icon>access_time</Icon>
                                </ListItemIcon>
                                <ListItemText size="small" primary={this.state.date} />
                            </ListItem>
                        
                    
                        {this.ContainedButtons()}
                        
                        <Box style={{display: this.state.showForm? "none":""}}>
                        <p>Please fill out the information below to register for the event.</p>

                        <Grid item xs={12}>
                            <ButtonGroup 
                            fullWidth  

                            outlined
                            size="large"
                            onClick={this.handleClick.bind(this, "going")}
                            >
                            <Button name="going" color="secondary">Going</Button>
                            <Button name="interested">Interested</Button>
                            <Button name="can't go">Can`'`t</Button>
                            </ButtonGroup>
                        </Grid>
                        {this.createForm()}
                        <div className="btnBox" >
                            <Button variant="contained" color="primary" onClick={this.buttonClicked}>
                                Register
                            </Button>
                        </div>
                        </Box>
                            

                        
                        
                        

                        {this.createDateAddress()}
                        
                    </CardContent>
                    </Card>
            </Container>
        </div>
      )

      }

        
    }       
      
  


if (document.getElementById('rsvp')) {
    ReactDOM.render(<RSVPEvent />, document.getElementById('rsvp'));
}

