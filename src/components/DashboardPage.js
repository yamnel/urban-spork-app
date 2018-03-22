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
                        {/*<Col xs="3">*/}
                            <Col xs="3">
                                <Card body outline color="success">
                                    <img style={{width:320,
                                        height:60,
                                        objectFit: "fill"}}
                                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Visual_Studio_2017_logo_and_wordmark.svg/320px-Visual_Studio_2017_logo_and_wordmark.svg.png"
                                         alt="Slack"/>
                                    <br/>
                                    <CardGroup>
                                        <Card body inverse color="success" style={{borderWidth: 2, borderColor: "#000000"}}>
                                            <CardTitle style={{textAlign: "center"}}>36</CardTitle>
                                            <CardText style={{align: "center"}}>Pending Requests</CardText>
                                            <Button outline style={{
                                                borderColor: '#ffffff',
                                                color: "#ffffff",
                                                borderWidth: 3
                                            }}>View</Button>{' '}
                                        </Card>
                                        <Card body inverse color="info" style={{borderWidth: 2, borderColor: "#000000"}}>
                                            <CardTitle style={{textAlign: "center"}}>36</CardTitle>
                                            <CardText style={{textAlign: "center"}}>Active Users</CardText>
                                            <Button outline style={{
                                                borderColor: '#ffffff',
                                                color: "#ffffff",
                                                borderWidth: 3
                                            }}>View</Button>{' '}
                                        </Card>
                                    </CardGroup>
                                </Card>

                            <br/>
                            <Card body outline color="success">
                                <img style={{width:320,
                                                    height:60,
                                                    objectFit: "fill"}}
                                     src="https://camo.githubusercontent.com/fb782da4019ab66eeea35cc9b9ce73b2438b1688/687474703a2f2f646f632e72756c746f722e636f6d2f696d616765732f6769746875622d6c6f676f2e706e67"
                                     alt="Github"/>
                                <br/>
                                <CardGroup>
                                    <Card body inverse color="success" style={{borderWidth: 2, borderColor: "#000000"}}>
                                        <CardTitle style={{textAlign: "center"}}>36</CardTitle>
                                        <CardText style={{align: "center"}}>Pending Requests</CardText>
                                        <Button outline style={{
                                            borderColor: '#ffffff',
                                            color: "#ffffff",
                                            borderWidth: 3
                                        }}>View</Button>{' '}
                                    </Card>
                                    <Card body inverse color="info" style={{borderWidth: 2, borderColor: "#000000"}}>
                                        <CardTitle style={{textAlign: "center"}}>36</CardTitle>
                                        <CardText style={{textAlign: "center"}}>Active Users</CardText>
                                        <Button outline style={{
                                            borderColor: '#ffffff',
                                            color: "#ffffff",
                                            borderWidth: 3
                                        }}>View</Button>{' '}
                                    </Card>
                                </CardGroup>
                            </Card>
                        </Col>

                        <Col xs="3">
                            <Card body outline color="success">
                                <img style={{width:320,
                                    height:60,
                                    objectFit: "fill"}}
                                     src="https://static.brandfolder.com/slack/logo/slack-primary-logo.png"
                                     alt="Slack"/>
                                <br/>
                                <CardGroup>
                                    <Card body inverse color="success" style={{borderWidth: 2, borderColor: "#000000"}}>
                                        <CardTitle style={{textAlign: "center"}}>36</CardTitle>
                                        <CardText style={{align: "center"}}>Pending Requests</CardText>
                                        <Button outline style={{
                                            borderColor: '#ffffff',
                                            color: "#ffffff",
                                            borderWidth: 3
                                        }}>View</Button>{' '}
                                    </Card>
                                    <Card body inverse color="info" style={{borderWidth: 2, borderColor: "#000000"}}>
                                        <CardTitle style={{textAlign: "center"}}>36</CardTitle>
                                        <CardText style={{textAlign: "center"}}>Active Users</CardText>
                                        <Button outline style={{
                                            borderColor: '#ffffff',
                                            color: "#ffffff",
                                            borderWidth: 3
                                        }}>View</Button>{' '}
                                    </Card>
                                </CardGroup>
                            </Card>
                            <br/>
                            <Card body outline color="success">
                                <img style={{width:320,
                                    height:60,
                                    objectFit: "fill"}}
                                     src="https://wac-cdn.atlassian.com/dam/jcr:c20cf6d1-9568-4aba-9a16-dba24e1495de/Atlassian-blue-onecolor@2x-rgb.png"
                                     alt="Atlassian"/>
                                <br/>
                                <CardGroup>
                                    <Card body inverse color="success" style={{borderWidth: 2, borderColor: "#000000"}}>
                                        <CardTitle style={{textAlign: "center"}}>36</CardTitle>
                                        <CardText style={{align: "center"}}>Pending Requests</CardText>
                                        <Button outline style={{
                                            borderColor: '#ffffff',
                                            color: "#ffffff",
                                            borderWidth: 3
                                        }}>View</Button>{' '}
                                    </Card>
                                    <Card body inverse color="info" style={{borderWidth: 2, borderColor: "#000000"}}>
                                        <CardTitle style={{textAlign: "center"}}>36</CardTitle>
                                        <CardText style={{textAlign: "center"}}>Active Users</CardText>
                                        <Button outline style={{
                                            borderColor: '#ffffff',
                                            color: "#ffffff",
                                            borderWidth: 3
                                        }}>View</Button>{' '}
                                    </Card>
                                </CardGroup>
                            </Card>
                        </Col>

                        <Col xs="3">
                            <Card body outline color="success">
                                <img style={{width:320,
                                    height:60,
                                    objectFit: "fill"}}
                                     src="http://ncmedia.azureedge.net/ncmedia/2014/10/Ofc_rgb_Orng166_D.png"
                                     alt="Office"/>
                                <br/>
                                <CardGroup>
                                    <Card body inverse color="success" style={{borderWidth: 2, borderColor: "#000000"}}>
                                        <CardTitle style={{textAlign: "center"}}>36</CardTitle>
                                        <CardText style={{align: "center"}}>Pending Requests</CardText>
                                        <Button outline style={{
                                            borderColor: '#ffffff',
                                            color: "#ffffff",
                                            borderWidth: 3
                                        }}>View</Button>{' '}
                                    </Card>
                                    <Card body inverse color="info" style={{borderWidth: 2, borderColor: "#000000"}}>
                                        <CardTitle style={{textAlign: "center"}}>36</CardTitle>
                                        <CardText style={{textAlign: "center"}}>Active Users</CardText>
                                        <Button outline style={{
                                            borderColor: '#ffffff',
                                            color: "#ffffff",
                                            borderWidth: 3
                                        }}>View</Button>{' '}
                                    </Card>
                                </CardGroup>
                            </Card>
                            <br/>
                            <Card body outline color="success">
                                <img style={{width:320,
                                    height:60,
                                    objectFit: "fill"}}
                                     src="https://cdn.windowsreport.com/wp-content/uploads/2017/12/MSSQL-server.png"
                                     alt="Microsoft SQL Server"/>
                                <br/>
                                <CardGroup>
                                    <Card body inverse color="success" style={{borderWidth: 2, borderColor: "#000000"}}>
                                        <CardTitle style={{textAlign: "center"}}>36</CardTitle>
                                        <CardText style={{align: "center"}}>Pending Requests</CardText>
                                        <Button outline style={{
                                            borderColor: '#ffffff',
                                            color: "#ffffff",
                                            borderWidth: 3
                                        }}>View</Button>{' '}
                                    </Card>
                                    <Card body inverse color="info" style={{borderWidth: 2, borderColor: "#000000"}}>
                                        <CardTitle style={{textAlign: "center"}}>36</CardTitle>
                                        <CardText style={{textAlign: "center"}}>Active Users</CardText>
                                        <Button outline style={{
                                            borderColor: '#ffffff',
                                            color: "#ffffff",
                                            borderWidth: 3
                                        }}>View</Button>{' '}
                                    </Card>
                                </CardGroup>
                            </Card>
                        </Col>

                        <Col>
                            <Card body outline color="success">
                                <img style={{width:320,
                                    height:60,
                                    objectFit: "fill"}}
                                     src="https://media-exp2.licdn.com/media-proxy/ext?w=800&h=800&hash=2A3Chu7stjG7W%2FDiDXTd2pAYY90%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjve87debCh9kARLSQEjQAxdu21Ema0G469fti9fd942JSzcsH5aRUPbhU4hGUB_N88"
                                     alt="Atlassian"/>
                                <br/>
                                <CardGroup>
                                    <Card body inverse color="success" style={{borderWidth: 2, borderColor: "#000000"}}>
                                        <CardTitle style={{textAlign: "center"}}>36</CardTitle>
                                        <CardText style={{align: "center"}}>Pending Requests</CardText>
                                        <Button outline style={{
                                            borderColor: '#ffffff',
                                            color: "#ffffff",
                                            borderWidth: 3
                                        }}>View</Button>{' '}
                                    </Card>
                                    <Card body inverse color="info" style={{borderWidth: 2, borderColor: "#000000"}}>
                                        <CardTitle style={{textAlign: "center"}}>36</CardTitle>
                                        <CardText style={{textAlign: "center"}}>Active Users</CardText>
                                        <Button outline style={{
                                            borderColor: '#ffffff',
                                            color: "#ffffff",
                                            borderWidth: 3
                                        }}>View</Button>{' '}
                                    </Card>
                                </CardGroup>
                            </Card>
                        <br/>
                            <Card body outline color="success">
                                <img style={{width:320,
                                    height:60,
                                    objectFit: "fill"}}
                                     src="https://media-exp2.licdn.com/media-proxy/ext?w=800&h=800&hash=2A3Chu7stjG7W%2FDiDXTd2pAYY90%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjve87debCh9kARLSQEjQAxdu21Ema0G469fti9fd942JSzcsH5aRUPbhU4hGUB_N88"
                                     alt="Atlassian"/>
                                <br/>
                                <CardGroup>
                                    <Card body inverse color="success" style={{borderWidth: 2, borderColor: "#000000"}}>
                                        <CardTitle style={{textAlign: "center"}}>36</CardTitle>
                                        <CardText style={{align: "center"}}>Pending Requests</CardText>
                                        <Button outline style={{
                                            borderColor: '#ffffff',
                                            color: "#ffffff",
                                            borderWidth: 3
                                        }}>View</Button>{' '}
                                    </Card>
                                    <Card body inverse color="info" style={{borderWidth: 2, borderColor: "#000000"}}>
                                        <CardTitle style={{textAlign: "center"}}>36</CardTitle>
                                        <CardText style={{textAlign: "center"}}>Active Users</CardText>
                                        <Button outline style={{
                                            borderColor: '#ffffff',
                                            color: "#ffffff",
                                            borderWidth: 3
                                        }}>View</Button>{' '}
                                    </Card>
                                </CardGroup>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <SystemDetailModal isOpen={this.state.modalIsOpen} toggle={this.toggleModalIsOpen}/>
            </div>
        )
    };
}