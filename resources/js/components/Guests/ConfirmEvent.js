import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import AddToCalendar from 'react-add-to-calendar';
import 'react-add-to-calendar/dist/react-add-to-calendar.css';
export default class ConfirmEvent extends Component {
    

    render() {
    const { values } = this.props;
    const cardStyle = { marginTop : "20px"} 
    const cardContentStyle = { padding : "25px", marginTop : "20px" }
    const fabStyle = { top:"-20px",right: "5px", float: "right"}
    let event = {
        title: 'Sample Event',
        description: 'This is the sample event provided as an example only',
        location: 'Portland, OR',
        startTime: '2016-09-16T20:15:00-04:00',
        endTime: '2016-09-16T21:45:00-04:00'
    }
    let icon = { 'calendar-plus-o': 'left' }
      return (
        <div>
            <Fab
            color="primary"
            style={fabStyle}
            >
            {<CheckIcon /> }
            </Fab>
            <Paper style={cardContentStyle}>
                
                <Typography variant="h5" component="h3">
                    You’re going to {values.title}.
                </Typography>
                <Typography component="p">
                We've sent a confirmation email to your email address. Be sure to check your junk folder in case you haven’t received the confirmation.                
                </Typography>
                <br/>
                <AddToCalendar
                event={event}
                buttonTemplate={icon} />


                </Paper>
                
        </div>
      )

      }

        
    }       
      
  




