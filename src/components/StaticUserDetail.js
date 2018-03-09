import React from 'react';
import {Col, Form, FormGroup, Input, Label} from 'reactstrap';


export default (props) => (
    <div>
        <Form>
            <FormGroup row>
                <Label color={"muted"} sm={"3"} for={"firstName"}>
                    First Name:
                </Label>
                <Col sm={20}>
                    <Input id={"firstName"} plaintext>{props.userData.firstName}</Input>
                </Col>
            </FormGroup>


            <FormGroup row>
                <Label color={"muted"} sm={"3"} for={"lastName"}>
                    Last Name:
                </Label>
                <Col sm={20}>
                    <Input id={"lastName"} plaintext>{props.userData.lastName}</Input>
                </Col>
            </FormGroup>


            <FormGroup row>
                <Label for="email" sm={"3"}>
                    Email:
                </Label>

                <Col sm={20}>
                    <Input plaintext type="email" name="email" id="email">{props.userData.email}</Input>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="department" sm={"3"}>
                    Department:
                </Label>

                <Col sm={20}>
                    <Input plaintext type="text" name="department" id="department">{props.userData.department}</Input>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="title" sm={"3"}>
                    Title:
                </Label>

                <Col sm={20}>
                    <Input plaintext type="select" name="title" id="title">{props.userData.position}</Input>
                </Col>
            </FormGroup>
        </Form>
    </div>
)





