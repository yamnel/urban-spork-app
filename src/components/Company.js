import React from 'react';
import {Card, CardBody, CardText, CardTitle, Row, Col} from 'reactstrap';
import {faUniversalAccess, faBuilding, faCogs} from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import SystemDetailModal from './SystemDetailModal'
import DepartmentsModal from './DepartmentsModal'
import PositionsModal from './PositionsModal'

export default class Company extends React.Component {

    constructor(props) {
        super(props);

        this.state = {PositionsModalIsOpen:false, DepartmentsModalIsOpen:false, SystemModalIsOpen: false};
    }

    openPositionsModal = () => {
        this.togglePositionsModal();
    };

    togglePositionsModal = () => this.setState(() => {
        return ({PositionsModalIsOpen: !this.state.PositionsModalIsOpen});
    });

    openDepartmentsModal = () => {
        this.toggleDepartmentsModal();
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

    render() {

        return(
            <div>
                <div style={{alignContent: "center"}}>
                    <Row style =
                             {{
                                 height: 100,
                                 alignContent: "center"
                             }}>
                        <Col sm="8">
                            <h1 align="center">Company Management</h1>
                            <hr width={500} color="#000000"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <Card body onClick={this.openSystemDetailModal} className="text-center"
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

                                <CardText>Click here to manage Systems.</CardText>

                            </Card>
                        </Col>

                        <Col sm={3}>
                            <Card body onClick={this.openDepartmentsModal} className="text-center"
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

                                <CardText>Click here to manage Departments.</CardText>

                            </Card>
                        </Col>

                        <Col sm={3}>
                            <Card body onClick={this.openPositionsModal} className="text-center"
                                  style=
                                      {{
                                          borderWidth: 1,
                                          borderColor: "#0066cc",
                                          borderLeftWidth:3,
                                          borderBottomWidth: 3
                                      }}>

                                <CardBody>

                                    <FontAwesomeIcon icon={faUniversalAccess}  size="10x"
                                                     style={{
                                                         color: "#0066cc"
                                                     }}/>

                                </CardBody>

                                <CardTitle>Manage Positions</CardTitle>

                                <CardText>Click here to manage Positions.</CardText>

                            </Card>
                        </Col>
                    </Row>
                </div>

                <PositionsModal isOpen={this.state.PositionsModalIsOpen}
                                toggle={this.togglePositionsModal}/>

                <DepartmentsModal isOpen={this.state.DepartmentsModalIsOpen} toggle={this.toggleDepartmentsModal}/>

                <SystemDetailModal isOpen={this.state.SystemModalIsOpen} toggle={this.toggleModalIsOpen}/>
            </div>
        )
    }
}