import React from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
import {DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, UncontrolledDropdown} from 'reactstrap';
import SystemActivityReport from "./SystemActivityReport";
import SystemReport from "./SystemReport";
import ApproverActivityReport from "./ApproverActivityReport";
// Changed the name of reactstrap's Navlink to NavLinkStrap so as to avoid confusion.

const HeaderComponent = () => (
    <div>
        <header className={"header"}>

            <div className={"header-top"}>
                <div style={{paddingTop: '20px'}}>
                    <img src="https://i.imgur.com/G7zI6wH.png" width="210" height="80"/>
                </div>
                <h2 style={{color: "#CBD4D2", marginTop: "36px"}}>Image Placeholder <br/><span><h5>Name Placeholder</h5></span></h2>
            </div>

            <Nav tabs justified>
                <NavItem>
                    <NavLink to={"/"} exact={true} activeClassName={"is-active"} tag={RouterNavLink}>Home</NavLink>
                </NavItem>


                <NavItem>
                    <NavLink to={`/users`} activeClassName={"is-active"} tag={RouterNavLink} style={{whiteSpace: 'nowrap'}}>User Management</NavLink>
                </NavItem>


                {/*<NavItem>*/}
                    {/*<NavLink to={"/requests"} activeClassName={"is-active"} tag={RouterNavLink} style={{whiteSpace: 'nowrap'}}>Pending Requests</NavLink>*/}
                {/*</NavItem>*/}


                {/*<NavItem>*/}
                    {/*<NavLink to={"/reports"} activeClassName={"is-active"} tag={RouterNavLink}>Reports</NavLink>*/}
                {/*</NavItem>*/}

                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle caret nav>
                        Reports
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem tag={RouterNavLink} to={"/reports/off-boarding-report"}>
                            Off-Boarding Report
                        </DropdownItem>

                        <DropdownItem tag={RouterNavLink} to={"/reports/system-report"}>
                            System Report
                        </DropdownItem>

                        <DropdownItem tag={RouterNavLink} to={"/reports/system-activity-report"}>
                            System Activity Report
                        </DropdownItem>

                        <DropdownItem tag={RouterNavLink} to={"/reports/approver-activity-report"}>
                            Approver Activity Report
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>

        </header>
    </div>

);

export default HeaderComponent;