import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    favorite: {
      main: '#ffac33',
    },
    repost: {
      main: '#5c913b',
    },
    more: {
      main: '#30F',
    },
  },
});

export default theme;
