import React, {Component} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import natural from "../img/natural.png";
import flex from "../img/flex.png";
import decoration from "../img/decoration.png";

class AboutUs extends Component{
    render() {
        return(
            <Container className="about">
                <h3><strong>Почему клиенты выбирают нас?</strong></h3>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card className="crd" border="light" style={{backgroundColor: "#FBFFE4"}}>
                            <Card.Img variant="top" src={natural}/>
                            <Card.Body>
                                <Card.Title>Натуральность</Card.Title>
                                <Card.Text>Выполняем торты только из натуральных продуктов</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="crd" border="light" style={{backgroundColor: "#FBFFE4"}}>
                            <Card.Img variant="top" src={flex}/>
                            <Card.Body>
                                <Card.Title>Гибкость</Card.Title>
                                <Card.Text>Индивидуально составляем рецепт и меняем его по вашему желанию</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="crd" border="light" style={{backgroundColor: "#FBFFE4"}}>
                            <Card.Img variant="top" src={decoration}/>
                            <Card.Body>
                                <Card.Title>Свежесть</Card.Title>
                                <Card.Text>Для приготовления изделия используем только свежие продукты</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default AboutUs;