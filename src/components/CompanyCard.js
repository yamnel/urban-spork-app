import React from 'react';
import {Button, Card, CardBody,CardTitle, Row, Col} from 'reactstrap';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

export default class CompanyCard extends React.Component{

    render() {
        return (
            <Card body className="text-center"
                  style=
                      {{
                          borderWidth: 1,
                          borderColor: this.props.color,
                          borderLeftWidth: 3,
                          borderBottomWidth: 3
                      }}>

                <CardBody>

                    <FontAwesomeIcon icon={this.props.fontAwesomeIcon} size="10x"
                                     style={{
                                         color: this.props.color
                                     }}/>

                </CardBody>

                <CardTitle>{this.props.cardTitle}</CardTitle>

                <CardBody>
                    <Col md={12}>
                        <Row>
                            <Col md={6}>
                                <span>
                                <Button color={"success"} onClick={this.props.addButtonOnClick}>Add New</Button>
                                </span>
                            </Col>
                            <Col md={6}>
                                <span>
                                <Button color={"danger"} onClick={this.props.removeButtonOnClick}>Remove</Button>
                                </span>
                            </Col>
                        </Row>
                    </Col>
                </CardBody>

            </Card>
        )
    }
}