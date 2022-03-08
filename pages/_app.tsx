import type {AppProps} from 'next/app';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from '../styles/global-styles';
import {lightTheme} from '../styles/theme';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <GlobalStyle>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalStyle>
  );
}

export default MyApp;
