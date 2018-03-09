import React from 'react';
import UserTable from "./UserTable";
import {Button, FormGroup, Input} from 'reactstrap';
import {connect} from "react-redux";
import selectUsers from "../selectors/users";
import {setTextFilter} from "../actions/filters";
import UserDetailsModal from "./UserDetailsModal";
import {getUsersData} from "../actions/users";

export class UserManagementPage extends React.Component {
    // Last ID used stays in the state, I don't like it but it's a bug I need to fix later.
    state = {
        modalIsOpen: false,
        selectedUser: undefined
    };


    // componentDidMount() {
    //     getUsersData();
    //
    // }

    openUserDetailsModal = (selectedUserId) => {
        this.setUserData(selectedUserId);
        this.toggleModalIsOpen();

        //proof that is stays in the old state
        // console.log(`The new state field selectedUserId is ${this.state.selectedUserId}`);
    };

    toggleModalIsOpen = () => this.setState(() => ({modalIsOpen: !this.state.modalIsOpen}));


    // Where do I call this?
    // unsetUserData = () => {
    //     console.log('Should be Undef.');
    //     this.setState(() => ({selectedUserId: undefined}))
    // };

    setUserData = (selectedUser) => this.setState(() => ({selectedUser: selectedUser}));

    onInputChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    render() {
        return (
            <div>
                <div className={'user-management-nav'}>
                    <Button color={'success'}>Create User</Button>
                    <Button color={'primary'}>Filter</Button>

                    <FormGroup>
                        <Input type={'text'} value={this.props.filters.text} onChange={this.onInputChange} placeholder={'Search For User'} />
                    </FormGroup>
                </div>

                <div>
                    <UserTable openUserDetailsModal={this.openUserDetailsModal} users={this.props.users}/>
                </div>

                <UserDetailsModal isOpen={this.state.modalIsOpen} toggle={this.toggleModalIsOpen} userData={this.state.selectedUser}/>
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

