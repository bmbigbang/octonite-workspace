import { createTheme } from '@mui/material/styles';
import { colors, typography } from '@bmbigbang/tokens';
import { responsiveFontSizes } from "@mui/material";

export let theme = createTheme({
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    error: {
      main: colors.error.main,
    },
  },
  //... other theme layers
  typography: {
    fontFamily: typography.fontFamily,
    h1: {
      fontSize: typography.fontSizes.xl,
      fontWeight: typography.fontWeights.bold,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true, // All buttons will be flat by default
      },
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none', // Use sentence case instead of uppercase
        },
      },
    }
  },
});

theme = responsiveFontSizes(theme)


