import React from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from 'reactstrap';


const renderPermissionList = (permissionList) => {
    Object.keys(permissionList).map((permission, i) => {
        if (permissionList[permission].permissionStatus !== 'Revoked') {
            return <option key={i} value={i} id={permission}>{permissionList[permission].permissionName}</option>;
        }
    })
};



const StaticUserDetail = (props) => (
    <div>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            {/*
            Left Side of the modal, is the User Info
            */}
            <Form>
                <FormGroup row>
                    <Col md={20}>
                        <Label style={{whiteSpace: 'nowrap'}} color={"muted"} sm={'3'} for={"firstName"}>First
                            Name:</Label>
                    </Col>

                    <Col md={"auto"}>
                        <Input id={"firstName"} plaintext>{props.userData.firstName}</Input>
                    </Col>
                </FormGroup>


                <FormGroup row>
                    <Col md={20}>
                        <Label style={{whiteSpace: 'nowrap'}} color={"muted"} sm={'3'} for={"lastName"}>Last
                            Name:</Label>
                    </Col>

                    <Col md={"auto"}>
                        <Input id={"lastName"} plaintext>{props.userData.lastName}</Input>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col md={20}>
                        <Label for="title" sm={'3'}>Title:</Label>
                    </Col>

                    <Col md={"auto"}>
                        <Input style={{paddingLeft: "45px"}} plaintext type="text" name="title"
                               id="title">{props.userData.position}</Input>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col md={20}>
                        <Label style={{paddingRight: "5px"}} for="department" sm={'3'}>Department:</Label>
                    </Col>

                    <Col md={"auto"}>
                        <Input plaintext type="text" name="department"
                               id="department">{props.userData.department}</Input>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={20}>
                        <Label for="email" sm={'3'}>Email:</Label>
                    </Col>

                    <Col sm={"auto"}>
                        <Input plaintext type="email" name="email" id="email">{props.userData.email}</Input>
                    </Col>
                </FormGroup>

            </Form>
            {/*
            Right Side of the modal, is the User Permissions
            */}
            <div>
                <Label for="permissions">Permissions:</Label>
                <Input type="select" name="permissions" id="permissions" multiple>
                    {/*
                        This is a jumble of references, but the function I created above doesn't work on it...
                        so I am leaving it like this.
                    */}
                    {
                        Object.keys(props.userData.permissionList).map((permission, i) => {
                            if (props.userData.permissionList[permission].permissionStatus !== 'Revoked') {
                                return <option key={i} value={i} id={permission}>{props.userData.permissionList[permission].permissionName}</option>;
                            }
                        })
                    }
                    </Input>

                <Button color="danger" style={{marginTop: "20px"}}>Edit Permissions</Button>
            </div>
        </div>

    </div>
);

export default StaticUserDetail;