import React from 'react';
import { WebsiteMetrics as Dashboard } from './Dashboard';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import store from './store';
import './common/common.module.scss';
import theme from './theme';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  </Provider>
);

export default App;
