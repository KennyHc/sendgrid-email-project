import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function EmailForm() {
    return (
        <Container>
            <h1>Simple Form</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label for="exampleEmail">Email</Form.Label>
                    <Form.Control type="email" name="email" id="exampleEmail" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label for="examplePassword">Password</Form.Label>
                    <Form.Control type="password" name="password" id="examplePassword" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

