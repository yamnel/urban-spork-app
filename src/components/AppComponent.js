import React from 'react';
import AppRouter from "../routers/AppRouter";
import LogInPage from "./LogInPage";
import {setTextFilter} from "../actions/filters";
import {getUsersData} from "../actions/users";
import {connect} from "react-redux";
import {setManagerId} from "../actions/manager";


class AppComponent extends React.Component{

    state = {
        allowAccess: true,
        managerId: undefined
    };


    accessGranted = (managerId = 23) => {
        // this.setState(() => ({allowAccess: true, managerId}));

        this.props.getUserData();
        this.props.setManagerId(parseInt(managerId));
    };

    render() {
        return (
            <div>
                {this.accessGranted()}
                {this.state.allowAccess? ( <AppRouter /> ) : ( <LogInPage accessGranted={this.accessGranted}/>)}
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch)  => ({
    getUserData: () => dispatch(getUsersData()),
    setManagerId: (id) => dispatch(setManagerId(id))
});

export default connect(undefined,mapDispatchToProps)(AppComponent)