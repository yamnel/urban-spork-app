import React from "react";
import {connect} from "react-redux";
import {getUsersData} from "../actions/users";

export class UrbanSporkAPI extends React.Component {

    static getAllUsers() {
        return fetch('http://localhost:5000/api/user/getusermanagementprojection')
            .then(response => {
                console.log('UserData gotten');
                return response.json();
            }).catch(error => {
                return error;
            });
    }

    static getAllPermissions() {
        return fetch('http://localhost:5000/api/permission/getSystemDropdown')
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }

    // http://localhost:5000/api/user/id/6da06fc4-02cb-4ce3-b63f-112596fe6bff
    static getUserFullData(id) {
        return fetch(`http://localhost:5000/api/user/id/${id}`).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getPendingRequests() {
        return fetch('http://localhost:5000/api/permission/getpendingrequests').then(response => {
            return response.json();
        }).catch(error => {
            console.log(error);
            return [];
        });
    }

    static getDepartments() {
        return fetch('http://localhost:5000/api/department').then(response => {
            return response.json();
        }).catch(error => {
            console.log(error);
            return [];
        });
    }

    static getSystemDashboard() {
        return fetch('http://localhost:5000/api/user/getSystemDashboard').then(response => {
            return response.json();
        }).catch(error => {
            console.log(error);
            return [];
        });
    }

    static getSystemActivityReport(systemID) {
        return fetch(`http://localhost:5000/api/user/getSystemReport?PermissionId=${systemID.PermissionId}`).then(response => {
            return response.json();
        }).catch(error => {
            console.log(error);
            return [];
        });
    }

    static getAproverActivity() {
        return fetch('http://localhost:5000/api/user/getapproveractivity').then(response => {
            return response.json();
        }).catch(error => {
            console.log(error);
            return [];
        });
    }

    // TODO: This is not working, talk to Stephen/Tyler(s) about it.
    static getOffBoardingReport(id) {
        return fetch(`http://localhost:5000/api/user/offboard/${id}`).then(response => {
            return response.json();
        }).catch(error => {
            console.log(error);
            return [];
        });
    }

    static updateUserDetails(data) {
        return fetch('http://localhost:5000/api/user/update', {
            body: JSON.stringify(data),
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT'
        }).then(response => {
            return response.json();
        }).catch(error => {
            console.log(data);
            console.log(error);
        });
    }

    static grantPermission(data) {
        return fetch('http://localhost:5000/api/user/grantPermissions', {
            body: JSON.stringify(data),
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT'
        }).then(response => {
            return response.json();
        }).catch(error => {
            console.log(data);
            console.log(error);
        });
    }

    static denyPermission(data) {
        return fetch('http://localhost:5000/api/user/denyPermissions', {
            body: JSON.stringify(data),
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT'
        }).then(response => {
            return response.json();
        }).catch(error => {
            console.log(data);
            console.log(error);
        });
    }


    static createUser(data) {
        return fetch('http://localhost:5000/api/user/createuser', {
            body: JSON.stringify(data),
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        }).then(response => {
            return response.json();
        }).catch(error => {
            console.log('data', data);
            console.log('error', error);
        });
    }

    static addDepartment(data) {
        return fetch('http://localhost:5000/api/department/create', {
            body: JSON.stringify(data),
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        }).then(response => {
            return response.json();
        }).catch(error => {
            console.log('data', data);
            console.log('error', error);
        });
    }
}


const mapDispatchToProps = (dispatch) => ({
    getUsersData: () => dispatch(getUsersData())
});
export default connect(undefined, mapDispatchToProps)(UrbanSporkAPI);
