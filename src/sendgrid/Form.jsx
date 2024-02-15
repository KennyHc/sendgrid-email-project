import React, {useState} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../App.css';

export default function EmailForm() {
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default form submission behavior
        console.log('Email:', email, 'Text:', text);
        // Here you can add what you want to do with the values
    };

    return (
        <Container className="centered form-container">
            <h1>Email Form</h1>
            <Form className="form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="exampleEmail">Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="exampleText">Text</Form.Label>
                    <Form.Control
                        as="textarea"
                        id="exampleText"
                        placeholder="Text"
                        rows={4}
                        value={text}
                        onChange={handleTextChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

