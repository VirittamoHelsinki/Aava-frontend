import React, { lazy, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { Box } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
// const esimerkki = lazy(() => import('./esimerkki'));

export default function Routes() {(
    <Router>
        <Suspense fallback={
          <Box variant="outlined" style={{minHeight:"100vh", display: "grid", placeContent: "center"}}><CircularProgress size="4rem" /></Box>
        }>
          <Switch>

            {/* jos sivua ei löydy niin näytä tämä */}
            <Route path="*">
              {/* <PageNotFound /> */}
            </Route>

          </Switch>
        </Suspense>
    </Router>
)}