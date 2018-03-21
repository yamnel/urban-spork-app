import React from 'react';
import {connect} from "react-redux";
import UserTable from "./UserTable";
import {Button, FormGroup, Input} from 'reactstrap';
import selectUsers from "../selectors/users";
import {setTextFilter} from "../actions/filters";
import UserDetailsModal from "./UserDetailsModal";
import {editUser, getUsersData} from "../actions/users";

export class UserManagementPage extends React.Component {
    // Last ID used stays in the state, I don't like it but it's a bug I need to fix later.
    state = {
        modalIsOpen: false
    };


    columns = [
        // {accessor: 'id', Header: 'User ID'},
        {accessor: 'name', Header: 'Name'},
        {accessor: 'email', Header: 'Email'},
        {accessor: 'department', Header: 'Department'},
        {accessor: 'title', Header: 'Title'}

    ];



    // componentDidMount() {
    //     getUsersData();
    //
    // }

    openUserDetailsModal = (selectedUserData) => {
        this.setUserData(selectedUserData.id);
        this.toggleModalIsOpen();

        if (this.state.modalIsOpen) {
            this.props.getUsersData();
        }

        //proof that is stays in the old state
        // console.log(`The new state field selectedUserId is ${this.state.selectedUserId}`);
    };

    // onCreateUserClick = () =>{
    //
    // };


    toggleModalIsOpen = () => this.setState(() => ({modalIsOpen: !this.state.modalIsOpen}));


    // Where do I call this?
    // unsetUserData = () => {
    //     console.log('Should be Undef.');
    //     this.setState(() => ({selectedUserId: undefined}))
    // };

    setUserData = (selectedUserId) => this.setState(() => ({selectedUser: selectedUserId}));

    onInputChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    render() {
        return (
            <div>
                <div className={'user-management-nav'}>
                    <Button onClick={() => this.props.history.push("/create-user")} color={'success'} >Create User</Button>
                    {/*<Button color={'primary'}>Filter</Button>*/}

                    <FormGroup>
                        <Input type={'text'} value={this.props.filters.text} onChange={this.onInputChange} placeholder={'Search'} />
                    </FormGroup>
                </div>

                <div>
                    <UserTable onRowClick={this.openUserDetailsModal} data={this.props.users} columns={this.columns}/>
                </div>

                <UserDetailsModal isOpen={this.state.modalIsOpen} toggle={this.toggleModalIsOpen}  setUserData={this.props.updateUser} userId={this.state.selectedUser}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        users: selectUsers(state.users, state.filters),
        filters: state.filters
    }
};

const mapDispatchToProps = (dispatch)  => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    getUsersData: () => dispatch(getUsersData()),
    updateUser: (data) => dispatch(editUser(data.id, data))
    // getUserData: () => dispatch(getUsersData())
});


export default connect(mapStateToProps, mapDispatchToProps)(UserManagementPage);

