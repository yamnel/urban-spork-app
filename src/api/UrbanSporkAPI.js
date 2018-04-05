import React from "react";
import {connect} from "react-redux";
import {getUsersData} from "../actions/users";

export class UrbanSporkAPI extends React.Component{

    url = 'http://localhost:5000/api/';
    
    static getAllUsers() {
        return fetch(`${this.url}user/getusermanagementprojection`).then(response => {
            console.log('UserData gotten');
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    // ${this.url}user/id/6da06fc4-02cb-4ce3-b63f-112596fe6bff
    static getUserFullData(id) {
        return fetch(`${this.url}user/id/${id}`).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getPendingRequests() {
        return fetch(`${this.url}permission/getpendingrequests`).then(response => {
            return response.json();
        }).catch(error => {
            console.log(error);
            return [];
        });
    }

    static getAproverActivity() {
        return fetch(`${this.url}user/getapproveractivity`).then(response => {
            return response.json();
        }).catch(error => {
            console.log(error);
            return [];
        });
    }



    static updateUserDetails(data) {
        return fetch(`${this.url}user/update`,{
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
        return fetch(`${this.url}user/createuser`,{
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


const mapDispatchToProps = (dispatch)  => ({
    getUsersData: () => dispatch(getUsersData())
});
export default connect(undefined, mapDispatchToProps)(UrbanSporkAPI);
