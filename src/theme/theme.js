import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';

const theme = createMuiTheme({
  palette: palette,
  typography: {
    fontFamily: "'Poppins','sans-serif'"
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  topBar: {
    height: '56px'
  }
});

export default theme;