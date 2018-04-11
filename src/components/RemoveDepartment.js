import React from 'react';
import {Col, Form, FormGroup, Input, Label} from 'reactstrap';

export default class RemoveDepartments extends React.Component {

    constructor(props){
        super();

        this.state = {
            InputPlaceholder: 'Enter title of position',
            Departments: props.department,
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.updateDepartment = this.updateDepartment.bind(this);
    }


    onInputChange = (data) => {
        console.log("onInputChange");
        this.props.AddButton(data.target.value);

    };

    updateDepartment = (department) => {

        this.props.DepartmentSelected(department);

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

                </Form>
            </div>
        )
    }

}



