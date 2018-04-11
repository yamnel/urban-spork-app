import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {faCheckCircle} from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import AddDepartment from "./AddDepartment";
import UrbanSporkAPI from "../api/UrbanSporkAPI";
import RemoveDepartment from "./RemoveDepartment";


class DepartmentsModal extends React.Component {


    state = {
        edit: true,
        addDepartmentButton: false,
        departmentToAdd:"",
        departmentToRemove:""
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

    handleOnAdd = () => {
        let newDepartment = {
            Name:this.state.department,
        };

         UrbanSporkAPI.addDepartment(newDepartment);

        this.setState({edit: false});
        this.forceUpdate();
    };

    handleOnRemove = () => {

        let department = {
            Name:this.state.department,
        };

        UrbanSporkAPI.removeDepartmentByName(department);
        this.setState({edit: false});
        this.forceUpdate();
    };

    toggleAddButton = (data) => {
        this.setState({department:data});
        data.length > 0 ? this.setState({addDepartmentButton: true}): this.setState({addDepartmentButton: false});

    };

    updateDepartment = (department) => {
        console.log(department);
        this.setState({department: department});
        this.toggleAddButton(department);
    };

    updateDepartmentForRemove = (department) => {
        console.log('Department is: '+department);
        this.setState({department: department});
        this.toggleAddButton(department);
    };

    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} toggle={this.handleOnClose}>
                    <ModalHeader toggle={this.handleOnClose}>{this.props.addDepartment ? "Add":"Remove"} Department</ModalHeader>
                    <ModalBody>
                        <div>
                            {this.state.edit?
                                (this.props.addDepartment ?
                                    <AddDepartment updateDepartment={this.updateDepartment}
                                                   AddButton={this.titleUpdated} department={this.props.department}/>
                                    :
                                <RemoveDepartment DepartmentSelected={this.updateDepartmentForRemove}
                                             AddButton={this.titleUpdated} department={this.props.department}/>):
                                <h6><FontAwesomeIcon icon={faCheckCircle}/> {" "} The {this.state.department}{' '}
                                 department was successfully {this.props.addDepartment? "added":"removed"}!</h6>
                            }
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {this.state.edit?
                            <Button color={this.props.addDepartment? "success":"danger"}
                                    onClick={this.props.addDepartment? this.handleOnAdd : this.handleOnRemove}
                                    disabled={!this.state.addDepartmentButton}
                                    active={!this.state.edit}>{this.props.addDepartment? "Add":"Remove"} Department</Button>
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