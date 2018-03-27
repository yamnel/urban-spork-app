import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {faCheckCircle} from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from "@fortawesome/react-fontawesome/src/components/FontAwesomeIcon";
import AddPosition from "./AddPosition";
import UrbanSporkAPI from "../api/UrbanSporkAPI";


class PositionsModal extends React.Component {


    state = {
        edit: true,
        addPositionsButton: false,
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
        // UrbanSporkAPI.addDepartment();
        this.setState({edit: false});
    };

    toggleAddButton = (data) => {
        this.setState({department:data});
        data.length > 0 ? this.setState({addPositionsButton: true}): this.setState({addPositionsButton: false});

    };


    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} toggle={this.handleOnClose}>
                    <ModalHeader toggle={this.handleOnClose}>Add Position</ModalHeader>
                    <ModalBody>
                        <div>
                            {this.state.edit?
                                <AddPosition AddButton = {this.toggleAddButton}/>:
                                <h6><FontAwesomeIcon icon={faCheckCircle}/> {" "} The {this.state.department} department was successfully added!</h6>
                            }
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {this.state.edit?
                            <Button color="success" onClick={this.handleOnSave} disabled={!this.state.addPositionsButton}
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

export default PositionsModal;