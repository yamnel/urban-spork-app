import React from 'react';
import {Col, Form, FormGroup, Input, Label} from 'reactstrap';


export default class EditUserDetailComponent extends React.Component {
    state = {...this.props.userData};

    editedData = {...this.state}

    handleOnChange = (e) => {
        console.log(e.target)
    };
    render() {
        return(
            <div>
                <Form>

                    <FormGroup row>
                        <Label color={"muted"} sm={"3"} for={"firstName"}>
                            First Name:
                        </Label>
                        <Col sm={20}>
                            <Input id={"firstName"} onChange={this.onInputChange} defaultValue={this.editedData.firstName}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label color={"muted"} sm={"3"} for={"lastName"}>
                            Last Name:
                        </Label>
                        <Col sm={20}>
                            <Input id={"lastName"} defaultValue={this.editedData.lastName}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="title" sm={"3"}>
                            Title:
                        </Label>

                        <Col sm={20}>
                            <Input type="text" name="tile" id="tile" defaultValue={this.editedData.position}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="department" sm={"3"}>
                            Department:
                        </Label>

                        <Col sm={20}>
                            <Input type="text" name="department" id="department" defaultValue={this.editedData.department}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="email" sm={"3"}>
                            Email:
                        </Label>

                        <Col sm={20}>
                            <Input  type="email" name="email" id="email" defaultValue={this.editedData.email}/>
                        </Col>
                    </FormGroup>
                </Form>

            </div>
        )
    }

}



