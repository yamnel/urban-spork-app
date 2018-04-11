import React from 'react';
import {Col, Form, FormGroup, Input, Label} from 'reactstrap';
import UrbanSporkAPI from '../api/UrbanSporkAPI';

export default class RemoveDepartments extends React.Component {

    constructor(props){
        super();

        this.state = {
            InputPlaceholder: 'Enter title of position',
            Departments: props.department,
        };
    }


    onInputChange = (data) => {
        console.log("onInputChange");
        this.props.AddButton(data.target.value);

    };

    updateDepartmentField = (department) => {
        console.log(department.target.value)
        this.props.DepartmentSelected(department.target.value);
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
                            <Input type="select"  id="SelectDepartment" onChange={e => {this.updateDepartmentField(e)}}>
                                {this.getAllDepartments()}

                            </Input>
                        </Col>

                    </FormGroup>

                </Form>
            </div>
        )
    }

}



