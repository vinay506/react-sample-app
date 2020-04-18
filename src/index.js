import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch } from 'react-router-dom'
import Header from './components/header/header';


const RootOfApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <App className="" />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <RootOfApp />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
