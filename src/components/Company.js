import React from 'react';
import {Badge, Button, Card, CardBody, CardText, CardTitle, Row, Col} from 'reactstrap';
import {faUniversalAccess, faBuilding, faCogs, faIdBadge} from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import UrbanSporkAPI from "../api/UrbanSporkAPI";
import DepartmentsModal from './DepartmentsModal'
import PositionsModal from './PositionsModal'
import SystemModal from "./SystemModal";
import {faTasks} from "@fortawesome/fontawesome-free-solid/index.es";

export default class Company extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            addPositions: true,
            addDepartment: true,
            PositionsModalIsOpen:false,
            DepartmentsModalIsOpen:false,
            SystemModalIsOpen: false,
            departments: []
        };
    }

    getDepartments = () => {
        return  UrbanSporkAPI.getDepartments();
    };

    openAddPositionsModal = () => {

        var payload = this.getDepartments();

        payload.then(data => {
            this.setState({departments: data}),
            this.setState({addPositions: true})
        }).then(() => this.togglePositionsModal())
    };

    openRemovePositionsModal = () => {

        console.log("Get Departments was called");

        var payload = this.getDepartments();


        payload.then(data => {
            this.setState({departments: data}),
            this.setState({addPositions: false})
        }).then(() =>

            this.togglePositionsModal()
        )
    };

    togglePositionsModal = () => this.setState(() => {
        return ({PositionsModalIsOpen: !this.state.PositionsModalIsOpen});
    });

    openDepartmentsModal = () => {
        var payload = this.getDepartments();

        payload.then(data => {
            this.setState({departments: data})
        }).then(() => this.toggleDepartmentsModal())
    };

    toggleDepartmentsModal = () => this.setState(() => {
        return ({DepartmentsModalIsOpen: !this.state.DepartmentsModalIsOpen});
    });

    openSystemDetailModal = () => {

        // this.setUserData(selectedUserData.id);
        this.toggleModalIsOpen();

        //proof that is stays in the old state
        // console.log(`The new state field selectedUserId is ${this.state.selectedUserId}`);
    };

    toggleModalIsOpen = () => this.setState(() => {
        return ({SystemModalIsOpen: !this.state.SystemModalIsOpen});
    });

    styles = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: 100
    };

    render() {

        return(
            <div>
                <div >
                    <Row style={this.styles}>
                        <Col sm="8">
                            <h1 align="center">Company Management</h1>
                            <hr width={500} color="#000000"/>
                        </Col>
                    </Row>
                    <Row style =
                            {{
                                alignContent: "center"
                            }}>
                        {/*<Col/>*/}
                        <Col sm={3}>
                            <Card body className="text-center"
                                  style=
                                      {{
                                          borderWidth: 1,
                                          borderColor: "#28a745",
                                          borderLeftWidth:3,
                                          borderBottomWidth: 3
                                      }}>

                                <CardBody>

                                    <FontAwesomeIcon icon={faCogs} size="10x"
                                                     style={{
                                                         color: "#28a745"
                                                     }}/>

                                </CardBody>

                                <CardTitle>Manage Systems</CardTitle>

                                <CardBody>
                                    <Col md={12}>
                                        <Row>
                                            <Col md={6}>
                                   <span>
                                       <Button color={"success"}  onClick={this.openSystemDetailModal}>Add New</Button>
                                   </span>
                                            </Col>
                                            <Col md={6}>
                                      <span>
                                          <Button color={"danger"}  onClick={this.openSystemDetailModal}>Remove</Button>
                                      </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </CardBody>

                            </Card>
                        </Col>

                        <Col sm={3}>
                            <Card body className="text-center"
                                  style=
                                      {{
                                          borderWidth: 1,
                                          borderColor: "#9933ff",
                                          borderLeftWidth:3,
                                          borderBottomWidth: 3
                                      }}>

                                <CardBody>

                                    <FontAwesomeIcon icon={faBuilding}  size="10x"
                                                     style={{
                                                         color: "#9933ff"
                                                     }}/>

                                </CardBody>

                                <CardTitle>Manage Departments</CardTitle>

                                <CardBody>
                                    <Col md={12}>
                                        <Row>
                                            <Col md={6}>
                                   <span>
                                       <Button color={"success"}  onClick={this.openDepartmentsModal}>Add New</Button>
                                   </span>
                                            </Col>
                                            <Col md={6}>
                                      <span>
                                          <Button color={"danger"}  onClick={this.openDepartmentsModal}>Remove</Button>
                                      </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </CardBody>

                            </Card>
                        </Col>

                        <Col sm={3}>
                            <Card body  className="text-center"
                                  style=
                                      {{
                                          borderWidth: 1,
                                          borderColor: "#0066cc",
                                          borderLeftWidth:3,
                                          borderBottomWidth: 3
                                      }}>

                                <CardBody>

                                    <FontAwesomeIcon icon={faIdBadge}  size="10x"
                                                     style={{
                                                         color: "#0066cc"
                                                     }}/>

                                </CardBody>

                                <CardTitle>Manage Positions</CardTitle>

                                <CardBody>
                                    <Col md={12}>
                                        <Row>
                                            <Col md={6}>
                                   <span>
                                       <Button color={"success"}  onClick={this.openAddPositionsModal}>Add New</Button>
                                   </span>
                                            </Col>
                                            <Col md={6}>
                                      <span>
                                          <Button color={"danger"}  onClick={this.openRemovePositionsModal}>Remove</Button>
                                      </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </CardBody>

                            </Card>
                        </Col>

                        <Col sm={3}>
                            <Card body className="text-center"
                                  style=
                                      {{
                                          borderWidth: 1,
                                          borderColor: "#00bdff",
                                          borderLeftWidth:3,
                                          borderBottomWidth: 3
                                      }}>

                                <CardBody>

                                    <FontAwesomeIcon icon={faTasks}  size="10x"
                                                     style={{
                                                         color: "#00bdff"
                                                     }}/>

                                </CardBody>

                                <CardTitle>Manage Templates</CardTitle>

                                <CardBody>
                                    <Col md={12}>
                                        <Row>
                                            <Col md={6}>
                                   <span>
                                       <Button color={"success"}  onClick={this.openDepartmentsModal}>Add New</Button>
                                   </span>
                                            </Col>
                                            <Col md={6}>
                                      <span>
                                          <Button color={"danger"}  onClick={this.openDepartmentsModal}>Remove</Button>
                                      </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </CardBody>

                            </Card>
                        </Col>
                    </Row>
                </div>

                <PositionsModal departments={this.state.departments}
                                isOpen={this.state.PositionsModalIsOpen}
                                toggle={this.togglePositionsModal}
                                addPosition={this.state.addPositions}/>

                <DepartmentsModal isOpen={this.state.DepartmentsModalIsOpen}
                                  toggle={this.toggleDepartmentsModal}
                                  department={this.state.departments}
                                  addDepartment={this.state.addDepartment}/>

                <SystemModal isOpen={this.state.SystemModalIsOpen} toggle={this.toggleModalIsOpen}/>
            </div>
        )
    }
}