import React from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";


export default class LogInPage extends React.Component {
    state = {
        admin: false
    };

    styles = {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: '300px'
    };


    onSelectHandle = (e) => {
        const selected = e.target.options.selectedIndex;

        if (e.target.options[selected].id === "1") {
            this.setState({admin: true});

        } else {
            this.setState({admin: false});
        }
    };

    render() {
        return (
            <div>
                <Form style={this.styles} inline>
                    <FormGroup>
                        <Label for="adminSelector">Select User</Label>
                        <Col>
                            <Input onChange={(e) => this.onSelectHandle(e)} type={'select'} name="adminSelector" id="adminSelector">
                                <option/>
                                <option id={1}>Admin</option>
                                <option id={2}>Non-Admin</option>
                            </Input>
                        </Col>

                    </FormGroup>
                    {' '}
                    <Button onClick={()=> this.props.isAdmin(this.state.admin)}>Submit</Button>
                </Form>
            </div>
        )
    }
}