
import React, {useEffect, useState} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../App.css';
import {sampleData} from "./SampleData";
import {Report} from "./reportGenerationInterfaces";

function createHyperlink(link: string, title: string):string {
    return `<a href="${link}" style="color: blue;">${title}</a>`;
}

function reportToString(report: Report): string {
    let reportString:string = `Date: ${report.date.toDateString()}\n`;
    reportString += `Topic: ${report.topic}\n`;
    reportString += `Unit: ${report.unit}\n`;
    reportString += `Issues Team: ${report.issuesTeam}\n`;
    reportString += `Issue Background: ${report.issueBackground}\n`;
    reportString += `Key Messaging: ${report.keyMessaging}\n`;
    reportString += `Relevant Media Coverage:\n`;

    // report.relevantMediaCoverage.forEach((coverage) => {
    //     reportString += ` - Title: ${coverage.title}, Link: ${coverage.link}\n`;
    // });

    report.relevantMediaCoverage.forEach((coverage) => {
        reportString += `${createHyperlink(coverage.link,coverage.title)}\n`
    });

    return reportString;
}

export default function EmailForm():JSX.Element {
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');


    useEffect(():void => {
        // Function to fetch data
        const fetchData = async (): Promise<void> => {
            try {
                const response:Report = sampleData
                const parsedResponse:string = reportToString(response)
                setText(parsedResponse)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the fetchData function
        fetchData()

    }, []); // The empty array ensures this effect runs once on mount

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    };

    const handleTextChange = (e:React.ChangeEvent<HTMLTextAreaElement>):void => {
        setText(e.target.value);
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        const mailtoLink:string = `mailto:${email}?subject=Subject&body=${encodeURIComponent(text)}`;
        window.open(mailtoLink, '_blank');
    };

    const emailInput:React.ReactElement = (<Form.Group className="mb-3">
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

    const textInput:React.ReactElement = (<Form.Group className="mb-3">
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


    const submitButton:React.ReactElement = (<Button variant="primary" type="submit">
        Send
    </Button>)

    const form:React.ReactElement = (<Form className="form" onSubmit={handleSubmit}>
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
