import {useState} from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';
import UserProfile from './Components/UserProfile/UserProfile';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { redirectRoutes } from "./router.js";


const redirectRouteComponents = redirectRoutes.map(route => (
  <Route
    key={route.path}
    path={route.path}
    exact={route.exact}
    render={route.render}
  />
));

const App = () => {
const [sidebarOpen, setSidebarOpen]= useState(false);

const openSidebar = () => {
  setSidebarOpen(true);
}
const closeSidebar = () => {
  setSidebarOpen(false);
}
  return (
      <Router>
        <div className="container">
          <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
          <Switch>
            <Route path="/userprofile" exact component={UserProfile} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/home" exact component={Main} />
          </Switch>
          <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>
        {redirectRouteComponents}
      </Router>
  );
}

export default App;
