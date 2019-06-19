import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Button,
  Link,
} from '@material-ui/core';

// Material icons
import {
  DashboardOutlined as DashboardIcon,
  PeopleOutlined as PeopleIcon,
  ShoppingBasketOutlined as ShoppingBasketIcon,
  LockOpenOutlined as LockOpenIcon,
  TextFields as TextFieldsIcon,
  ImageOutlined as ImageIcon,
  InfoOutlined as InfoIcon,
  AccountBoxOutlined as AccountBoxIcon,
  SettingsOutlined as SettingsIcon
} from '@material-ui/icons';

// Component styles
import styles from './styles';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "John Doe",
      title: "HR Director",
      open:false
    }
  }
  handleClose = ()=>{
    this.setState({open:false})
  }
  handleClickOpen = () => {
    this.setState({open:true})
  }
  render() {
    const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });
    const { classes, className } = this.props;

    const rootClassName = classNames(classes.root, className);
    
    return (
      <nav className={rootClassName}>
        <div className={classes.logoWrapper}>
          <List
            className={classes.logoLink}
            to="/"
          >
            <img
              alt="Brainalytica logo"
              className={classes.logoImage}
              src="/images/logos/brainalytica_logo.svg"
            />
          </List>
        </div>
        <Divider className={classes.logoDivider} />
        <div className={classes.profile}>
          <List to="/account">
            <Avatar
              alt= {this.state.name}
              className={classes.avatar}
              src="/image/default_avatar.png"
            />
          </List>
          <Typography
            className={classes.nameText}
            variant="h6"
          >
            {this.state.name}
          </Typography>
          <Typography
            className={classes.bioText}
            variant="caption"
          >
            {this.state.title}
          </Typography>
        </div>
        <Divider className={classes.profileDivider} />
        <List
          component="div"
          disablePadding
        >
          <ListItem
            activeclassname={classes.activeListItem}
            className={classes.listItem}
            component="a"
            href="/dashboard"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Dashboard"
            />
          </ListItem>
          
          
          <ListItem
            activeclassname={classes.activeListItem}
            className={classes.listItem}
            component="a"
            href="/events"
            
          >
            <ListItemIcon className={classes.listItemIcon}>
              <i className="material-icons">
              event
              </i>
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Events"
            />
          </ListItem>
          
          
          <ListItem
            activeclassname={classes.activeListItem}
            className={classes.listItem}
            component="a"
            href="/account"
          >
            
            <ListItemIcon className={classes.listItemIcon}>
            <AccountBoxIcon />
              </ListItemIcon>
              
              <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Account"
            />
            
          
          </ListItem>
          <ListItem
            activeclassname={classes.activeListItem}
            className={classes.listItem}
            
            to="/settings"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Settings"
            />
          </ListItem>
        </List>
        <Divider className={classes.listDivider} />
        <List
          component="div"
          disablePadding
          subheader={
            <ListSubheader className={classes.listSubheader}>
              Support
            </ListSubheader>
          }
        >
          <ListItem
            className={classes.listItem}
            onClick={this.handleClickOpen}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Customer support"
            />
          </ListItem>
          <Dialog
            open={this.state.open}
            // TransitionComponent={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </List>
      </nav>
    );
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
