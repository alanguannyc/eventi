import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { green } from '@material-ui/core/colors';
import { 
    Button, Box, Container, Card, CardActions, CardContent, List, 
    ListItem, ListItemIcon, ListItemText, Divider, Icon, Grid, CircularProgress,
    ButtonGroup,TextField

} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import ConfirmEvent from './ConfirmEvent';

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
            status:"Going",
            loading: false,
            confirmed: true
        };
    }
    handleClick = (name, event) => {

        this.setState({
            status : event.currentTarget.name
        })
    }
    buttonClicked = ()=>{

        this.setState({showForm: false})
    }
    submitForm = () => {
        this.setState({confirmed: true})
    }
    ContainedButtons(){
        return this.state.showForm? (
          <div>
            <Button variant="contained" color="primary" onClick={this.buttonClicked}>
              Register
            </Button>
        </div>
        ) : (<div></div>)
        }
    handleChange = (name, event) => {
        this.setState({
            [name] : event.target.value
        })
    }
    handleButtonClick = () => {
        if (!this.state.loading) {
            this.setState({confirmed: false})
            this.setState({loading: true})
            setTimeout(() => {
                this.setState({confirmed: true})
                this.setState({loading: false})
            }, 2000);
          }
    }
    handleSubmit = () => {
        
    }
    activeButtonColor = (value) => {
        const activeButtonStyle = {
            "going":{
                backgroundColor:"#29af40", color:'white'
            },
            "interested":{
                backgroundColor:"#e5a22a", color:'white'
            },
            "cannot": {
                backgroundColor:"#e65225", color:'white'
            }
        }
        if (value == this.state.status) {
            switch (this.state.status){
                case "Going":
                    return activeButtonStyle.going
                case "Interested":
                    return activeButtonStyle.interested
                case "Can't go":
                    return activeButtonStyle.cannot
                }
        }
        

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
        const buttonProgress = {
            color: green[500],
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -12,
            marginLeft: -12,
          }
        return (
            
        <ValidatorForm onSubmit={this.handleSubmit}>
            <TextValidator
                fullWidth
                id="standard-name"
                label="Name"
                // InputLabelProps={{
                //     shrink: true,
                //   }}
                value={this.state.name}
                onChange={this.handleChange.bind(this, "name")}
                margin="normal"
                // validators={['required']}
                // errorMessages={['this field is required']}
            />
            <TextValidator
                fullWidth
                label="Email"
                onChange={this.handleChange.bind(this,"email")}
                name="email"
                value={this.state.email}
                margin="normal"
                // validators={['required', 'isEmail']}
                // errorMessages={['this field is required', 'email is not valid']}
                />
            <TextValidator
                fullWidth
                label="Company"
                value={this.state.company}
                onChange={this.handleChange.bind(this, "company")}
                margin="normal"
                // validators={['required']}
                // errorMessages={['this field is required']}
            />
            <TextValidator
                fullWidth
                label="Position"
                value={this.state.position}
                onChange={this.handleChange.bind(this, "position")}
                margin="normal"
                // validators={['required']}
                // errorMessages={['this field is required']}
            />
            <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            disabled={this.state.loading}
            onClick={this.handleButtonClick}
            >
            Register
            </Button>
            <div >
                {this.state.loading && <CircularProgress size={24} style={buttonProgress} />}
            </div>
            </ValidatorForm>
            
        )
    }

    render() {
        
    const {title} = this.state
    const values = {title}
    const cardStyle = { marginTop : "10px"} 
    const cardContentStyle = { padding : "25px", minHeight: "500px" }
    const listStyle = { paddingLeft: "0px"}
    
    const statusTypes = [ "Going","Interested","Can't go" ]
    const buttonGroup = statusTypes.map(status => {
        return <Button 
            key={'btn' + status}
            name={status}
            onClick={this.handleClick.bind(this, status)} 
            style={this.activeButtonColor(status)}
        >
            {status}
        </Button>
    })
    
        if (this.state.confirmed == false) {
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
                                    size="large"
                                    >
                                    {buttonGroup}
                                    </ButtonGroup>
                                </Grid>
                                {this.createForm()}
                                </Box>
                                {this.createDateAddress()}
                                
                            </CardContent>
                            </Card>
                    </Container>
                </div>
              )
        } else {
            return (
                <div>
                <Container maxWidth="sm" >
                    <Card style={ cardStyle } >
                        <CardContent style={ cardContentStyle }>
                            <ConfirmEvent 
                            values = {values}
                            />
                        </CardContent>
                        </Card>
                </Container>
                
            </div>
              )
        }
       

      }

        
    }       
      
  
if (document.getElementById('rsvp')) {
    ReactDOM.render(<RSVPEvent />, document.getElementById('rsvp'));
}


