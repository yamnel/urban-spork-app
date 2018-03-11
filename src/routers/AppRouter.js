import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import DashboardPage from '../components/DashboardPage';
import HeaderComponent from '../components/HeaderComponent';
import UserManagementPage from '../components/UserManagementPage';
import PendingRequests from '../components/PendingRequests';
import NotFound from '../components/NotFound'
import CreateUser from "../components/CreateUser";
import ReportsPage from "../components/ReportsPage";


const AppRouter = () => (
    <BrowserRouter>
        <div className={"canvas"}>
            <HeaderComponent/>
            <div className={"lower-canvas"}>
                <Switch>
                    <Route path={"/"} component={DashboardPage} exact={true}/>
                    <Route path="/users" component={UserManagementPage}/>
                    <Route path="/requests" component={PendingRequests}/>
                    <Route path={"/create-user"} component={CreateUser}/>
                    <Route ppath={"/reports"} component={ReportsPage}/>

                    {/*This needs to be last*/}
                    <Route component={NotFound}/>
                </Switch>
            </div>

        </div>
    </BrowserRouter>
);

export default AppRouter;