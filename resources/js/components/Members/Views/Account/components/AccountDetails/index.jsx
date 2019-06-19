import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Button, TextField } from '@material-ui/core';

// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter
} from '../../../../components';

// Component styles
import styles from './styles';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

class Account extends Component {
  state = {
    name: 'John Doe',
    company: 'Hilton',
    title: 'HR Director',
    address: 'fashion ave',
    email: 'contact@devias.io',
    phone: '212 456 6988',
  };

  handleChange = (name, e) => {
    this.setState({
      [name]: e.target.value
    });
  };

  render() {
    const { classes, className, ...rest } = this.props;
    const { name, company, title, address, phone, email } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            subtitle="The information can be edited"
            title="Profile"
          />
        </PortletHeader>
        <PortletContent noPadding>
          <form
            autoComplete="off"
            noValidate
          >
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                helperText=""
                label="Name"
                margin="dense"
                required
                value={name}
                variant="outlined"
                onChange={this.handleChange.bind(this,"name")}
              />
              <TextField
                className={classes.textField}
                label="Email Address"
                margin="dense"
                required
                value={email}
                variant="outlined"
                onChange={this.handleChange.bind(this,"email")}
              />
              </div>
              <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="Company"
                margin="dense"
                required
                value={company}
                variant="outlined"
                onChange={this.handleChange.bind(this,"company")}
              />
              <TextField
                className={classes.textField}
                label="Title"
                margin="dense"
                required
                value={title}
                variant="outlined"
                onChange={this.handleChange.bind(this,"title")}
              />

            </div>
            <div className={classes.field}>
              
              <TextField
                className={classes.textField}
                label="Phone Number"
                margin="dense"
                value={phone}
                variant="outlined"
                onChange={this.handleChange.bind(this,"phone")}
              />
            
                <TextField
                className={classes.textField}
                label="Address"
                margin="dense"
                value={address}
                variant="outlined"
                onChange={this.handleChange.bind(this,"address")}
              />
              
            </div>
          </form>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          <Button
            color="primary"
            variant="outlined"
          >
            Save details
          </Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

Account.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Account);
