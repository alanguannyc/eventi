import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid, Divider } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from '../../Layouts';

// Custom components
import ViewEvent from './ViewEvent';
import AttendeeDetails from './AttendeeDetails';
import ScanQrCode from './ScanQrCode';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  }
});

class Event extends Component {
  state = { tabIndex: 0 };

  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout >
        <div className={classes.root}>
          <Grid
            container
            spacing={4}
          >
          
            <Grid
            item
            lg={6}
            md={6}
            xl={8}
            xs={12}
            >
              <ViewEvent />
            </Grid>

            <Grid
              item
              lg={6}
              md={6}
              xl={4}
              xs={12}
            >
              <AttendeeDetails />
              <Divider />
              <br />
              <ScanQrCode />
            </Grid>

          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}



export default withStyles(styles)(Event);
