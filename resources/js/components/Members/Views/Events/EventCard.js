import React, { Component } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import styles from './styles'
import { withStyles } from '@material-ui/core';
import { Popover } from '@material-ui/core';


class EventCard extends Component{
      constructor(props) {
        super(props);
        this.state = {
          anchorEl: null,
        };
    }

    handlePopoverOpen = (event) => {
      this.setState({anchorEl: event.currentTarget})
    }
  
    handlePopoverClose = () => {
      this.setState({anchorEl: null})
    }

    createPopup = () => {
      const { classes} = this.props;
      const open = Boolean(this.state.anchorEl);
      return (
        <div>
        <Typography
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={this.handlePopoverOpen}
          onMouseLeave={this.handlePopoverClose}
        >
            <IconButton aria-label="Settings" disabled>
              
            <img src="/image/qr-code.svg" alt="" style={{"height":"30px"}}/>
          </IconButton>
        </Typography>
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={this.handlePopoverClose}
          disableRestoreFocus
        >
          <Typography>Use mobile App to scan</Typography>
          <img src="/image/qr-code.svg" alt="" style={{"height":"150px"}}/>
        </Popover>
      </div>
      )
    }

    activeButtonColor = (value) => {
        const activeButtonStyle = {
            "going":{
                backgroundColor:"#29af40", color:'white'
            },
            "interested":{
                backgroundColor:"#e5a22a", color:'white'
            },
            "cannot": {
                backgroundColor:"#e65225", color:'white'
            }
        }
        switch (value){
            case "Going":
                return activeButtonStyle.going
            case "Interested":
                return activeButtonStyle.interested
            case "Cannot":
                return activeButtonStyle.cannot
            }
      }

    render() {
      const { classes, eventData } = this.props;
        const fabStyle = { "marginLeft": "auto","right":"5px" }
        // const { eventData } = this.props
        const subTitle = <div>{eventData.time}<br />{eventData.address} </div>
  return (
    <Card key={eventData.title} className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          this.createPopup()
          
        }
        title={ eventData.title }
        titleTypographyProps={{variant:'h2' }}
        subheader= { subTitle }
        subheaderTypographyProps={{variant:'subtitle1' }}
        
      />
      <CardMedia
      className={classes.media}
        image="/image/meeting-space.jpg"
      />
      <CardContent>
      <Typography variant="h5"  >
      { eventData.title }
      </ Typography>
     
        <Typography variant="body1" color="initial" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions >
      <Tooltip title="I'm Going" aria-label="Add" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} placement="top">
        <IconButton aria-label="I'M GOING" style={this.activeButtonColor("Going")} size="small">
            <i className="material-icons">
            done
            </i>
        </IconButton>
        </Tooltip>
        <Tooltip title="Interested" aria-label="Add" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
        <IconButton aria-label="Share" style={this.activeButtonColor("Interested")} size="small">
            <i className="material-icons">
            change_history
            </i>
        </IconButton>
        </Tooltip>
        <Tooltip title="Can't go" aria-label="Add" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
        <IconButton style={this.activeButtonColor("Cannot")} size="small">
            <i className="material-icons">
            clear
            </i>
        </IconButton>
        </Tooltip>
        <div style={fabStyle}>
       
        <Link href={`/rsvp`} >
            <i className="material-icons"  style={{"color":"green"}}>
            info
            </i>
        </Link>
        </div>
        
      </CardActions>
    </Card>
   
  );
}
}

export default withStyles(styles)(EventCard);