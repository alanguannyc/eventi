// Colors
const primary = {
  main: '#0767DB',
  light: '#F6F9FD',
  dark: '#0B48A0'
};
import palette from '../palette';

export default {
  root: {
    backgroundColor: palette.background.default,
    '&:hover': {
      backgroundColor: primary.light
    },
    '&$focused': {
      backgroundColor: primary.light
    }
  }
};
