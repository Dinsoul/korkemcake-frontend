import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import image1 from "../img/cake10.jpg";
import image2 from "../img/cake11.jpg";
import image3 from "../img/cake4.jpg";
import '../App.css';

class Cards extends Component {
    render() {
        return (
            <div className="container cards">
                <h3><strong>Примеры наших работ</strong></h3>
                <div className="row">
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Card className="mb-4 box-shadow border-danger">
                            <img src={image1} variant="top" className="mb-2" alt="img1"/>
                            <Card.Body>
                                <Card.Title className="title1"><strong>"Молочная девочка"</strong></Card.Title>
                                <Card.Text>Нежные коржи со сливочным кремом и клубничной начинкой
                                    <p>Вес: 4кг</p>
                                    <p>Цена: 2500руб</p>
                              </Card.Text>
                                <button type="button" onClick={() => document.getElementById("makeOrder").scrollIntoView()}>
                                    Заказать</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Card className="mb-4 box-shadow border-danger">
                            <img src={image2} variant="top" className="mb-2" alt="img2"/>
                            <Card.Body>
                                <Card.Title className="title2"><strong>"Красный бархат"</strong></Card.Title>
                                <Card.Text>Нежный бисквит с шоколадным кремом и арахисовой начинкой
                                    <p>Вес: 1.5кг</p>
                                    <p>Цена: 1000руб</p>
                                </Card.Text>
                                <button type="button" onClick={() => document.getElementById("makeOrder").scrollIntoView()}>Заказать</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 d-flex align-items-stretch">
                    <Card className="mb-4 box-shadow border-danger">
                    <img src={image3} variant="top" className="mb-2" alt="img3"/>
                    <Card.Body>
                        <Card.Title className="title3"><strong>"Вупипай"</strong></Card.Title>
                        <Card.Text>Медовый бисквит со сливочным кремом и фруктовой начинкой
                            <p>Вес: 3кг</p>
                            <p>Цена: 1500руб</p>
                        </Card.Text>
                        <button type="button" onClick={() => document.getElementById("makeOrder").scrollIntoView()}>Заказать</button>
                    </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;