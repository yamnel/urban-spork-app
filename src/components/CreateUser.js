import React from 'react';
import UrbanSporkAPI from "../api/UrbanSporkAPI";
import {
    Button,
    Col,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormGroup,
    Input,
    Label,
    ModalBody,
    ModalFooter,
    UncontrolledDropdown
} from "reactstrap";
import PermissionMultiselectComponent from "./PermissionMultiselectComponent";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/fontawesome-free-solid/index";


const AccessTemplates = (props) => (
    <UncontrolledDropdown direction={'right'}>
        {/*in case we need to disable it*/}
        <DropdownToggle disabled={false}>
            <FontAwesomeIcon icon={faCog}/>
        </DropdownToggle>

        <DropdownMenu>
            <DropdownItem header>Templates</DropdownItem>

            {/* need to map the props.Templates here */}


            {/*<DropdownItem disabled={props.isAdmin}>Make Admin</DropdownItem>*/}
            {/*<DropdownItem>Off-Board Report</DropdownItem>*/}
            {/*<DropdownItem>Deactivate</DropdownItem>*/}
        </DropdownMenu>
    </UncontrolledDropdown>
);


const Header = (props) => (
    <div className={'modal-header'} style={{display: 'flex', justifyContent: 'space-between'}}>
        <Button color={'danger'} onClick={props.handleOnBack}>Back</Button>

        {/*<h5 className={'modal-title'}>*/}
        {/*{props.firstName} {props.lastName}*/}
        {/*</h5>*/}
        {
            // need to pass props.templates
            <AccessTemplates/>
        }
    </div>
);


export default class CreateUser extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        position: '',
        department: '',
        email: '',

        selectedPermissions: [],
    };


    styles = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    };

    handleOnCancel = () => this.props.history.push("/users");

    handleOnChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };
    handleOnUserCreation = () => {
        const payload = {
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            Email: this.state.email,
            Position: this.state.position,
            Department: this.state.department,
            IsAdmin: false,
            IsActive: true,

        };

        UrbanSporkAPI.createUser(payload).then(() => this.props.history.push("/users"))
    };

    render() {
        return (
            <div>

                <div style={this.styles}>
                    <h1>Create User</h1>
                </div>

                <Header handleOnBack={this.handleOnCancel}/>

                <ModalBody>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <div>
                            <Form style={{width: "480px"}}>
                                <FormGroup row>
                                    <Label color={"muted"} sm={"3"} for={"firstName"}>
                                        First Name:
                                    </Label>
                                    <Col sm={20}>
                                        <Input id={"firstName"} name={"firstName"}
                                               onChange={e => this.handleOnChange(e)}/>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label color={"muted"} sm={"3"} for={"lastName"}>
                                        Last Name:
                                    </Label>
                                    <Col sm={20}>
                                        <Input required id={"lastName"} name={"lastName"}
                                               onChange={e => this.handleOnChange(e)}/>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="department" sm={"3"}>
                                        Department:
                                    </Label>

                                    <Col sm={20}>
                                        {/* Hard Coded permissions... I love it!*/}
                                        <Input type="select" name="department" id="department"
                                               onChange={e => this.handleOnChange(e)}>
                                            <option></option>
                                            <option>Warehouse</option>
                                            <option>Marketing</option>
                                            <option>Human Resource</option>
                                            <option>Complaints</option>
                                        </Input>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="position" sm={"3"}>
                                        Title:
                                    </Label>

                                    <Col sm={20}>
                                        <Input type="text" name="position" id="position"
                                               onChange={e => this.handleOnChange(e)}/>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="email" sm={"3"}>
                                        Email:
                                    </Label>

                                    <Col sm={20}>
                                        <Input type="email" name="email" id="email"
                                               onChange={e => this.handleOnChange(e)}/>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>

                        <PermissionMultiselectComponent
                            selectedPermissions={this.state.selectedPermissions}
                            setPermissions={(selectedPermissions) => this.setState({selectedPermissions})}
                        />


                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={this.handleOnUserCreation} color={'success'}>Create User</Button>
                    {' '}
                    <Button onClick={this.handleOnCancel} color={'secondary'}>Cancel</Button>
                </ModalFooter>
            </div>
        )
    }
}
