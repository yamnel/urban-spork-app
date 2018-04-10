import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {faCheckCircle} from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import AddSystem from "./AddSystem";
import UrbanSporkAPI from "../api/UrbanSporkAPI";


class SystemModal extends React.Component {


    state = {
        edit: true,
        addSystemButton: false,
        system:
            {
                name:"",
                description:"",
                logoURL:"",
            },

        systemName: "",
        systemDescription: "",
        systemLogoURL: "",
    };

    handleOnCancel = () => {
        this.setState({systemName: "", systemLogoURL: "", systemDescription: ""});

        if (!this.state.edit) {
            this.setState({edit: false});
        } else {
            this.props.toggle();
        }
    };

    handleOnClose = () => {
        this.setState({systemName: "", systemLogoURL: "", systemDescription: ""});

        this.props.toggle();
        this.setState({edit: true});

    };

    handleOnSave = () => {

        let newSystem = {
            Name: this.state.systemName,
            Description: this.state.systemDescription,
            Image: this.state.systemLogoURL,
            IsActive: true
        };

        UrbanSporkAPI.addSystem(newSystem)
            .then( (response)=>{
                if(response.status === 200){
                    console.log("thennnnnnnnn", response);
                    this.setState({edit: false})
                    this.setState({systemName: "", systemLogoURL: "", systemDescription: ""});
                }
                else{
                    console.log("elseeeee")
                    this.setState({edit: false})
                    this.setState({systemName: "", systemLogoURL: "", systemDescription: ""});
                }


            })
            .catch(
                alert("Error!!!")
            );

        // this.forceUpdate();

        this.setState({systemName: "", systemLogoURL: "", systemDescription: ""});
    };

    onInputChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
        this.theButtonIsAvail();
    };

    toggleAddButton = (data) => {
        this.setState({system:data});
        this.theButtonIsAvail();
        // this.setState({addDepartmentButton: data.length > 0});

    };

    theButtonIsAvail = () => {

    };

    componentDidUpdate(){
        const fields = this.state.systemLogoURL.length > 0 && this.state.systemDescription.length > 0 && this.state.systemName.length > 0;

        console.log('fields ', fields);
        console.log('butt ', this.state.addSystemButton);


        if(fields && this.state.addSystemButton === false){

            this.setState({addSystemButton: fields})
        }

        if(fields === false && this.state.addSystemButton === true){
            this.setState({addSystemButton: false})
        }

        console.log('componenDidUpdate was called ONCE')
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} toggle={this.handleOnClose}>
                    <ModalHeader toggle={this.handleOnClose}>Add Department</ModalHeader>
                    <ModalBody>
                        <div>
                            {this.state.edit?
                                <AddSystem onInputChange={this.onInputChange}/>:
                                <h6><FontAwesomeIcon icon={faCheckCircle}/> {" "} The {this.state.system.name} department was successfully added!</h6>
                            }
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {this.state.edit?
                            <Button color="success" onClick={this.handleOnSave} disabled={!this.state.addSystemButton}
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

export default SystemModal;