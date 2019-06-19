import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Avatar, Typography, Button, LinearProgress } from '@material-ui/core';

// Shared components
import { Portlet, PortletContent, PortletFooter } from '../../../../components';

// Component styles
import styles from './styles';

class AccountProfile extends Component {

  render() {
    const user = {
      name: "John Doe",
      company: "hilton",
      title: "HR director"
    }
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletContent>
          <div className={classes.details}>
            <div className={classes.info}>
              <Typography variant="h2">{ user.name }</Typography>
              <Typography
                className={classes.locationText}
                variant="body1"
              >
                {user.company}
              </Typography>
              <Typography
                className={classes.dateText}
                variant="body1"
              >
                {user.title}
              </Typography>
            </div>
            <Avatar
              className={classes.avatar}
              src="/image/default_avatar.png"
            />
          </div>
          
        </PortletContent>
        <PortletFooter>
            <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button
              className={classes.uploadButton}
              color="primary"
              variant="text"
              component="span"
            >
              Update Photo
            </Button>
          </label>
          <Button variant="text" >Remove Photo</Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

AccountProfile.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountProfile);
