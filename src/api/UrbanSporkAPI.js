export class UrbanSporkAPI {

    static getAllUsers() {
        return fetch('http://localhost:5000/api/user/getusercollection?SortField=DateCreated&SortDirection=DESC&IncludeInactive=true&IncludeIsAdmin=true').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getUserFullData() {
        return fetch('http://localhost:5000/api/user/getusercollection').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default UrbanSporkAPI;