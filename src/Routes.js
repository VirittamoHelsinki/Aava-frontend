/** Routes for Aava */
import React, { lazy, Suspense, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import ComponentTest from './pages/ComponentTest';
import LoginPage from './pages/LoginPage';

import { Box } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import GroupIcon from '@material-ui/icons/Group';

import CircularProgress from '@material-ui/core/CircularProgress';
const NewProject = lazy(() => import('./pages/NewProject'));
const DashBoard = lazy(() => import('./pages/DashBoard'));
const Reviews = lazy(() => import('./pages/Reviews'));
const UserManagement = lazy(() => import('./pages/UserManagement'));


export default function Routes() {
  const [menuData, setMenuData] = useState([
    {key: 0, text: 'Dashboard', link: '/dashboard', icon: <DashboardIcon />},
    {key: 1, text: 'Katselmukset', link: '/reviews', icon: <SlideshowIcon />},
    {key: 2, text: 'Käyttäjät', link: '/usermanagement', icon: <GroupIcon />},
  ]);
  return (
    <Router>
        <Suspense fallback={
          <Box 
            variant="outlined" 
            style={{minHeight:"100vh", display: "grid", placeContent: "center"}}
          >
              <CircularProgress size="4rem" />
          </Box>
        }>
          <Switch>
            <Route exact path="/dashboard">
              <DashBoard menuData={menuData} />
            </Route>
            <Route exact path="/new-project">
              <NewProject menuData={menuData} />
            </Route>
            <Route exact path="/test">
              <ComponentTest />
            </Route>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route exact path="/reviews">
              <Reviews menuData={menuData} />
            </Route>
            <Route exact path="/usermanagement">
              <UserManagement menuData={menuData} />
            </Route>
            <Route path="*">
              {/* jos sivua ei löydy niin näytä tämä */}
              {/* <PageNotFound /> */}
            </Route>

          </Switch>
        </Suspense>
    </Router>
)}