import {useState} from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';
import UserProfile from './Components/UserProfile/UserProfile';
import Dashboard from './Components/Dashboard/Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
            <Route path="/" exact component={Main} />
            <Route path="/userprofile" component={UserProfile} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
          <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>
      </Router>
  );
}

export default App;
