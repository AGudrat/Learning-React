import React, { Component } from 'react'
import alertify from "alertifyjs";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

export default class FormDemo2 extends Component {
    state = { email: "", password: "", city: "", description: "" }
    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({ [name]: value });
    }
    handleSubmit = event => {
        event.preventDefault();
        alertify.success(this.state.email + " added to db!")
        alertify.success(this.state.password + " added to db!")
        alertify.success(this.state.city + " added to db!")
        alertify.success(this.state.description + " added to db!")
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placegolder="Enter Email" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placegolder="Enter Password" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" placegolder="Enter Description" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type='select' name="select" id='select' onChange={this.handleChange}>
                            <option>Bakı</option>
                            <option>Masallı</option>
                            <option>Astara</option>
                            <option>Lerik</option>
                            <option>Yardımlı</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}
