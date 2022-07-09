import { createTheme } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '6rem',
  '@media (max-width: 600px)': {
    fontSize: '3rem',
  },
};

export default theme;
