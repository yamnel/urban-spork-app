import React from 'react';
import {
    Card,
    Alert,
    CardImg,
    CardBody,
    Table,
    Badge,
    Dropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    CardText,
    CardTitle,
    Button,
    CardGroup,
    Row,
    Col,
    CardColumns
} from "reactstrap";

import Scroll from 'react-scrollbar';
import PendingRequests from './PendingRequests';
import jsPDF from 'jspdf'
import UrbanSporkAPI from "../api/UrbanSporkAPI";
import ReactDOMServer from 'react-dom/server';


export default class DashboardPage extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            data: [],
            ReportResults: [],
            PositionsModalIsOpen: false,
            DepartmentsModalIsOpen: false,
            SystemModalIsOpen: false,
            dropdownOpen: false,
        };
    }

    componentDidMount = () => {
        console.log('example Component mounted');
        this.getDashboardData();

    };

    getDashboardData = () => {
        let Data = UrbanSporkAPI.getSystemDashboard();
        Data.then(data => {
            this.setState({data: data})
        });
    };

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    openPositionsModal = () => {
        this.togglePositionsModal();
    };

    togglePositionsModal = () => this.setState(() => {
        const Departments = UrbanSporkAPI.getDepartments();
        Departments.then(data => {
            this.setState({Departments: data})

        })
            .then(() => (this.setState({PositionsModalIsOpen: !this.state.PositionsModalIsOpen})));
    });

    openDepartmentsModal = () => {
        this.toggleDepartmentsModal();
    };

    toggleDepartmentsModal = () => this.setState(() => {
        return ({DepartmentsModalIsOpen: !this.state.DepartmentsModalIsOpen});
    });

    openSystemDetailModal = () => {
        // this.setUserData(selectedUserData.id);
        this.toggleModalIsOpen();

        //proof that is stays in the old state
        // console.log(`The new state field selectedUserId is ${this.state.selectedUserId}`);
    };

    toggleModalIsOpen = () => this.setState(() => {
        return ({SystemModalIsOpen: !this.state.SystemModalIsOpen});
    });

    getReport = (ID) => {
        let payload = {
            PermissionId: ID,
            SearchTerms: "",
            SortDirection: "ASC",
            SortField: "ForFullName",
            EnablePaging: false,
        };
        return UrbanSporkAPI.getSystemReport(payload);
        // const ReportData = UrbanSporkAPI.getSystemActivityReport(payload);
        // ReportData.then(data => {
        //     this.setState({ReportResults: data})
        // })
        // this.formatReport();
    };

    formatReport = () => {
        let pdfBody = this.state.ReportResults.map((entry, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.forFullName}</td>
                <td>{entry.byFullName}</td>
                <td>{entry.timestamp}</td>
            </tr>
        ));
        return pdfBody;
    };


    cardSelected = (SystemId, SystemName) => {
        const payload = this.getReport(SystemId);

        payload
            .then((data) => this.setState({ReportResults: data}))
            .then(() => {
                let pdf = new jsPDF('p', 'pt', 'letter');
                let rows = this.formatReport();
                let table = (
                    <Table >
                        <thead style={{height:20}}>

                            <th>#</th>
                            <th>Name</th>
                            <th>Approved By</th>
                            <th>Date</th>

                        </thead>
                        <tbody>
                        {rows}
                        </tbody>
                    </Table>
                );

                let page = (
                    <Row>
                        <Row>
                            <Col md={4}>

                            </Col>
                            <Col md={4} textalign="center">
                                <h1>{SystemName} System Report</h1>
                            </Col>
                            <Col md={4}>

                            </Col>
                        </Row>
                        <Row>
                            {table}
                        </Row>
                    </Row>
                );
                let source = ReactDOMServer.renderToStaticMarkup(page);

                let margins = {
                    top: 50,
                    left: 60,
                    width: 545
                };

                pdf.fromHTML(
                    source // HTML string or DOM elem ref.
                    , margins.left // x coord
                    , margins.top // y coord
                    , {
                        'width': margins.width // max width of content on PDF
                        ,
                    },
                    function (dispose) {
                        // dispose: object with X, Y of the last line add to the PDF
                        // this allow the insertion of new lines after html
                        pdf.save(SystemName + 'ActivityReport.pdf');
                    }
                );
            });
    };

    render() {
        const systems = this.state.data.map((_System, index) => (
            <Col key={index}>
                <Card md={3} onClick={() => {
                    this.cardSelected(_System.permissionId, _System.systemName)
                }} style=
                          {{
                              backgroundColor: "#FFFFFF",
                              borderWidth: 1,
                              borderColor: "#000000",
                              borderLeftWidth: 3,
                              borderBottomWidth: 3,
                              cursor: "pointer",

                          }}>
                    <br/>
                    <CardTitle
                        style={{textAlign: "center"}}>{_System.logoUrl != null ? '' : _System.systemName}</CardTitle>

                    <CardImg
                        src={_System.logoUrl != null ? _System.logoUrl : 'http://st.motortrend.com/uploads/sites/5/2015/11/noimage.png?interpolation=lanczos-none&fit=around%7C300:200'}
                        width="50%" height="100vw" className="container-fluid"/>
                    <CardBody>
                        <Col md={12}>
                            <Row>
                                <Col md={6}>
                                   <span>
                                       <Badge pill color="success">{_System.pendingRequests} Pending</Badge>
                                   </span>
                                </Col>
                                <Col md={6}>
                                      <span>
                                          <Badge pill color="info">{_System.activeUsers} Active Users</Badge>
                                      </span>
                                </Col>
                            </Row>
                        </Col>
                    </CardBody>
                </Card>
                <br/>
            </Col>
        ));
        return (
            <div>
                <div>
                    <br/>
                    {/*top row */}
                    <Row style={{height: 50}}>

                    </Row>
                </div>
                <div>

                    <Row>
                        <div>
                            <Col md={3} style={{alignContent: "center"}}>
                                {/*<h1 align="center">Systems</h1>*/}
                                {/*<hr width={250} color="#000000"/>*/}
                                <Scroll
                                    style={{height: 500, width: 300}}
                                >
                                    <Row>
                                        <Col>
                                            {systems}
                                        </Col>
                                    </Row>

                                </Scroll>
                            </Col>
                        </div>
                        <Col md={8}>
                            <PendingRequests getDashboard={this.getDashboardData}/>
                        </Col>
                        <Col md={1}>
                        </Col>

                    </Row>
                </div>

            </div>
        )
    };
}