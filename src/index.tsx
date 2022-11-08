import * as React from "react";
import ReactDOM from 'react-dom';
// import "webrtc";
import './index.css'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'
// import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

