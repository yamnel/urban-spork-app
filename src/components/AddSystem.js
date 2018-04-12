import React from 'react';
import {Col, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap';


export default class AddDepartment extends React.Component {

    constructor() {
        super();

        this.state = {
            DescriptionPlaceholder: 'Enter System Description',
            LogoURLPlaceholder: 'Logo Image URL HERE',
        };
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup row>
                        <Col md={6}>
                            <Label color={"muted"} for={"SystemName"}>
                                System Name:
                            </Label>
                        </Col>

                        <Col md={6}>
                            <Input placeholder={"Enter System Name"} id={"systemName"} onChange={evt => {
                                this.props.onInputChange(evt)

                            }}/>
                            <FormFeedback>This feeld has to be filled</FormFeedback>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col md={6}>
                            <Label color={"muted"} for={"SystemDescription"}>
                                System Description:
                            </Label>
                        </Col>

                        <Col md={6}>
                            <Input placeholder={this.state.DescriptionPlaceholder} id={"systemDescription"}
                                   onChange={evt => {
                                       this.props.onInputChange(evt)
                                   }}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col md={6}>
                            <Label color={"muted"} for={"SystemLogoURL"}>
                                System Logo URL:
                            </Label>
                        </Col>

                        <Col md={6}>
                            <Input placeholder={this.state.LogoURLPlaceholder} id={"systemLogoURL"} onChange={evt => {
                                this.props.onInputChange(evt)
                            }}/>
                        </Col>
                    </FormGroup>

                </Form>
            </div>
        )
    }

}



