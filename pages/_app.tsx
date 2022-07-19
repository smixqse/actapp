import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  createTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
  useMediaQuery
} from '@mui/material';
import merge from 'lodash.merge';
import { useEffect, useMemo } from 'react';

const common: ThemeOptions = {
  typography: {
    fontFamily:
      '"Work Sans", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;'
  },
  palette: {
    primary: {
      main: '#a39303'
    }
  },
  components: {
    MuiFab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        }
      }
    }
  }
};

const lightTheme = createTheme(
  merge(
    {
      palette: {
        background: {
          default: '#f7f6e6'
        },
        action: {
          active: '#000'
        }
      }
    },
    common
  )
);

const darkTheme = createTheme(
  merge(
    {
      palette: {
        background: {
          default: '#191a19'
        },
        action: {
          active: '#fff'
        },
        mode: 'dark'
      }
    },
    common
  )
);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)');

  const theme = useMemo(
    () => (prefersDarkMode ? darkTheme : lightTheme),
    [prefersDarkMode]
  );

  useEffect(() => {
    if (document) {
      const loadingElement = document.getElementById('loading');
      if (loadingElement) loadingElement.style.display = 'none';
    }
  }, []);

  return (
    <>
      {prefersDarkMode === !prefersLightMode ? (
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CssBaseline>
        </ThemeProvider>
      ) : null}
    </>
  );
};

export default MyApp;
