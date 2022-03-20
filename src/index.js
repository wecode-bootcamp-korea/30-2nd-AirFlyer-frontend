import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import GlobalFonts from './styles/fonts/fonts';
import Router from './Router';
import rootReducer from 'redux/index';
import theme from './styles/theme';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFonts />
      <Router />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
