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
                <h1 className={"logo-title"}>Urban Spork Logo</h1>
                <h3 style={{color: "grey", marginTop: "36px"}}>User Name & IMG</h3>
            </div>

            <Nav tabs justified style={{marginTop: '10px'}}>
                <NavItem>
                    <NavLink to={"/"} exact={true} activeClassName={"is-active"} tag={RouterNavLink}>Home</NavLink>
                </NavItem>


                <NavItem>
                    <NavLink to={`/users`} activeClassName={"is-active"} tag={RouterNavLink} style={{whiteSpace: 'nowrap'}}>User Management</NavLink>
                </NavItem>


                <NavItem>
                    <NavLink to={"/requests"} activeClassName={"is-active"} tag={RouterNavLink} style={{whiteSpace: 'nowrap'}}>Pending Requests</NavLink>
                </NavItem>


                {/*<NavItem>*/}
                    {/*<NavLink to={"/reports"} activeClassName={"is-active"} tag={RouterNavLink}>Reports</NavLink>*/}
                {/*</NavItem>*/}

                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle caret nav>
                        Reports
                    </DropdownToggle>
                    <DropdownMenu right nav>
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