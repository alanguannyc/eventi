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
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     card: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 0,
//       paddingTop: '56.25%', // 16:9
//     },
//     expand: {
//       transform: 'rotate(0deg)',
//       marginLeft: 'auto',
//       transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//       }),
//     },
//     expandOpen: {
//       transform: 'rotate(180deg)',
//     },
//     avatar: {
//       backgroundColor: red[500],
//     },
//   }),
// );


export default class EventCard extends Component{

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
        const fabStyle = { "marginLeft": "auto","right":"5px" }
        const { eventData } = this.props
        const subTitle = <div>{eventData.time}<br />{eventData.address} </div>
  return (
    <Card key={eventData.title}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings" disabled>
            <img src="/image/qr-code.svg" alt="" style={{"height":"30px"}}/>
          </IconButton>
        }
        title={ eventData.title }
        subheader= { subTitle }
        
      />
      <CardMedia
        
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
      { eventData.title }
        <Typography variant="body2" color="textSecondary" component="p">
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