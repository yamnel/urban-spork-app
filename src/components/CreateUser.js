import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Form, FormGroup, Input, Label, Button} from "reactstrap";


export default class CreateUser extends React.Component {

    styles = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    };


    render() {
        return (
            <div>

                <div style={this.styles}>
                    <h1>Create User</h1>
                </div>

                <div style={{paddingTop: '20px', display: 'flex', justifyContent: 'space-between', padding: '0 250px 0 250px'}}>
                   <div>
                       <Form style={{width: "480px"}}>
                           <FormGroup row>
                               <Label color={"muted"} sm={"3"} for={"firstName"}>
                                   First Name:
                               </Label>
                               <Col sm={20}>
                                   <Input id={"firstName"}/>
                               </Col>
                           </FormGroup>

                           <FormGroup row>
                               <Label color={"muted"} sm={"3"} for={"lastName"}>
                                   Last Name:
                               </Label>
                               <Col sm={20}>
                                   <Input id={"lastName"}/>
                               </Col>
                           </FormGroup>

                           <FormGroup row>
                               <Label for="title" sm={"3"}>
                                   Title:
                               </Label>

                               <Col sm={20}>
                                   <Input type="text" name="tile" id="tile"/>
                               </Col>
                           </FormGroup>

                           <FormGroup row>
                               <Label for="department" sm={"3"}>
                                   Department:
                               </Label>

                               <Col sm={20}>
                                   <Input type="text" name="department" id="department"/>
                               </Col>
                           </FormGroup>

                           <FormGroup row>
                               <Label for="email" sm={"3"}>
                                   Email:
                               </Label>

                               <Col sm={20}>
                                   <Input type="email" name="email" id="email"/>
                               </Col>
                           </FormGroup>
                       </Form>

                       <Button style={{marginTop: "40px", marginLeft: "20px"}} to={"/users"} color={'success'} tag={Link}>Create User</Button>
                   </div>



                    <div>
                        <p>List of Permission ( with check boxes ) <br/> will go here!</p>
                    </div>
                </div>

            </div>
        )
    }
}