import React from 'react';
import {Col, Form, FormGroup, Input, Label} from 'reactstrap';
import UrbanSporkAPI from '../api/UrbanSporkAPI';

export default class RemovePosition extends React.Component {

    constructor(props){
        super();

        this.state = {
            InputPlaceholder: 'Enter title of position',
            Departments: props.department,
            Positions: []
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.updateDepartment = this.updateDepartment.bind(this);
    }


    onInputChange = (data) => {
        console.log("onInputChange");
        this.props.AddButton(data.target.value);

    };

    updatePositionList = (department) => {

        return UrbanSporkAPI.getPositionByDepartment(department);
    };

    updateDepartment = (department) => {

        this.props.DepartmentSelected(department);
        let positions = this.updatePositionList(department);

        positions.then(() => {
        this.setState({Positions: positions})
        });
    };

    getAllDepartments = () => {

        return this.state.Departments.map((Department, index) => (

            <option key={index} >{Department.name}</option>

        ));
    };

    render() {
        return(
            <div>
                <Form>
                    <FormGroup row>
                        <Col md={6}>
                            <Label for="SelectDepartment">
                                Select Department
                            </Label>
                        </Col>

                        <Col md={6}>
                            <Input type="select"  id="SelectDepartment" onChange={e => {this.updateDepartment(e)}}>
                                {this.getAllDepartments()}

                            </Input>
                        </Col>

                    </FormGroup>
                    <br/>
                    <FormGroup row>
                        <Col md={4}>
                            <Label color={"muted"}  for={"Title"}>
                                Position Title:
                            </Label>
                        </Col>

                        <Col md={8}>

                            <Col md={6}>
                                <Input type="select"  id="SelectDepartment" onChange={e => {this.updateDepartment(e)}}>
                                    {this.state.Positions}
                                </Input>
                            </Col>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }

}



