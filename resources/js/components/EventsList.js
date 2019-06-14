import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import MaterialTable from "material-table";
import EventCard from './EventCard';
import MemberDashboard from './MemberDashboard';

export default class EventsList extends Component {
  

  render() {
    const eventsData = [
      {
          "title":"Mixer",
          "time":"2019/09/09 10:00 am",
          "address":"34 east 51st street"
      },
      {
          "title":"Seminar",
          "time":"2019/11/29 10:00 am",
          "address":"34 east 51st street"
      }
    ]
    const eventcards = eventsData.map(eventData => {
      return <Grid item xs={6} sm={4} key= { eventData.title }>
              <EventCard
              eventData = {eventData}
              /> 
            </Grid>
      

    })


    return (
      <div>
      <MemberDashboard>
      
        <Container>
          <Grid container spacing={3}>
            { eventcards }
          </Grid>
        </Container>
      
      </ MemberDashboard>
      
      </div>
    )
  }
}

if (document.getElementById('eventslist')) {
  ReactDOM.render(<EventsList />, document.getElementById('eventslist'));
}
