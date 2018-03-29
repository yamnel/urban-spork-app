import React from 'react';
import {connect} from "react-redux";
import {UserManagementPage} from "./UserManagementPage";
import {Card,CardImg,CardBody, Badge, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, CardText, CardTitle, Button, CardGroup, Row, Col, CardColumns} from "reactstrap";
import {faCog} from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import SystemDetailModal from './SystemDetailModal'
import DepartmentsModal from './DepartmentsModal'
import PositionsModal from './PositionsModal'


export default class DashboardPage extends React.Component {

    constructor(props) {
        super(props);
        let data = [
            {
                Name: "Visual Studios",
                PendingRequests: 22,
                TotalUsers: 34,
                Url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Visual_Studio_2017_logo_and_wordmark.svg/320px-Visual_Studio_2017_logo_and_wordmark.svg.png'
            },
            {
                Name: "HipChat",
                PendingRequests: 18,
                TotalUsers: 50,
                Url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Hipchat_Atlassian_logo.png'
            },
            {
                Name: "Slack",
                PendingRequests: 13,
                TotalUsers: 50,
                Url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2000px-Slack_Technologies_Logo.svg.png'
            },
            {
                Name: "GitHub",
                PendingRequests: 18,
                TotalUsers: 50,
                Url: 'data:image/png;base64,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'
            },
            {
                Name: "Git",
                PendingRequests: 12,
                TotalUsers: 34,
                Url: 'http://mumlovestech.com/wp-content/uploads/2013/07/git-hub.png'
            },
            {
                Name: "Slack",
                PendingRequests: 7,
                TotalUsers: 50,
                Url: 'data:image/jpeg;base64,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'
            }
        ];
        this.toggle = this.toggle.bind(this);
        this.state = {data,PositionsModalIsOpen:false, DepartmentsModalIsOpen:false, SystemModalIsOpen: false, dropdownOpen: false};
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
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
        const systems = this.state.data.sort((a, b) => a.PendingRequests < b.PendingRequests).map((_System, index) => (
           <Col key={index} md={4}>
                <Card style=
                          {{
                              backgroundColor:"#FFFFFF",
                              borderWidth: 1,
                              borderColor: "#000000",
                              borderLeftWidth:3,
                              borderBottomWidth: 3,

                          }}>
                    <br/>
                    <CardImg src={_System.Url} width="100%" height="100vw"  className="container-fluid"/>
                    <CardBody >
                        <Col md={12}>
                            <Row>
                                <Col md={6}>
                                    <Card body inverse style=
                                              {{
                                                  borderWidth: 1,
                                                  borderColor: "#28a745",
                                                  borderLeftWidth:3,
                                                  borderBottomWidth: 3
                                              }}>
                                            <CardText style={{textAlign: "center", color: "#000000"}}><b>Pending</b></CardText>
                                            <Button outline color={"success"}>
                                                View{" "} <Badge pill color="success">{_System.PendingRequests}</Badge>
                                            </Button>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card body inverse style=
                                              {{
                                                  borderWidth: 1,
                                                  borderColor: "#17a2b8",
                                                  borderLeftWidth:3,
                                                  borderBottomWidth: 3
                                              }}>
                                        <CardText style={{textAlign: "center", color: "#000000"}}><b>Active</b></CardText>
                                        <Button outline color={"info"} style={{align:"center"}}>
                                            View {" "} <Badge pill color="info">{_System.TotalUsers}</Badge>
                                        </Button>{' '}
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </CardBody>
                </Card>
               <br/>
            </Col>

        ));
        return (
            <div>
                <div>
                    <br/>
                    <Row>
                        <Col>
                        </Col>
                        <Col sm="8">
                            <h1 align="center">Current Systems</h1>
                            <hr width={500} color="#000000"/>
                        </Col>
                        <Col>
                            <br/>
                            <Dropdown direction="right" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle style={{
                                    backgroundColor:"#546c66",
                                }}>
                                    Settings {" "} <FontAwesomeIcon icon={faCog}/>
                                </DropdownToggle>
                                <DropdownMenu style={{
                                    backgroundColor:"#f8fcf7",
                                }}>
                                    <DropdownItem header><b>Options</b></DropdownItem>
                                    <DropdownItem divider />

                                    <DropdownItem onClick={this.openSystemDetailModal}>Add System</DropdownItem>
                                    <DropdownItem onClick={this.openDepartmentsModal}>Add Department</DropdownItem>
                                    <DropdownItem onClick={this.openPositionsModal}>Add Position</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                        <br/>
                    </Row>
                </div>
                <div>
                    <Row>

                            {systems}


                    </Row>
                </div>
                <PositionsModal isOpen={this.state.PositionsModalIsOpen} toggle={this.togglePositionsModal}/>
                <DepartmentsModal isOpen={this.state.DepartmentsModalIsOpen} toggle={this.toggleDepartmentsModal}/>
                <SystemDetailModal isOpen={this.state.SystemModalIsOpen} toggle={this.toggleModalIsOpen}/>
            </div>
        )
    };
}