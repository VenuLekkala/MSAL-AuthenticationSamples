import React, { Component } from 'react';
import {
    Collapse, Container, Navbar, NavbarBrand,
    NavbarToggler, NavItem, NavLink, DropdownToggle,
    DropdownMenu, DropdownItem, ButtonDropdown, UncontrolledDropdown } from 'reactstrap';
import { UserLogin } from './UserLogin';
import { Link, Router } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter() {
        this.setState({ dropdownOpen: true });
    }

    onMouseLeave() {
        this.setState({ dropdownOpen: false });
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className=" navbar navbar-expand-sm navbar-custom">
               {/* <Navbar className="navbar-expand-sm navbar-light bg-light"  light>*/}
                    {/*<Navbar className="navbar-expand-sm navbar-toggleable-sm ng-blue border-bottom box-shadow mb-3" Dark>*/}
                    <NavbarBrand tag={Link} to="/" className="text-custom">
                        <img class="mr-2" src="/CTG.png" width="Auto" height="40" alt="avatar" />
                    </NavbarBrand>

                    <Container>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        {/*<Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>*/}
                        <Collapse className="navbar navbar-inverse navbar-static-top" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav  flex-grow ">
                                <NavItem>
                                    <NavLink tag={Link} className="text-custom" to="/">DIGITAL ACCELERATORS</NavLink>
                                </NavItem>
                                
                                <ButtonDropdown isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
                                    <DropdownToggle caret className="text-custom button-custom">
                                        INDUSTRIES
                                    </DropdownToggle>
                                    <DropdownMenu >
                                        <DropdownItem className="text-custom" to="/Energy">ENERGY</DropdownItem>
                                        <DropdownItem className="text-custom">RETAIL</DropdownItem>
                                        <DropdownItem className="text-custom">BANKING AND FINANCE</DropdownItem>
                                        <DropdownItem className="text-custom">GOVERNMENT</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                                <NavItem >
                                    <NavLink tag={Link} className="text-custom" to="/graph-data">Get Graph data</NavLink>
                                </NavItem>
                                {/*<ButtonDropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>*/}
                                {/*    <DropdownToggle caret>*/}
                                {/*        Dropdown*/}
                                {/*    </DropdownToggle>*/}
                                {/*    <DropdownMenu>*/}
                                {/*        <DropdownMenu >*/}
                                {/*            <DropdownItem className="text-custom" to="/Energy">ENERGY</DropdownItem>*/}
                                {/*            <DropdownItem className="text-custom">RETAIL</DropdownItem>*/}
                                {/*            <DropdownItem className="text-custom">BANKING AND FINANCE</DropdownItem>*/}
                                {/*            <DropdownItem className="text-custom">GOVERNMENT</DropdownItem>*/}
                                {/*        </DropdownMenu>*/}
                                {/*    </DropdownMenu>*/}
                                {/*</ButtonDropdown>*/}

                            </ul>
                        </Collapse>
                    </Container>
                    <UserLogin  {...this.props} />
                </Navbar>
            </header>
        );
    }
}