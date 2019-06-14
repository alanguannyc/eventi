import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import EventsList from './EventsList'

const drawerWidth = 240;

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//     },
//     appBar: {
//       transition: theme.transitions.create(['margin', 'width'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//     },
//     appBarShift: {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: drawerWidth,
//       transition: theme.transitions.create(['margin', 'width'], {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     hide: {
//       display: 'none',
//     },
//     drawer: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },
//     drawerPaper: {
//       width: drawerWidth,
//     },
//     drawerHeader: {
//       display: 'flex',
//       alignItems: 'center',
//       padding: '0 8px',
//       ...theme.mixins.toolbar,
//       justifyContent: 'flex-end',
//     },
//     content: {
//       flexGrow: 1,
//       padding: theme.spacing(3),
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       marginLeft: -drawerWidth,
//     },
//     contentShift: {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     },
//   }),
// );
const bodyStyle = {
    content: {
        // flexGrow: 1,
        // padding: 50,
        // marginTop: 100,
        // marginLeft: -240,
    },
}
export default class MemberDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open:false
        };
    }

  handleDrawerOpen=()=> {
    this.setState({open:true})
  }

  handleDrawerClose=()=> {
    this.setState({open:false})
  }
  
  render() {
    return (
        <div >
          <CssBaseline />
          <AppBar
            position="fixed"
           
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                edge="start"
    
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Persistent drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
    
            variant="persistent"
            anchor="left"
            open={this.state.open}
           
          >
            <div >
              <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon /> 

              </IconButton>
            </div>
            <Divider />
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          <main style={{"marginTop":"100px"}}>
         {this.props.children}
         </main>
        </div>
      );
  }
  
}

// if (document.getElementById('eventslist')) {
//     ReactDOM.render(<MemberDashboard />, document.getElementById('eventslist'));
//   }
  