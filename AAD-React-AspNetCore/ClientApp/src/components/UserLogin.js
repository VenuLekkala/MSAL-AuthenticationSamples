import React, { Component } from 'react';
import {
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export class UserLogin extends Component {
    render() {
        if (this.props.auth && this.props.auth.isAuthenticated) {
            return (
                <UncontrolledDropdown >
                    <DropdownToggle nav caret>
                        <img class="mr-2" src="/venu.png" width="40" height="40" alt="avatar" />
                        {this.props.auth.user.name}
                    </DropdownToggle>
                    <DropdownMenu right>
                        <h5 className="dropdown-item-text mb-0">{this.props.auth.user.name}</h5>
                        <p className="dropdown-item-text text-muted mb-0">{this.props.auth.user.userName}</p>
                        <DropdownItem divider />
                        <DropdownItem onClick={this.props.onSignOut}>Sign Out</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            );
        }
        else {
            return (<NavItem>
                <NavLink onClick={this.props.onSignIn} href='#'>Sign in</NavLink>
            </NavItem>);
        }
    }
}
