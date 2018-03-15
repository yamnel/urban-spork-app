import React from 'react';
import {Link} from "react-router-dom";
import {Button, FormGroup, Input, Label} from "reactstrap";




export default class OffBoardingReport extends React.Component {


    render() {
        return (

            <div>
                <h1>?</h1>
                <div className={'user-management-nav'}>
                    <Button color={'success'}>Create User</Button>
                    {/*<Button color={'primary'}>Filter</Button>*/}

                    {/*<FormGroup>*/}
                        {/*<Input type={'text'} value={this.props.filters.text} onChange={this.onInputChange} placeholder={'Search'} />*/}
                    {/*</FormGroup>*/}
                </div>
                <div>
                    <Label for="permissions">Permissions:</Label>
                    <Input type="select" name="permissions" id="permissions" multiple>
                        {/*
                        This is a jumble of references, but the function I created above doesn't work on it...
                        so I am leaving it like this.
                    */}
                        {/*{*/}
                            {/*Object.keys(props.userData.permissionList).map((permission, i) => {*/}
                                {/*if (props.userData.permissionList[permission].permissionStatus !== 'Revoked') {*/}
                                    {/*return <option key={i} value={i} id={permission}>{props.userData.permissionList[permission].permissionName}</option>;*/}
                                {/*}*/}
                            {/*})*/}
                        {/*}*/}
                    </Input>

                    <Button color="danger" style={{marginTop: "20px"}}>Edit Permissions</Button>
                </div>
            </div>
        )
    }
}