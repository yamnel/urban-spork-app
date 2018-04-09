import React from 'react';
import {Col, Form, FormGroup, Input, Label} from 'reactstrap';





export default class AddPosition extends React.Component {

    constructor(props){
        super();



        this.state = {
            InputPlaceholder: 'Enter title of position',
            Departments: props.departments,
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

    render() {

        const AllDepartments = this.state.Departments.map((Department, index) => (

            <option key={index} >{Department.name}</option>

        ));
        console.log(this.state.Departments);


        return(
            <div>
                <Form>
                    <FormGroup row>
                        <Col md={4}>
                            <Label color={"muted"}  for={"Title"}>
                                Position Title:
                            </Label>
                        </Col>

                        <Col md={8}>
                            <Input placeholder={this.state.InputPlaceholder} id={"Title"} onChange={evt => {this.onInputChange(evt)}}/>
                        </Col>
                    </FormGroup>
                    <br/>
                    <FormGroup row>
                        <Col md={6}>
                            <Label for="SelectDepartment">
                                Select Department
                            </Label>
                        </Col>

                        <Col md={6}>
                            <Input type="select"  id="SelectDepartment" onChange={e => {this.updateDepartment(e)}}>
                                {AllDepartments}

                            </Input>
                        </Col>

                    </FormGroup>

                </Form>
            </div>
        )
    }

}



