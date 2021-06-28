import '../styles/globals.css';

// proper icon styling, https://stackoverflow.com/a/62494995
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import { store } from '../redux';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
