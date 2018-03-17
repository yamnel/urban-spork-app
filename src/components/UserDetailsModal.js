import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import StaticUserDetail from './StaticUserDetail';
import EditUserDetail from "./EditUserDetail";
import UrbanSporkAPI from "../api/UrbanSporkAPI";


class UserDetailsModal extends React.Component {

    componentWillReceiveProps(nextProps) {
        if(nextProps.isOpen){
            const userData = UrbanSporkAPI.getUserFullData(nextProps.userId);
            userData.then(data => this.setState({userData: data}))
        }
    }

    state = {
        edit: false
    };


    handleOnEdit = () => {
        this.setState({edit: true})
    };


    handleOnCancel = () => {
        if (this.state.edit) {
            this.setState({edit: false});
        } else {
            this.props.toggle();
        }
    };

    handleOnClose = () => {
        this.setState({edit: false});
        this.props.toggle();
    };

    handleOnSave = () => {
        const data = {
            FirstName: this.state.userData.firstName,
            LastName: this.state.userData.lastName,
            Position: this.state.userData.position,
            Department: this.state.userData.department,
            IsAdmin: this.state.userData.isAdmin,
            Email: this.state.userData.email,
            ForID: this.state.userData.userId
        };

        console.log(data)
        UrbanSporkAPI.updateUserDetails(data)
    };

    handleOnDataChange = (userData) => {
        this.setState({userData})
        console.log(this.state)
    };

    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} toggle={this.handleOnClose}>
                    <ModalHeader toggle={this.handleOnClose}>User Detail</ModalHeader>
                    <ModalBody>
                        <div>
                            {this.state.userData? (this.state.edit? <EditUserDetail onDataChange={this.handleOnDataChange}  userData={this.state.userData}/>: <StaticUserDetail userData={this.state.userData}/>):null}
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {this.state.edit?
                            <Button color="success" onClick={this.handleOnSave} active={!this.state.edit}>Save</Button>
                            :
                            <Button color="primary" onClick={this.handleOnEdit} active={!this.state.edit}>Edit</Button>
                        }{' '}
                        <Button color="secondary" onClick={this.handleOnCancel}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }


}

export default UserDetailsModal;