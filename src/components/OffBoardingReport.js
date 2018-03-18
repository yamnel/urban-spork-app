import React from 'react';
import {Button, FormGroup, Input, Label} from "reactstrap";

const OffBoardingReportPartial = (props) => (
    <div>

        <h1 className={"text-center"}>Off-Boarding Report</h1>
        <h5 className={"text-center"}>Lists all systems to be revoked when a person parts an organization</h5>

        <div className={'user-management-nav'} style={{justifyContent: 'space-around'}}>
            <Button color={'success'} onClick={props.handleOnClick}>User Report</Button>

            <FormGroup>
                <Input type={'text'} value={props.value} onChange={(e) => props.onInputChange(e.target.value)}
                       placeholder={'Search for User'}/>
            </FormGroup>

        </div>
        <div>
            <Label for="permissions">Permissions:</Label>
            <Input type="select" name="permissions" id="permissions" multiple>
                {/*
                        This is a jumble of references, but the function I created above doesn't work on it...
                        so I am leaving it like this.
                    */}
                {
                    props.userData && Object.keys(props.userData.permissionList).map((permission, i) => {
                        if (props.userData.permissionList[permission].permissionStatus !== 'Revoked') {
                            return <option key={i} value={i}
                                           id={permission}>{props.userData.permissionList[permission].permissionName}</option>;
                        }
                    })
                }
            </Input>

            <Button color="danger" style={{marginTop: "20px"}}>Edit Permissions</Button>
        </div>
    </div>
);


export default class OffBoardingReport extends React.Component {
    state = {
        text: ''
    };


    // TODO: Have to apply the GET inside of handleOnClick and set the return inside of state.userData

    handleOnClick = () => {
        console.log('Send query to the API')
    };


    render() {
        return (
            <OffBoardingReportPartial
                handleOnClick={this.handleOnClick} value={this.state.text}
                onInputChange={(value) => this.setState({text: value})}
                userData={this.state.userData}
            />
        )
    }
}