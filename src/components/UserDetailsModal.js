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
        UrbanSporkAPI.updateUserDetails()
    };


    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} toggle={this.handleOnClose}>
                    <ModalHeader toggle={this.handleOnClose}>User Detail</ModalHeader>
                    <ModalBody>
                        {this.state.userData? (this.state.edit? <EditUserDetail  userData={this.state.userData}/>: <StaticUserDetail userData={this.state.userData}/>):null}
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