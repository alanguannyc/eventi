import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from '../../Layouts';

// Custom components
import  EventsList from './EventsList';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  }
});

class Events extends Component {
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
          <EventsList />
            <Grid
              item
              lg={8}
              md={6}
              xl={8}
              xs={12}
            >
              
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}



export default withStyles(styles)(Events);
