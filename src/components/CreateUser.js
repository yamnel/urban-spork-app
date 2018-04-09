import React from 'react';
import UrbanSporkAPI from "../api/UrbanSporkAPI";
import {Col, Form, FormGroup, Input, Label, Button, Row} from "reactstrap";
import FilteredMultiSelect from 'react-filtered-multiselect'


export default class CreateUser extends React.Component {

    styles = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    };

    state = {
        firstName: '',
        lastName: '',
        position: '',
        department: '',
        email: ''
    };

    handleOnChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleOnUserCreation = () => {
        const payload = {
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            Email: this.state.email,
            Position: this.state.position,
            Department: this.state.department,
            IsAdmin: false,
            IsActive: true,
        };

        UrbanSporkAPI.createUser(payload).then(() => this.props.history.push("/users"))


    };

    render() {
        return (
            <div>

                <div style={this.styles}>
                    <h1>Create User</h1>
                </div>

                <div style={{display: 'flex', justifyContent: 'center'}}>
                   <div>
                       <Form style={{width: "480px"}}>
                           <FormGroup row>
                               <Label color={"muted"} sm={"3"} for={"firstName"}>
                                   First Name:
                               </Label>
                               <Col sm={20}>
                                   <Input id={"firstName"} name={"firstName"} onChange={e => this.handleOnChange(e)}/>
                               </Col>
                           </FormGroup>

                           <FormGroup row>
                               <Label color={"muted"} sm={"3"} for={"lastName"}>
                                   Last Name:
                               </Label>
                               <Col sm={20}>
                                   <Input id={"lastName"} name={"lastName"} onChange={e => this.handleOnChange(e)}/>
                               </Col>
                           </FormGroup>

                           <FormGroup row>
                               <Label for="position" sm={"3"}>
                                   Title:
                               </Label>

                               <Col sm={20}>
                                   <Input type="text" name="position" id="position" onChange={e => this.handleOnChange(e)}/>
                               </Col>
                           </FormGroup>

                           <FormGroup row>
                               <Label for="department" sm={"3"}>
                                   Department:
                               </Label>

                               <Col sm={20}>
                                   {/* Hard Coded permissions... I love it!*/}
                                   <Input type="select"  name="department" id="department" onChange={e => this.handleOnChange(e)}>
                                       <option></option>
                                       <option>Warehouse</option>
                                       <option>Marketing</option>
                                       <option>Human Resource</option>
                                       <option>Complaints</option>
                                   </Input>
                               </Col>
                           </FormGroup>

                           <FormGroup row>
                               <Label for="email" sm={"3"}>
                                   Email:
                               </Label>

                               <Col sm={20}>
                                   <Input type="email" name="email" id="email" onChange={e => this.handleOnChange(e)}/>
                               </Col>
                           </FormGroup>
                       </Form>

                       <Row>
                           <Button style={{marginTop: "40px", marginLeft: "20px"}} onClick={this.handleOnUserCreation}  color={'success'}>Create User</Button>
                           <Button style={{marginTop: "40px", marginLeft: "20px"}} onClick={() => this.props.history.push("/users")}  color={'secondary'}>Cancel</Button>

                       </Row>
                   </div>
                </div>

            </div>
        )
    }
}