import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Card } from "react-bootstrap";

function User(props) {
    const { name, prof_img, age, rating, intro } = props;
    return (
        <div className="user__card">
            <Card mb={3} style={{ width: "500px", margin: "10px" }}>
                <Container>
                    <Row>
                        <Col md={4}>
                            <Card.Img
                                variant="bottom"
                                src={prof_img}
                                width={171}
                                height={180}
                                alt={name}
                                title={name}
                                thumbnail
                                style={{ margin: "5px" }}
                            />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title className="user__name">
                                    {name}
                                </Card.Title>
                                <Card.Text className="user__age">
                                    나이 : {age}
                                </Card.Text>
                                <Card.Text className="user__rating">
                                    평점{rating}/5.0
                                </Card.Text>
                                <Card.Text className="user__intro">
                                    {intro}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </div>
    );
}

export default User;
