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
import { AccountProfile, AccountDetails, Password } from './components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  }
});

class Account extends Component {
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
                lg={4}
                md={6}
                xl={4}
                xs={12}
              >
                <AccountProfile />
                <Divider />
                <br />
                <Password />
              </Grid>

              <Grid
                item
                lg={8}
                md={6}
                xl={8}
                xs={12}
              >
                <AccountDetails />
              </Grid>
          </Grid>
         
        </div>
      </DashboardLayout>
    );
  }
}

Account.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Account);
