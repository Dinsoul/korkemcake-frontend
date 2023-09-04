import React, {useEffect, useState} from "react";
import Assembly from "../Components/Assembly";
import {Card, Container, Modal} from "react-bootstrap";
import image1 from "../img/cake1.jpg";
import image2 from "../img/cake5.jpg";
import image3 from "../img/cake6.jpg";
import image4 from "../img/cake7.jpg";
import image5 from "../img/cake8.jpg";
import image6 from "../img/cake9.jpg";
import Forms from "../Components/Forms";

const Catalog = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return(
            <Container>
                <h1 className="cath1">Каталог</h1>
                <div className="container cards">
                <div className="row">
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Card className="mb-4 box-shadow border-danger">
                            <img src={image1} variant="top" className="mb-2" alt="img1"/>
                            <Card.Body>
                                <Card.Title className="title1"><strong>"Молочная девочка"</strong></Card.Title>
                                <Card.Text>Нежные коржи со сливочным кремом и с клубничным декором
                                    <p>Вес: 4кг</p>
                                    <p>Цена: 2500руб</p>
                                </Card.Text>
                                <button type="button" onClick={handleShow}>Заказать</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Card className="mb-4 box-shadow border-danger">
                            <img src={image2} variant="top" className="mb-2" alt="img2"/>
                            <Card.Body>
                                <Card.Title className="title2"><strong>"Шоколадные капкейки"</strong></Card.Title>
                                <Card.Text>Шоколадные капкейки со сливочно-шоколадным кремом
                                    <p>Вес: 1.5кг</p>
                                    <p>Цена: 1000руб</p>
                                </Card.Text>
                                <button type="button" onClick={handleShow}>Заказать</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Card className="mb-4 box-shadow border-danger">
                            <img src={image3} variant="top" className="mb-2" alt="img3"/>
                            <Card.Body>
                                <Card.Title className="title3"><strong>"Красный бархат"</strong></Card.Title>
                                <Card.Text>Нежный бисквит с шоколадным кремом и клубничным декором
                                    <p>Вес: 3кг</p>
                                    <p>Цена: 1500руб</p>
                                </Card.Text>
                                <button type="button">Заказать</button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Card className="mb-4 box-shadow border-danger">
                            <img src={image4} variant="top" className="mb-2" alt="img1"/>
                            <Card.Body>
                                <Card.Title className="title1"><strong>"Морковный торт"</strong></Card.Title>
                                <Card.Text>Нежные морковные коржи со сливочным кремом и клубничной начинкой
                                    <p>Вес: 3кг</p>
                                    <p>Цена: 2500руб</p>
                                </Card.Text>
                                <button type="button" onClick={handleShow}>Заказать</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Card className="mb-4 box-shadow border-danger">
                            <img src={image5} variant="top" className="mb-2" alt="img2"/>
                            <Card.Body>
                                <Card.Title className="title2"><strong>"Классические капкейки"</strong></Card.Title>
                                <Card.Text>Классические капкейки с шоколадным кремом и карамельной начинкой
                                    <p>Вес: 1.5кг</p>
                                    <p>Цена: 1000руб</p>
                                </Card.Text>
                                <button type="button" onClick={handleShow}>Заказать</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Card className="mb-4 box-shadow border-danger">
                            <img src={image6} variant="top" className="mb-2" alt="img3"/>
                            <Card.Body>
                                <Card.Title className="title3"><strong>"Трайфлы"</strong></Card.Title>
                                <Card.Text>Трайфлы с классическим бисквитом с бананом и голубикой, покрытый с шоколадным ганашом
                                    <p>Вес: 2кг</p>
                                    <p>Цена: 800руб</p>
                                </Card.Text>
                                <button type="button" onClick={handleShow}>Заказать</button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                </div>
                <Assembly/>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body >
                        <Forms/>
                    </Modal.Body>
                </Modal>
            </Container>
        );
}
export default Catalog;