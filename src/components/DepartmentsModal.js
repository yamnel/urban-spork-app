import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {faCheckCircle} from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import AddDepartment from "./AddDepartment";
import UrbanSporkAPI from "../api/UrbanSporkAPI";


class DepartmentsModal extends React.Component {


    state = {
        edit: true,
        addDepartmentButton: false,
        department:"",
    };

    handleOnCancel = () => {
        if (!this.state.edit) {
            this.setState({edit: false});
        } else {
            this.props.toggle();
        }
    };

    handleOnClose = () => {
        this.props.toggle();
        this.setState({edit: true});
    };

    handleOnSave = () => {
        let newDepartment = {
            Name:this.state.department,
        };

         UrbanSporkAPI.addDepartment(newDepartment);
        this.setState({edit: false});
        this.forceUpdate();
    };

    toggleAddButton = (data) => {
        this.setState({department:data});
        data.length > 0 ? this.setState({addDepartmentButton: true}): this.setState({addDepartmentButton: false});

    };


    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} toggle={this.handleOnClose}>
                    <ModalHeader toggle={this.handleOnClose}>Add Department</ModalHeader>
                    <ModalBody>
                        <div>
                            {this.state.edit?
                                <AddDepartment AddButton = {this.toggleAddButton}/>:
                                <h6><FontAwesomeIcon icon={faCheckCircle}/> {" "} The {this.state.department} department was successfully added!</h6>
                            }
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {this.state.edit?
                            <Button color="success" onClick={this.handleOnSave} disabled={!this.state.addDepartmentButton}
                                    active={!this.state.edit}>Add Department</Button>
                            :
                            <Button color="success" onClick={this.handleOnClose}
                                    active={this.state.edit}>Done</Button>
                        }{' '}
                        {this.state.edit &&
                        <Button color="secondary" onClick={this.handleOnCancel}
                                active={this.state.edit}>Cancel</Button>
                        }{' '}


                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default DepartmentsModal;