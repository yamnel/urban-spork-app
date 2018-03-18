import React from 'react';
import {Col, Form, FormGroup, Input, Label} from 'reactstrap';


export default class EditUserDetailComponent extends React.Component {
    state = {...this.props.userData};

    // editedData = {...this.state};

    render() {
        return(
            <div>
                <Form>
                    {/*{console.log(this.state)}*/}
                    <FormGroup row>
                        <Label color={"muted"} sm={"3"} for={"firstName"}>
                            First Name:
                        </Label>
                        <Col sm={20}>
                            <Input
                                id={"firstName"}
                                   onChange={(e) => {
                                       // this.setState({firstName: e.target.value})
                                       this.props.onDataChange({firstName: e.target.value})
                            }}
                                defaultValue={this.state.firstName}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label color={"muted"} sm={"3"} for={"lastName"}>
                            Last Name:
                        </Label>
                        <Col sm={20}>
                            <Input
                                id={"lastName"}
                                defaultValue={this.state.lastName}
                                onChange={(e) => {
                                    // this.setState({lastName: e.target.value})
                                    this.props.onDataChange({lastName: e.target.value})
                                }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="title" sm={"3"}>
                            Title:
                        </Label>

                        <Col sm={20}>
                            <Input
                                type="text"
                                name="tile"
                                id="tile"
                                defaultValue={this.state.position}
                                onChange={(e) => {
                                    // this.setState({position: e.target.value})
                                    this.props.onDataChange({position: e.target.value})
                                }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="department" sm={"3"}>
                            Department:
                        </Label>

                        <Col sm={20}>
                            <Input
                                type="text"
                                name="department"
                                id="department"
                                defaultValue={this.state.department}
                                onChange={(e) => {
                                    // this.setState({department: e.target.value})
                                    this.props.onDataChange({department: e.target.value})
                                }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="email" sm={"3"}>
                            Email:
                        </Label>

                        <Col sm={20}>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                defaultValue={this.state.email}
                                onChange={(e) => {
                                    // this.setState({email: e.target.value})
                                    this.props.onDataChange({email: e.target.value})                                }}
                            />
                        </Col>
                    </FormGroup>
                </Form>

            </div>
        )
    }

}



