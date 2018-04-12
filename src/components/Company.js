import React from 'react';
import {Row, Col} from 'reactstrap';
import {faBuilding, faCogs, faIdBadge, faTasks} from '@fortawesome/fontawesome-free-solid'
import UrbanSporkAPI from "../api/UrbanSporkAPI";
import DepartmentsModal from './DepartmentsModal';
import PositionsModal from './PositionsModal';
import TemplateModal from './TemplateModal';
import SystemModal from "./SystemModal";
import CompanyCard from'./CompanyCard';

export default class Company extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            addPosition: true,
            addDepartment: true,
            addTemplate: true,
            PositionsModalIsOpen:false,
            DepartmentsModalIsOpen:false,
            SystemModalIsOpen: false,
            TemplateModalIsOpen: false,
            departments: [],
            templates: []
        };
    }

    openAddPositionsModal = () => {

        var payload = UrbanSporkAPI.getDepartments();

        payload.then(data => {
            this.setState({departments: data}),
            this.setState({addPosition: true})
        }).then(() => this.togglePositionsModal())
    };

    openRemovePositionsModal = () => {

        var payload = UrbanSporkAPI.getDepartments();


        payload.then(data => {
            this.setState({departments: data}),
            this.setState({addPosition: false})
        }).then(() =>

            this.togglePositionsModal()
        )
    };

    togglePositionsModal = () => this.setState(() => {
        return ({PositionsModalIsOpen: !this.state.PositionsModalIsOpen});
    });

    openAddDepartmentsModal = () => {
        var payload = UrbanSporkAPI.getDepartments();

        payload.then(data => {
            this.setState({departments: data}),
            this.setState({addDepartment: true})
        }).then(() => this.toggleDepartmentsModal())
    };

    openRemoveDepartmentsModal = () => {
        var payload = UrbanSporkAPI.getDepartments();

        payload.then(data => {
            this.setState({departments: data}),
            this.setState({addDepartment: false})
        }).then(() => this.toggleDepartmentsModal())
    };

    toggleDepartmentsModal = () => this.setState(() => {
        return ({DepartmentsModalIsOpen: !this.state.DepartmentsModalIsOpen});
    });

    openAddTemplateModal = () => {
        var payload = UrbanSporkAPI.getTemplates();

        payload.then(data => {
            this.setState({templates: data}),
                this.setState({addTemplate: true})
        }).then(() => this.toggleTemplateModal())
    };

    openRemoveTemplateModal = () => {
        var payload = UrbanSporkAPI.getTemplates();

        payload.then(data => {
            this.setState({templates: data}),
                this.setState({addTemplate: false})
        }).then(() => this.toggleTemplateModal())
    };

    toggleTemplateModal = () => this.setState(() => {
        return ({TemplateModalIsOpen: !this.state.TemplateModalIsOpen});
    });

    openSystemDetailModal = () => {
        this.toggleModalIsOpen();
    };

    toggleModalIsOpen = () => this.setState(() => {
        return ({SystemModalIsOpen: !this.state.SystemModalIsOpen});
    });

    addPosition = (position) => {
        this.setState({addPosition: position})
    }

    styles = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: 100
    };

    render() {

        return(
            <div>
                <div >
                    <Row style={this.styles}>
                        <Col sm="8">
                            <h1 align="center">Company Management</h1>
                            <hr width={500} color="#000000"/>
                        </Col>
                    </Row>
                    <Row style = {{ alignContent: "center" }}>
                        <Col sm={3}>
                            <CompanyCard cardTitle={"Manage Systems"} color={"#28a745"}
                                         fontAwesomeIcon={faCogs} addButtonOnClick={this.openSystemDetailModal}
                                         removeButtonOnClick={this.openSystemDetailModal}/>
                        </Col>

                        <Col sm={3}>
                            <CompanyCard cardTitle={"Manage Departments"} color={"#9933ff"}
                                         fontAwesomeIcon={faBuilding} addButtonOnClick={this.openAddDepartmentsModal}
                                         removeButtonOnClick={this.openRemoveDepartmentsModal}/>
                        </Col>

                        <Col sm={3}>
                            <CompanyCard cardTitle={"Manage Positions"} color={"#0066cc"}
                                         fontAwesomeIcon={faIdBadge} addButtonOnClick={this.openAddPositionsModal}
                                         removeButtonOnClick={this.openRemovePositionsModal}/>
                        </Col>

                        <Col sm={3}>
                            <CompanyCard cardTitle={"Manage Templates"} color={"#00bdff"}
                                         fontAwesomeIcon={faTasks} addButtonOnClick={this.openAddTemplateModal}
                                         removeButtonOnClick={this.openRemoveTemplateModal}/>
                        </Col>
                    </Row>
                </div>

                <PositionsModal departments={this.state.departments}
                                isOpen={this.state.PositionsModalIsOpen}
                                toggle={this.togglePositionsModal}
                                addPosition={this.state.addPosition}/>

                <DepartmentsModal isOpen={this.state.DepartmentsModalIsOpen}
                                  toggle={this.toggleDepartmentsModal}
                                  departments={this.state.departments}
                                  addDepartment={this.state.addDepartment}/>

                <SystemModal isOpen={this.state.SystemModalIsOpen}
                             toggle={this.toggleModalIsOpen}/>

                <TemplateModal isOpen={this.state.TemplateModalIsOpen}
                                  toggle={this.toggleTemplateModal}
                                  templates={this.state.templates}
                                  addTemplate={this.state.addTemplate}/>
            </div>
        )
    }
}