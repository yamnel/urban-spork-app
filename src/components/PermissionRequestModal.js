import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
// import StaticUserDetail from './StaticUserDetail';
// import EditUserDetail from "./EditUserDetail";
// import UrbanSporkAPI from "../api/UrbanSporkAPI";


class PermissionRequestModal extends React.Component {

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.isOpen){
    //         const userData = UrbanSporkAPI.getUserFullData(nextProps.userId);
    //         userData.then(data => this.setState({userData: data}))
    //     }
    // }
    //
    state = {
        // edit: false
    };


    // handleOnEdit = () => {
    //     this.setState({edit: true})
    // };
    //
    handleOnCancel = () => {
            this.props.toggle();
    };

    handleOnClose = () => {
        // this.setState({edit: false});
        this.props.toggle();
    };

    handleOnGrantReguest = () => {
        // UrbanSporkAPI.updateUserDetails()
        this.props.refreshData();
        this.props.toggle();

    };

    handleOnDenyReguest = () => {
        // UrbanSporkAPI.updateUserDetails()
        this.props.refreshData();
        this.props.toggle();

    };


    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} toggle={this.handleOnClose}>
                    <ModalHeader toggle={this.handleOnClose}>Permission Request</ModalHeader>
                    <ModalBody>
                        {/*If requestData exists do something*/}
                        {this.props.requestData && <p>{`${this.props.requestData.permissionName}`}</p>}
                        {/*{this.state.userData? (this.state.edit? <EditUserDetail  userData={this.state.userData}/>: <StaticUserDetail userData={this.state.userData}/>):null}*/}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.handleOnDenyReguest}>Deny Request</Button>
                        {' '}
                        <Button color="success" onClick={this.handleOnGrantReguest}>Grant Request</Button>
                        {' '}
                        <Button color="secondary" onClick={this.handleOnCancel}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }


}

export default PermissionRequestModal;