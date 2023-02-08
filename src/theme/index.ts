import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#204060',
    },
    secondary: {
      main: '#A8DADC',
    },
    error: {
      main: '#C60000',
    },
    warning: {
      main: '#A8DADC',
    },
    info: {
      main: '#FF8000',
    },
    success: {
      main: '#008000',
    },
  },
})

export default theme