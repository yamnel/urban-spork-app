import React from 'react';
import {Col, Form, FormGroup, Input, Label} from 'reactstrap';


export default class EditUserDetailComponent extends React.Component {
    state = {...this.props.userData};




    render() {
        return(
            <div>
                {console.log(this.state)}
                <Form>
                    <FormGroup row>
                        <Label color={"muted"} sm={"3"} for={"firstName"}>
                            First Name:
                        </Label>
                        <Col sm={20}>
                            <Input id={"firstName"} defaultValue={this.state.firstName}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="lastName" sm={"3"}>
                            Last Name:
                        </Label>

                        <Col sm={20}>
                            <Input type="text" name="lastName" id="lastName" defaultValue={this.state.lastName}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="email" sm={"3"}>
                            Email:
                        </Label>

                        <Col sm={20}>
                            <Input  type="email" name="email" id="email" defaultValue={this.state.email}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="department" sm={"3"}>
                            Department:
                        </Label>

                        <Col sm={20}>
                            <Input type="text" name="department" id="department" defaultValue={this.state.department}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="position" sm={"3"}>
                            Position:
                        </Label>

                        <Col sm={20}>
                            <Input type="select" name="position" id="position" defaultValue={this.state.position}/>
                        </Col>
                    </FormGroup>
                </Form>

            </div>
        )
    }

}



