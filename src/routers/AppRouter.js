import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import DashboardPage from '../components/DashboardPage';
import HeaderComponent from '../components/HeaderComponent';
import UserManagementPage from '../components/UserManagementPage';
import NotFound from '../components/NotFound'

const AppRouter = () => (

    <BrowserRouter>
        <div className={"canvas"}>
            <HeaderComponent/>
            <div className={"lower-canvas"}>
                <Switch>
                    <Route path={"/"} component={DashboardPage} exact={true}/>
                    <Route path="/users" component={UserManagementPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>

        </div>
    </BrowserRouter>
);

export default AppRouter;