import React from 'react';
import UserTable from "./UserTable";
import UrbanSporkAPI from '../api/UrbanSporkAPI';
import moment from 'moment';

export default class PendingRequests extends React.Component{

    componentWillMount(){
        const requestData = UrbanSporkAPI.getPendingRequests();
        requestData.then(data => this.setState({requestData: data}))
    }

    state = {
    };

    styles = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    };

    columns = [
        // {accessor: 'id', Header: 'User ID'},
        {accessor: 'forFirstName', Header: 'Name'},
        {accessor: 'permissionName', Header: 'System'},
        {
            accessor: 'dateOfRequest',
            Header: 'Date',
            Cell: ({value}) => moment.utc(value).format('ddd MMM D YYYY').toString()
        },
        // {accessor: 'reason', Header: 'Request Notes'}
    ];

    openRequestDialogModal = () => {

    };

    stuff = () => {
        console.log(this.state.requestData)
    };
    render() {
        return (
            <div>

                <div style={this.styles}>
                    <h1>Pending Requests</h1>
                </div>
                {this.stuff()}
                <UserTable onRowClick={this.openRequestDialogModal} columns={this.columns} data={this.state.requestData}/>
            </div>
        )
    }

}


