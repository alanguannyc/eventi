import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AddToCalendar from 'react-add-to-calendar';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Avatar, Typography, Button, LinearProgress } from '@material-ui/core';

// Shared components
import { Portlet, PortletContent, PortletFooter, PortletHeader, PortletLabel } from '../../components';

// Component styles
import styles from './styles';

import SimpleMap from './GoogleMap';
import AttendeeDetails from './AttendeeDetails';

class ViewEvent extends Component {

  render() {
    const event = {
      name: "Mixer",
      address: "hilton",
      time: "2019/9/9",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
      
    }
    const { classes, className, ...rest } = this.props;



    return (
      <div>
      
      <Portlet
        {...rest}

      >
        <PortletContent>
          <div className={classes.details}>
            <div className={classes.info}>
              <Typography variant="h2">{ event.name }</Typography>
              
              <Typography
                className={classes.dateText}
                variant="body1"
              >
                {event.description}
              </Typography>
            </div>
            
          </div>
          
        </PortletContent>
      </Portlet>

      <Portlet
        {...rest}
      >
        <PortletHeader>
          <PortletLabel
            subtitle="Save to your calendar"
            title="Date & Time"
          />
        </PortletHeader>
        <PortletContent >
        <div className={classes.eventBody} >
            <Typography
              className={classes.dateText}
              variant="body1"
            >
              {event.time}
            </Typography>
            <AddToCalendar
            event={event}

            />
        </div>
            
        </PortletContent>
      </Portlet>

      <Portlet
        {...rest}
      >
        <PortletHeader>
          <PortletLabel
            subtitle="View On Google Map"
            title="Location"
          />
        </PortletHeader>
        <PortletContent>
            <Typography
              className={classes.dateText}
              variant="h5"
            >
              {event.address}
          </Typography>
          <SimpleMap />
        </PortletContent>
      </Portlet>
      </div>
    );
  }
}

ViewEvent.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ViewEvent);
