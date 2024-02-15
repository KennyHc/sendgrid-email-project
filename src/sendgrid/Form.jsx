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
        e.preventDefault();
        const mailtoLink = `mailto:${email}?subject=Subject&body=${encodeURIComponent(text)}`;
        window.open(mailtoLink, '_blank');
    };

    const emailInput = (<Form.Group className="mb-3">
        <Form.Label htmlFor="exampleEmail">Email</Form.Label>
        <Form.Control
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
        />
    </Form.Group>)

    const textInput = (<Form.Group className="mb-3">
        <Form.Label htmlFor="exampleText">Text</Form.Label>
        <Form.Control
            as="textarea"
            id="exampleText"
            placeholder="Enter text"
            rows={4}
            value={text}
            onChange={handleTextChange}
        />
    </Form.Group>)


    const submitButton = (<Button variant="primary" type="submit">
        Send
    </Button>)

    const form = (<Form className="form" onSubmit={handleSubmit}>
        {emailInput}
        {textInput}
        {submitButton}
    </Form>)

    return (
        <Container className="centered form-container">
            <h1>Email Form</h1>
            {form}
        </Container>
    );
};
