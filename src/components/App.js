import React from 'react';
import './App.scss';
import SideBar from './sidebar/sidebar';
import { Route, Switch } from 'react-router-dom';
import ImagesListView from './images_view/imagesListView';
import Home from './home/home';
import TabsView from './tabs_view/tabsView';

function App() {
  return (
    <div className="body_container">
      <SideBar />
      <div className="content_container">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/imagesListView"  component={ImagesListView}/>
          <Route path="/tabsView" component={TabsView}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
