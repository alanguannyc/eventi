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


class ScanQrCode extends Component {

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
        <PortletHeader>
          <PortletLabel
            // subtitle="Scan Qr Code to view on your phone"
            title="Scan Qr Code to view on your phone"
          />
        </PortletHeader>

        <PortletContent>
            <Typography
              className={classes.dateText}
              variant="h5"
            >
              <img src="/image/qr-code.svg" alt="" style={{"height":"150px"}}/>
          </Typography>

        </PortletContent>
      </Portlet>
      </div>
    );
  }
}

ScanQrCode.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScanQrCode);
