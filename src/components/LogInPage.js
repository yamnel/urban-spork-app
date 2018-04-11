import React from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import UrbanSporkAPI from '../api/UrbanSporkAPI';


export default class LogInPage extends React.Component {
    state = {
        admin: false,
        LogginList: [],
    };

    styles = {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: '300px'
    };

    componentWillMount() {
        this.getLogginDropDown();
    };

    getLogginDropDown = () => {
        const Admins = UrbanSporkAPI.getLogginDropDown();
        Admins.then(data => this.setState({LogginList: data})).catch(() => this.setState({LogginList: []}));
    };

    onSelectHandle = (e) => {
        const selected = e.target.value;
        console.log(selected);
        this.setState({admin:selected})
    };

    render() {
        const LogginUsers = this.state.LogginList.map((User, index) => (

            <option style={User.isAdmin? {color:"#FF0000"}: {color:"#000000"} } value={User.isAdmin} key={index} >{User.fullName}</option>

        ));
        return (

            <div>
                <Form style={this.styles} inline>
                    <FormGroup>
                        <Label for="adminSelector">Select User</Label>
                        <Col>
                            <Input onChange={(e) => this.onSelectHandle(e)} type={'select'} name="adminSelector" id="adminSelector">
                                <option/>
                                {LogginUsers}
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