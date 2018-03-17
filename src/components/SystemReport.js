import React from 'react';
import {Button, FormGroup, Input, Label} from "reactstrap";

const SystemReportPartial = (props) => (
    <div>

        <h1 className={"text-center"}>System Report</h1>
        <h5 className={"text-center"}>Lists all active users of a system for a given date.</h5>

        <div style={{maxWidth: '600px', display: 'flex', justifyContent: 'space-between'}}>

            <FormGroup>
                <Input type={'select'} onChange={(e) => props.onSelectChange(e.target.value)}>
                    <option>Pick System</option>
                    <option>Pick System 2</option>
                </Input>
            </FormGroup>

            {/*TODO: Still need to attach a date picker here*/}

            <Button color={'success'} onClick={props.handleOnClick}>User Report</Button>


        </div>
        <div>
            <Label for="permissions">{`Active Users for System ${props.selectedSystem} as of ${''}:`}</Label>
            <Input type="select" name="permissions" id="permissions" multiple>
                {/*
                        This is a jumble of references, but the function I created above doesn't work on it...
                        so I am leaving it like this.
                */}

                {/*{*/}
                    {/*props.selectedSystem && Object.keys(props.selectedSystem.permissionList).map((permission, i) => {*/}
                        {/*if (props.selectedSystem.permissionList[permission].permissionStatus !== 'Revoked') {*/}
                            {/*return <option key={i} value={i} id={permission}>{props.selectedSystem.permissionList[permission].permissionName}</option>;*/}
                        {/*}*/}
                    {/*})*/}
                {/*}*/}
            </Input>

            <Button color="danger" style={{marginTop: "20px"}}>Edit Permissions</Button>
        </div>
    </div>
);


export default class SystemReport extends React.Component {
    state = {
        selectedSystem: 'Pick System'
    };


    // TODO: Have to apply the GET inside of handleOnClick and set the return inside of state.userData

    handleOnClick = () => {
        console.log('Send query to the API')
    };


    render() {
        return (
            <SystemReportPartial
                handleOnClick={this.handleOnClick} value={this.state.text}
                onSelectChange={(value) => this.setState({selectedSystem: value})}
                selectedSystem={this.state.selectedSystem}
            />
        )
    }
}