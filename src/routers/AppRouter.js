import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import DashboardPage from '../components/DashboardPage';
import HeaderComponent from '../components/HeaderComponent';
import UserManagementPage from '../components/UserManagementPage';
import PendingRequests from '../components/PendingRequests';
import NotFound from '../components/NotFound'


const AppRouter = () => (
    <BrowserRouter>
        <div className={"canvas"}>
            <HeaderComponent/>
            <div className={"lower-canvas"}>
                <Switch>
                    <Route path={"/"} component={DashboardPage} exact={true}/>
                    <Route path="/users" component={UserManagementPage}/>
                    <Route path="/requests" component={PendingRequests}/>

                    {/*This needs to be last*/}
                    <Route component={NotFound}/>
                </Switch>
            </div>

        </div>
    </BrowserRouter>
);

export default AppRouter;