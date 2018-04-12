import React from 'react';
import {
    Button,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    ModalBody,
    ModalFooter,
    UncontrolledDropdown
} from 'reactstrap';
import {faCog} from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import UrbanSporkAPI from "../api/UrbanSporkAPI";
import StaticUserDetail from "./StaticUserDetail";
import EditUserDetail from "./EditUserDetail";


// this is the options button component
const Options = (props) => (
    <UncontrolledDropdown direction={'right'}>
        <DropdownToggle disabled={props.edit}>
            <FontAwesomeIcon icon={faCog}/>
        </DropdownToggle>

        <DropdownMenu>
            <DropdownItem header>Options</DropdownItem>
            <DropdownItem disabled={props.isAdmin}>Make Admin</DropdownItem>
            <DropdownItem>Off-Board Report</DropdownItem>
            <DropdownItem>Deactivate</DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>
);

const Header = (props) => (
    <div className={'modal-header'} style={{display: 'flex', justifyContent: 'space-between'}}>
        <Button color={'danger'} onClick={props.handleOnBack}>Back</Button>
        <h5 className={'modal-title'}>
            {props.firstName} {props.lastName}
        </h5>
        {
            // If it's not in edit mode show the options button
            <Options edit={props.edit} isAdmin={props.isAdmin}/>
        }
    </div>
);


class UserDetailsComponents extends React.Component {
    state = {
        edit: false,
        History: []
    };

    handleOnEdit = () => {
        this.setState({edit: true})
    };


    handleOnCancel = () => {
        this.setState((prevState) => ({userData: prevState.originalData, editPermissions: false}));

        if (this.state.edit) {
            this.setState({edit: false});
        } else {
            this.props.toggle();
        }
    };

    handleOnSave = () => {
        const data = {
            ForID: this.state.userData.userId,
            FirstName: this.state.userData.firstName,
            LastName: this.state.userData.lastName,
            Email: this.state.userData.email,
            Position: this.state.userData.position,
            Department: this.state.userData.department,
            IsAdmin: this.state.userData.isAdmin
        };

        UrbanSporkAPI.updateUserDetails(data)
            .then(this.setState({edit: false}))

    };

    // this handles the input change in the user info form fields
    handleOnDataChange = (e) => {
        const changedData = {[e.target.id]: e.target.value};

        // this replaces ONLY the changed data values in the old user data.
        this.setState((prevState) => ({userData: {...prevState.userData, ...changedData}}));
    };


    handleOnBack = () => this.props.history.push("/users");

    componentDidMount() {
        const userId = this.props.match.params.id;
        const userData = UrbanSporkAPI.getUserFullData(userId);
        console.log('user id ', userId);
        userData.then(data => this.setState({userData: data, originalData: data}));
        const userHistory = UrbanSporkAPI.getUserHistory(userId);
        userHistory.then(data => {
            this.setState({History: data});
        });
    }



    render() {

        let userHist = this.state.History.map((history, index) => (
            {
                Event:history.eventType,
                Date: history.timeStamp,
                PerformedBy: history.operator,
                Description: JSON.parse(history.description),
            }
        ));

        console.log(userHist);
        return (
            <div>
                <h1 className={'titles'}>User Details</h1>
                {this.state.userData &&
                <div>
                    <Header
                        handleOnBack={this.handleOnBack}
                        edit={this.state.edit}
                        firstName={this.state.userData.firstName}
                        lastName={this.state.userData.lastName}
                        isAdmin={this.state.userData.isAdmin}
                    />

                    <ModalBody>
                        <div>
                            {
                                // the check to see if we have the userData loaded needs to go first
                                this.state.userData && (this.state.edit ?
                                        <EditUserDetail
                                            onDataChange={this.handleOnDataChange}
                                            userData={this.state.userData}
                                        />
                                        :
                                        <StaticUserDetail
                                            userData={this.state.userData}
                                            handleOnEditPermissions={this.handleOnEditPermissions}
                                            userHistory={userHist}
                                        />
                                )
                            }
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {this.state.edit ?
                            <div>
                                <Button
                                    color="success" onClick={this.handleOnSave}
                                    active={!this.state.edit}>Save
                                </Button>
                                {' '}
                                <Button color="secondary" onClick={this.handleOnCancel}>Cancel</Button>
                            </div>
                            :
                            <Button color="primary" onClick={this.handleOnEdit} active={!this.state.edit}>Edit</Button>
                        }
                    </ModalFooter>
                </div>
                }
            </div>
        )
    }
}

export default UserDetailsComponents;