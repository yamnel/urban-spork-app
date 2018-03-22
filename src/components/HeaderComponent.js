import React from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
import {Nav, NavItem, NavLink} from 'reactstrap';
// Changed the name of reactstrap's Navlink to NavLinkStrap so as to avoid confusion.
import FontAwesomeIcon from "@fortawesome/react-fontawesome/src/components/FontAwesomeIcon";
import {faUserCircle} from "@fortawesome/fontawesome-free-solid/index.es";

const HeaderComponent = () => (
    <div>
        <header className={"header"}>

            <div className={"header-top"}>
                <h1 className={"logo-title"}>Urban Spork Logo</h1>
                <h3 style={{color: "white", marginTop: "36px"}}>User Name <FontAwesomeIcon icon={faUserCircle}/></h3>
            </div>

            <Nav tabs justified style={{marginTop: '10px'}}>
                <NavItem>
                    <NavLink to={"/"} exact={true} activeClassName={"is-active"} tag={RouterNavLink}>Home</NavLink>
                </NavItem>


                <NavItem>
                    <NavLink to={`/users`} activeClassName={"is-active"} tag={RouterNavLink}>User Management</NavLink>
                </NavItem>


                <NavItem>
                    <NavLink to={"/requests"} activeClassName={"is-active"} tag={RouterNavLink}>Pending Requests</NavLink>
                </NavItem>


                <NavItem>
                    <NavLink to={"/reports"} activeClassName={"is-active"} tag={RouterNavLink}>Reports</NavLink>
                </NavItem>

            </Nav>

        </header>
    </div>

);

export default HeaderComponent;