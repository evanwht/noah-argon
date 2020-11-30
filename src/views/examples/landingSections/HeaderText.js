import React, { Component } from 'react';

import {
    Button,
    Container,
    Row,
    Col
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

class HeaderText extends Component {
    render() {
        return (
            <Container className="py-lg-md d-flex">
                <div className="col px-0">
                    <Row>
                        <Col lg="8">
                            <h1 className="display-2 text-white">
                                Noah's Personal Website
                      </h1>
                            <p className="lead text-white">
                                This website was made specifically for you! Here you can find games to play
                                (as I make them), pages to view content, and a way to message me with any
                      </p>
                            <div className="btn-wrapper">
                                <Button
                                    className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                                    color="default"
                                    href="https://code.org/minecraft"
                                >
                                    <span className="btn-inner--icon mr-1">
                                        <FontAwesomeIcon icon={faTerminal} />
                                    </span>
                                    <span className="btn-inner--text">
                                        Learn to Code
                          </span>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default HeaderText;
