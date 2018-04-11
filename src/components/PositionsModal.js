import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {faCheckCircle} from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import AddPosition from "./AddPosition";
import UrbanSporkAPI from '../api/UrbanSporkAPI';
import RemovePosition from "./RemovePosition";

class PositionsModal extends React.Component {

    constructor(props) {
        super();

        this.state = {
            edit: true,
            addPositions: props.addPositions,
            addPositionsButton: false,
            department: "",
            position: "",

        };
    }

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
        this.props.addPositions(true)
    };

    handleOnSave = () => {

        this.createPosition();

        this.setState({edit: false});
    };

    createPosition= () => {

        var request = {
            PositionName: this.state.position,
            DepartmentName: this.state.department
        };

        UrbanSporkAPI.addPosition(request);
    };

    titleUpdated = (data) => {
        console.log("titleUpdated:  " + data);
        this.setState((prevState)=> {
            console.log('The position was', prevState.position);
            console.log('The new data for the position is ', data);

            return {position: data}
        });

        this.toggleAddButton();
    };

    toggleAddButton = () => {
        console.log("The position Title: " + this.state.position);
        console.log("The Department Selected: " + this.state.department);
        this.state.position.length > 0 && this.state.department.length > 0 ? this.setState({addPositionsButton: true}) : this.setState({addPositionsButton: false});
    };


    updateDepartment = (department) => {
        console.log(department.target.value);
        this.setState({department: department.target.value});
        this.toggleAddButton();
    };

    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} toggle={this.handleOnClose}>
                    <ModalHeader toggle={this.handleOnClose}>Position</ModalHeader>
                    <ModalBody>
                        <div>
                            {this.state.edit ?
                                (this.state.addPositions ? <AddPosition DepartmentSelected={this.updateDepartment}
                                             AddButton={this.titleUpdated} department={this.props.departments}/> :
                                    <RemovePosition DepartmentSelected={this.updateDepartment}
                                                 AddButton={this.titleUpdated} department={this.props.departments}/>) :
                                <h6><FontAwesomeIcon icon={faCheckCircle}/> {" "} The position with the title
                                    of {this.state.position}, was added to the {this.state.department} department!</h6>
                            }
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {this.state.edit ?
                            <Button color="success" onClick={this.handleOnSave}
                                    disabled={!this.state.addPositionsButton}
                                    active={!this.state.edit}>Add Position</Button>
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

export default PositionsModal;