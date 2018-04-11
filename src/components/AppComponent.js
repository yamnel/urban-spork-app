import React from 'react';
import {connect} from "react-redux";

import AppRouter from "../routers/AppRouter";
import LogInPage from "./LogInPage";
import {getUsersData} from "../actions/users";
import {setManagerId} from "../actions/manager";
import {getAllPermissions} from "../actions/permissions";
import NonAdminView from "./NonAdminView";


class AppComponent extends React.Component{

    state = {
        logIn: true,
        isAdmin: undefined,
        isNonAdmin: undefined,
        allowAccess: true,
        managerId: undefined
    };


    accessGranted = (managerId = '928956b8-6dba-4878-bb96-e91f98b0ffed') => {
        // this.setState(() => ({allowAccess: true, managerId}));
        console.log('called the store functions');
        this.props.getUserData();
        this.props.setManagerId(managerId);
        this.props.getAllPermissions();
    };


    isAdmin = (b) => {
        console.log(b);

        if (b == "true") {
            console.log("Admin User");
            this.setState({isAdmin: true});
            this.setState({isNonAdmin: false});
            this.setState({logIn: false});
        } else {
            console.log("Non-Admin User");

            this.setState({isNonAdmin: true});
            this.setState({isAdmin: false});
            this.setState({logIn: false});
        }
    };



    render() {
        return (
            <div>
                {}
                {this.state.logIn  && <LogInPage isAdmin={this.isAdmin}/> }
                {this.state.isAdmin && ( <AppRouter grantAccess={this.accessGranted()} /> )}
                {this.state.isNonAdmin && (<NonAdminView/>)}
                {/*{this.accessGranted()}*/}
                {/*{this.state.allowAccess? ( <AppRouter /> ) : ( <LogInPage accessGranted={this.accessGranted}/>)}*/}
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch)  => ({
    getUserData: () => dispatch(getUsersData()),
    setManagerId: (id) => dispatch(setManagerId(id)),
    getAllPermissions: () => dispatch(getAllPermissions()),
});

export default connect(undefined,mapDispatchToProps)(AppComponent)