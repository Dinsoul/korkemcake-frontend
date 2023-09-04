import React, {Component, useState} from 'react';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import classic from "../img/classic.jpg";
import choco from "../img/chocolate.jpg";
import carrot from "../img/morkovnyy-biskvit.jpg";
import redvelvet from "../img/redvelvet.jpg";
import creamy from "../img/creamy.jpg";
import chococream from "../img/choco-krem.jpg";
import strawberry from "../img/klubnichnaya.jpg";
import peanut from "../img/peanut-caramel.jpg";

const Assembly = () => {
        return (
            <Container style={{width: "1200px"}}>
                <p className="txtas">Не нашли подходящего торта?</p>
                <p className="txtas">Вы сможете сами создать и написать нам!</p>
                <Row>
                    <Col className="col-md-4">
                        <p className="txttab"><b>Бисквит 1</b></p>
                    </Col>
                    <Col className="col-md-8">
                        <Carousel>
                            <Carousel.Item>
                                <img className="imagefa"
                                     src={classic}
                                alt="classic"/>
                                <Carousel.Caption>
                                    <p className="txttab">Классический</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imagefa"
                                     src={choco}
                                alt="choco"/>
                                <Carousel.Caption>
                                    <p className="txttab">Шоколадный</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imagefa"
                                     src={carrot}
                                alt="carrot"/>
                                <Carousel.Caption>
                                    <p className="txttab">Морковный</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imagefa"
                                     src={redvelvet}
                                alt="redvelvet"/>
                                <Carousel.Caption>
                                    <p className="txttab">Красный</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="col-md-4">
                        <p className="txttab"><b>Начинка 1</b></p>
                    </Col>
                    <Col className="col-md-8">
                        <Carousel>
                            <Carousel.Item>
                                <img className="imgfill"
                                     src={creamy}
                                     alt="creamy"/>
                                <Carousel.Caption >
                                    <p className="txttab">Сливочный</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imgfill"
                                     src={chococream}
                                     alt="chococream"/>
                                <Carousel.Caption>
                                    <p className="txttab">Шоколадный</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imgfill"
                                     src={strawberry}
                                     alt="strawberry"/>
                                <Carousel.Caption>
                                    <p className="txttab">Клубничный</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imgfill"
                                     src={peanut}
                                     alt="peanut"/>
                                <Carousel.Caption>
                                    <p className="txttab">Карамель-Арахис</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="col-md-4">
                        <p className="txttab"><b>Бисквит 2</b></p>
                    </Col>
                    <Col className="col-md-8">
                        <Carousel>
                            <Carousel.Item>
                                <img className="imagefa"
                                     src={classic}
                                     alt="classic"/>
                                <Carousel.Caption>
                                    <p className="txttab">Классический</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imagefa"
                                     src={choco}
                                     alt="choco"/>
                                <Carousel.Caption>
                                    <p className="txttab">Шоколадный</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imagefa"
                                     src={carrot}
                                     alt="carrot"/>
                                <Carousel.Caption>
                                    <p className="txttab">Морковный</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imagefa"
                                     src={redvelvet}
                                     alt="redvelvet"/>
                                <Carousel.Caption>
                                    <p className="txttab">Красный</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="col-md-4">
                        <p className="txttab"><b>Начинка 2</b></p>
                    </Col>
                    <Col className="col-md-8">
                        <Carousel>
                            <Carousel.Item>
                                <img className="imgfill"
                                     src={creamy}
                                     alt="creamy"/>
                                <Carousel.Caption >
                                    <p className="txttab">Сливочный</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imgfill"
                                     src={chococream}
                                     alt="chococream"/>
                                <Carousel.Caption>
                                    <p className="txttab">Шоколадный</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imgfill"
                                     src={strawberry}
                                     alt="strawberry"/>
                                <Carousel.Caption>
                                    <p className="txttab">Клубничный</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imgfill"
                                     src={peanut}
                                     alt="peanut"/>
                                <Carousel.Caption>
                                    <p className="txttab">Карамель-Арахис</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="col-md-4">
                        <p className="txttab"><b>Бисквит 3</b></p>
                    </Col>
                    <Col className="col-md-8">
                        <Carousel>
                            <Carousel.Item>
                                <img className="imagefa"
                                     src={classic}
                                     alt="classic"/>
                                <Carousel.Caption>
                                    <p className="txttab">Классический</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imagefa"
                                     src={choco}
                                     alt="choco"/>
                                <Carousel.Caption>
                                    <p className="txttab">Шоколадный</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imagefa"
                                     src={carrot}
                                     alt="carrot"/>
                                <Carousel.Caption>
                                    <p className="txttab">Морковный</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imagefa"
                                     src={redvelvet}
                                     alt="redvelvet"/>
                                <Carousel.Caption>
                                    <p className="txttab">Красный</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        );
}

export default Assembly;