import React from 'react';
import UserTable from "./UserTable";
import {Link} from 'react-router-dom';
import {Button, FormGroup, Input} from 'reactstrap';
import {connect} from "react-redux";
import selectUsers from "../selectors/users";
import {setTextFilter} from "../actions/filters";
import UserDetailsModal from "./UserDetailsModal";

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

                <UserDetailsModal isOpen={this.state.modalIsOpen} toggle={this.toggleModalIsOpen} userId={this.state.selectedUser}/>
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
    // getUserData: () => dispatch(getUsersData())
});


export default connect(mapStateToProps, mapDispatchToProps)(UserManagementPage);

