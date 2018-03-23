import React from 'react';
import {connect} from "react-redux";
import {UserManagementPage} from "./UserManagementPage";
import {Card, CardText, CardTitle, Button, CardGroup, Row, Col, CardColumns} from "reactstrap";
import {faKey} from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from "@fortawesome/react-fontawesome/src/components/FontAwesomeIcon";
import SystemDetailModal from './SystemDetailModal'

export default class DashboardPage extends React.Component {

    state = {
        modalIsOpen: false
    };

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
        return (
            <div>
                <div>
                    <br/>
                    <Row>
                        <Col/>
                        <Col sm="8">
                            <h1 align="center">Most Commonly Used Systems</h1>
                        </Col>
                        <Col>
                            <br/>
                            <Button color="info" onClick={this.openSystemDetailModal}>Add A System
                                <FontAwesomeIcon icon={faKey}/></Button>
                        </Col>
                        <br/>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col xs="3">
                            <Card body inverse style=
                                {{
                                    backgroundColor:"#f9f9f9",
                                    borderWidth: 1,
                                    borderColor: "#000000",
                                    borderLeftWidth:3,
                                    borderBottomWidth: 3
                                }}>
                                <img style=
                                     {{
                                         width:320,
                                         height:60,
                                         objectFit: "fill"
                                     }}
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Visual_Studio_2017_logo_and_wordmark.svg/320px-Visual_Studio_2017_logo_and_wordmark.svg.png"
                                     alt="Slack"/>
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
                                                    <CardTitle style={{textAlign: "center", color: "#000000"}}>15</CardTitle>
                                                    <CardText style={{textAlign: "center", color: "#000000"}}>Pending</CardText>
                                                    <Button color={"success"}>View</Button>{' '}
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
                                                    <CardTitle style={{textAlign: "center", color: "#000000"}}>23</CardTitle>
                                                    <CardText style={{textAlign: "center", color: "#000000"}}>Active Users</CardText>
                                                    <Button color={"info"}>View</Button>{' '}
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Card>
                            <br/>
                            <Card body inverse style=
                                {{
                                    backgroundColor:"#f9f9f9",
                                    borderWidth: 1,
                                    borderColor: "#000000",
                                    borderLeftWidth:3,
                                    borderBottomWidth: 3
                                }}>
                                <img style=
                                         {{
                                             width:320,
                                             height:60,
                                             objectFit: "fill"
                                         }}
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2000px-Slack_Technologies_Logo.svg.png"
                                     alt="Slack"/>
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
                                                <CardTitle style={{textAlign: "center", color: "#000000"}}>15</CardTitle>
                                                <CardText style={{textAlign: "center", color: "#000000"}}>Pending</CardText>
                                                <Button color={"success"}>View</Button>{' '}
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
                                                <CardTitle style={{textAlign: "center", color: "#000000"}}>23</CardTitle>
                                                <CardText style={{textAlign: "center", color: "#000000"}}>Active Users</CardText>
                                                <Button color={"info"}>View</Button>{' '}
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Card>
                        </Col>

                        <Col xs="3">
                            <Card body inverse style=
                                {{
                                    backgroundColor:"#f9f9f9",
                                    borderWidth: 1,
                                    borderColor: "#000000",
                                    borderLeftWidth:3,
                                    borderBottomWidth: 3
                                }}>
                                <img style=
                                         {{
                                             width:320,
                                             height:60,
                                             objectFit: "fill"
                                         }}
                                     src="https://19386-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2017/10/github-logo-1.png"
                                     alt="Slack"/>
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
                                                <CardTitle style={{textAlign: "center", color: "#000000"}}>15</CardTitle>
                                                <CardText style={{textAlign: "center", color: "#000000"}}>Pending</CardText>
                                                <Button color={"success"}>View</Button>{' '}
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
                                                <CardTitle style={{textAlign: "center", color: "#000000"}}>23</CardTitle>
                                                <CardText style={{textAlign: "center", color: "#000000"}}>Active Users</CardText>
                                                <Button color={"info"}>View</Button>{' '}
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Card>
                            <br/>
                            <Card body inverse style=
                                {{
                                    backgroundColor:"#f9f9f9",
                                    borderWidth: 1,
                                    borderColor: "#000000",
                                    borderLeftWidth:3,
                                    borderBottomWidth: 3
                                }}>
                                <img style=
                                         {{
                                             width:320,
                                             height:60,
                                             objectFit: "fill"
                                         }}
                                     src="http://4.bp.blogspot.com/-HED88Q-SAEg/UAbb_w1DVxI/AAAAAAAAItU/miEPtzBgw80/s1600/Microsoft+Office+logo+2012.png"
                                     alt="Slack"/>
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
                                                <CardTitle style={{textAlign: "center", color: "#000000"}}>15</CardTitle>
                                                <CardText style={{textAlign: "center", color: "#000000"}}>Pending</CardText>
                                                <Button color={"success"}>View</Button>{' '}
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
                                                <CardTitle style={{textAlign: "center", color: "#000000"}}>23</CardTitle>
                                                <CardText style={{textAlign: "center", color: "#000000"}}>Active Users</CardText>
                                                <Button color={"info"}>View</Button>{' '}
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Card>
                        </Col>

                        <Col xs="3">
                            <Card body inverse style=
                                {{
                                    backgroundColor:"#f9f9f9",
                                    borderWidth: 1,
                                    borderColor: "#000000",
                                    borderLeftWidth:3,
                                    borderBottomWidth: 3
                                }}>
                                <img style=
                                         {{
                                             width:320,
                                             height:60,
                                             objectFit: "fill"
                                         }}
                                     src="https://www.fullstackpython.com/img/logos/jenkins.png"
                                     alt="Slack"/>
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
                                                <CardTitle style={{textAlign: "center", color: "#000000"}}>15</CardTitle>
                                                <CardText style={{textAlign: "center", color: "#000000"}}>Pending</CardText>
                                                <Button color={"success"}>View</Button>{' '}
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
                                                <CardTitle style={{textAlign: "center", color: "#000000"}}>23</CardTitle>
                                                <CardText style={{textAlign: "center", color: "#000000"}}>Active Users</CardText>
                                                <Button color={"info"}>View</Button>{' '}
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Card>
                            <br/>
                            <Card body inverse style=
                                {{
                                    backgroundColor:"#f9f9f9",
                                    borderWidth: 1,
                                    borderColor: "#000000",
                                    borderLeftWidth:3,
                                    borderBottomWidth: 3
                                }}>
                                <img style=
                                         {{
                                             width:320,
                                             height:60,
                                             objectFit: "fill"
                                         }}
                                     src="https://wac-cdn.atlassian.com/dam/jcr:c20cf6d1-9568-4aba-9a16-dba24e1495de/Atlassian-blue-onecolor@2x-rgb.png"
                                     alt="Slack"/>
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
                                                <CardTitle style={{textAlign: "center", color: "#000000"}}>15</CardTitle>
                                                <CardText style={{textAlign: "center", color: "#000000"}}>Pending</CardText>
                                                <Button color={"success"}>View</Button>{' '}
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
                                                <CardTitle style={{textAlign: "center", color: "#000000"}}>23</CardTitle>
                                                <CardText style={{textAlign: "center", color: "#000000"}}>Active Users</CardText>
                                                <Button color={"info"}>View</Button>{' '}
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Card>
                        </Col>

                        <Col xs="3">
                            <Card body inverse style=
                                {{
                                    backgroundColor:"#f9f9f9",
                                    borderWidth: 1,
                                    borderColor: "#000000",
                                    borderLeftWidth:3,
                                    borderBottomWidth: 3
                                }}>
                                <img style=
                                         {{
                                             width:320,
                                             height:60,
                                             objectFit: "fill"
                                         }}
                                src="https://digitalscientists.com/system/images/1465/original/logo-hockeyapp-wide.png"
                                 alt="Slack"/>
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
                                                <CardTitle style={{textAlign: "center", color: "#000000"}}>15</CardTitle>
                                                <CardText style={{textAlign: "center", color: "#000000"}}>Pending</CardText>
                                                <Button color={"success"}>View</Button>{' '}
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
                                                <CardTitle style={{textAlign: "center", color: "#000000"}}>23</CardTitle>
                                                <CardText style={{textAlign: "center", color: "#000000"}}>Active Users</CardText>
                                                <Button color={"info"}>View</Button>{' '}
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Card>
                            <br/>
                            <Card body inverse style=
                                {{
                                    backgroundColor:"#f9f9f9",
                                    borderWidth: 1,
                                    borderColor: "#000000",
                                    borderLeftWidth:3,
                                    borderBottomWidth: 3
                                }}>
                                <img style=
                                         {{
                                             width:320,
                                             height:60,
                                             objectFit: "fill"
                                         }}
                                     src="https://cdn-images-1.medium.com/max/1600/1*AD9ZSLXKAhZ-_WomszsmPg.png"
                                     alt="Slack"/>
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
                                                <CardTitle style={{textAlign: "center", color: "#000000"}}>15</CardTitle>
                                                <CardText style={{textAlign: "center", color: "#000000"}}>Pending</CardText>
                                                <Button color={"success"}>View</Button>{' '}
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
                                                <CardTitle style={{textAlign: "center", color: "#000000"}}>23</CardTitle>
                                                <CardText style={{textAlign: "center", color: "#000000"}}>Active Users</CardText>
                                                <Button color={"info"}>View</Button>{' '}
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <SystemDetailModal isOpen={this.state.modalIsOpen} toggle={this.toggleModalIsOpen}/>
            </div>
        )
    };
}