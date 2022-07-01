import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { NavItem } from 'react-bootstrap'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavLink
} from 'reactstrap';

export default class CartSummary extends Component {
    renderSummary() {
        return (<UncontrolledDropdown
            inNavbar
            nav
        >
            <DropdownToggle
                caret
                nav
            >
                Your Cart
            </DropdownToggle>
            <DropdownMenu end>
                {
                    this.props.cart.map(cartItem => (
                        <DropdownItem key={cartItem.product.id}>
                            <Badge color="danger" onClick={() => this.props.removeFromCart(cartItem.product)}>x</Badge>
                            {cartItem.product.productName}
                            <Badge color="success">{cartItem.quantity}</Badge>
                        </DropdownItem>
                    ))
                }
                <DropdownItem divider />
                <DropdownItem>
                    <Link to="cart">Cart</Link>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>)
    }
    renderEmptyCard() {
        return (
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
        )
    }
    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCard()}
            </div>
        )
    }
}
