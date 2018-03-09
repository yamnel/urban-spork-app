export class UrbanSporkAPI {

    static getAllUsers() {
        return fetch('http://localhost:5000/api/user/getusermanagementprojection').then(response => {
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
            return error;
        });
    }





    static updateUserDetails(data) {
        return fetch('http://localhost:5000/api/user/update',{
            body: data,
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT'
        }).then(response => {
            return response.json();
        });
    }

}

export default UrbanSporkAPI;