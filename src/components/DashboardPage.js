import React from 'react';
import {connect} from "react-redux";
import {UserManagementPage} from "./UserManagementPage";
import {Card, CardImg, Badge, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, CardText, CardTitle, Button, CardGroup, Row, Col, CardColumns} from "reactstrap";
import {faCog} from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from "@fortawesome/react-fontawesome/src/components/FontAwesomeIcon";
import SystemDetailModal from './SystemDetailModal'

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
                Name: "Slack",
                PendingRequests: 7,
                TotalUsers: 50,
                Url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2000px-Slack_Technologies_Logo.svg.png'
            },
            {
                Name: "GitHub",
                PendingRequests: 18,
                TotalUsers: 50,
                Url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Hipchat_Atlassian_logo.png'
            }
        ];


        this.toggle = this.toggle.bind(this);
        this.state = {data, modalIsOpen: false, dropdownOpen: false};
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }



    openSystemDetailModal = () => {
        // this.setUserData(selectedUserData.id);
        this.toggleModalIsOpen();

        //proof that is stays in the old state
        // console.log(`The new state field selectedUserId is ${this.state.selectedUserId}`);
    };

    toggleModalIsOpen = () => this.setState(() => {
        return ({modalIsOpen: !this.state.modalIsOpen});
    });

    render() {
        const systems = this.state.data.sort((a, b) => a.PendingRequests < b.PendingRequests).map((_System, index) => (
            <Col key={index} md={4}>

                <Card  body inverse style=
                    {{
                        backgroundColor:"#f2f2f2",
                        borderWidth: 1,
                        borderColor: "#000000",
                        borderLeftWidth:3,
                        borderBottomWidth: 3,

                    }}>
                    <img src={_System.Url} width="250px" height="60px"/>
                    <br/>
                    <Col md={12}>
                        <Row>
                            <Col md={6}>
                                <Card body style=
                                    {{
                                        borderWidth: 1,
                                        borderColor: "#28a745",
                                        borderLeftWidth:3,
                                        borderBottomWidth: 3
                                    }}>
                                    <CardText style={{textAlign: "center", color: "#000000"}}><b>Pending</b></CardText>
                                    <Button outline color={"success"}>
                                        View{" "} <Badge pill color="success">{_System.PendingRequests}</Badge>
                                    </Button>{' '}
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card body style=
                                    {{
                                        borderWidth: 1,
                                        borderColor: "#17a2b8",
                                        borderLeftWidth:3,
                                        borderBottomWidth: 3
                                    }}>

                                    <CardText style={{textAlign: "center", color: "#000000"}}><b>Active Users</b></CardText>
                                    <Button outline color={"info"}>
                                        View {" "} <Badge pill color="info">{_System.TotalUsers}</Badge>
                                    </Button>{' '}
                                </Card>
                            </Col>
                        </Row>
                    </Col>
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
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle backgroundcolor="success">
                                    Settings {" "} <FontAwesomeIcon icon={faCog}/>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header><b>Options</b>></DropdownItem>
                                    <DropdownItem onClick={this.openSystemDetailModal}>Add System</DropdownItem>
                                    <DropdownItem>Add Department</DropdownItem>
                                    <DropdownItem>Add Position</DropdownItem>
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

                <SystemDetailModal isOpen={this.state.modalIsOpen} toggle={this.toggleModalIsOpen}/>
            </div>
        )
    };
}