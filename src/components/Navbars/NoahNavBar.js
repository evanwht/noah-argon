/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
    Button,
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    Media,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

class DemoNavbar extends React.Component {
    componentDidMount() {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        // initialise
        headroom.init();
    }
    state = {
        collapseClasses: "",
        collapseOpen: false
    };

    onExiting = () => {
        this.setState({
            collapseClasses: "collapsing-out"
        });
    };

    onExited = () => {
        this.setState({
            collapseClasses: ""
        });
    };

    render() {
        return (
            <>
                <header className="header-global">
                    <Navbar
                        className="navbar-main navbar-transparent navbar-light headroom"
                        expand="lg"
                        id="navbar-main"
                    >
                        <Container>
                            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                                <img
                                    alt="..."
                                    src={require("assets/img/brand/argon-react-white.png")}
                                />
                            </NavbarBrand>
                            <button className="navbar-toggler" id="navbar_global">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <UncontrolledCollapse
                                toggler="#navbar_global"
                                navbar
                                className={this.state.collapseClasses}
                                onExiting={this.onExiting}
                                onExited={this.onExited}
                            >
                                <div className="navbar-collapse-header">
                                    <Row>
                                        <Col className="collapse-brand" xs="6">
                                            <Link to="/">
                                                <img
                                                    alt="..."
                                                    src={require("assets/img/brand/argon-react.png")}
                                                />
                                            </Link>
                                        </Col>
                                        <Col className="collapse-close" xs="6">
                                            <button className="navbar-toggler" id="navbar_global">
                                                <span />
                                                <span />
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav>
                                            <i className="ni ni-ui-04 d-lg-none mr-1" />
                                            <span className="nav-link-inner--text">Games</span>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-xl">
                                            <div className="dropdown-menu-inner">
                                                <Media
                                                    className="d-flex align-items-center"
                                                    href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar"
                                                    target="_blank"
                                                >
                                                    <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                                        <i className="fa fa-mouse-pointer" />
                                                    </div>
                                                    <Media body className="ml-3">
                                                        <h6 className="heading text-primary mb-md-1">
                                                            Reaction Game
                                                        </h6>
                                                        <p className="description d-none d-md-inline-block mb-0">
                                                            Test your reaction speed by clicking boxes faster and faster.
                                                        </p>
                                                    </Media>
                                                </Media>
                                            </div>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav>
                                            <i className="ni ni-collection d-lg-none mr-1" />
                                            <span className="nav-link-inner--text">Pages</span>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem to="/landing-page" tag={Link}>Home</DropdownItem>
                                            <DropdownItem to="/profile-page" tag={Link}>Memories</DropdownItem>
                                            <DropdownItem to="/login-page" tag={Link}>Color Picker</DropdownItem>
                                            <DropdownItem to="/register-page" tag={Link}>About</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="https://github.com/evanwht/noah-argon"
                                            id="tooltip112445449"
                                            target="_blank"
                                        >
                                            <i className="fa fa-github" />
                                            <span className="nav-link-inner--text d-lg-none ml-2">Github</span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip112445449">
                                            Find your code on Github
                                        </UncontrolledTooltip>
                                    </NavItem>
                                    <NavItem className="d-none d-lg-block ml-lg-4">
                                        <Button
                                            className="btn-neutral btn-icon"
                                            color="default"
                                            href=""
                                            target="_blank"
                                        >
                                            <span className="btn-inner--icon">
                                                <i className="fa fa-paper-plane mr-2" />
                                            </span>
                                            <span className="nav-link-inner--text ml-1">Message Me</span>
                                        </Button>
                                    </NavItem>
                                </Nav>
                            </UncontrolledCollapse>
                        </Container>
                    </Navbar>
                </header>
            </>
        );
    }
}

export default DemoNavbar;
