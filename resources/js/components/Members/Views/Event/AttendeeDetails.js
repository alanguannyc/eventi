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


export default class AttendeeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            position:"",
            email:"",
            company:"",
            status:"Going",
            loading: false,
            confirmed: true,
            isUpdating: false,
        };
    }
    handleClick = (name, event) => {

        this.setState({
            status : event.currentTarget.name
        })
    }

    submitForm = () => {
        this.setState({confirmed: true})
    }

    handleChange = (name, event) => {
        this.setState({
            [name] : event.target.value,
            isUpdating: true
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
            style={{display: this.state.isUpdating ? "":"none"}}
            >
            Update
            </Button>
            <div >
                {this.state.loading && <CircularProgress size={24} style={buttonProgress} />}
            </div>
            </ValidatorForm>
            
        )
    }

    render() {
        
    const cardContentStyle = { padding : "25px", minHeight: "400px" }
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
    
        
    return <div>
                <Card >
                    <CardContent style={ cardContentStyle }>
                        <Grid item xs={12}>
                            <ButtonGroup 
                            fullWidth  
                            size="small"
                            >
                            {buttonGroup}
                            </ButtonGroup>
                        </Grid>
                        {this.createForm()}
                        
                    </CardContent>
                    </Card>

        </div>
      }

        
    }       


