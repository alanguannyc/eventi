import { red } from '@material-ui/core/colors';
export default theme => ({
  card: {
    maxWidth: 445,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  subtitle: 
    theme.typography.subtitle1
  ,
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(5),
  },
});
