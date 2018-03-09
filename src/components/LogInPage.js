import React from 'react';
import {Form, FormGroup, Input, Label, Button} from "reactstrap";


export default class LogInPage extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        managerId: undefined
    };

    styles = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '300px'
    };

    handleOnCLick = () => {
        if (this.state.managerId === '23') {
            this.props.accessGranted(this.state.managerId);
        }
    };

    handleOnChange = (e) => {
        this.setState({managerId: e.target.value});
    };

    render() {
        return (
            <div>
                <Form style={this.styles} inline>
                    <FormGroup>
                        <Label for="exampleEmail" hidden>Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email"/>
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label for="examplePassword" hidden>Password</Label>
                        <Input onChange={this.handleOnChange} type="password" name="password" id="examplePassword" placeholder="Password" />
                    </FormGroup>
                    {' '}
                    <Button onClick={this.handleOnCLick}>Submit</Button>
                </Form>
            </div>
        )
    }
}