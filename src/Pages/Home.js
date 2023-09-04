import React, {Component} from 'react';
import '../App.css';
import Cards from "../Components/Cards";
import Carousels from "../Components/Carousels";
import Forms from "../Components/Forms";
import AboutUs from "../Components/AboutUs";

class Home extends Component {
    render() {
        return (
            <div className="container home">
                <div className="row">
                    <div className="col-12 col-lg-6">
                       <h1 className="text-lg-left"><strong>Korkem Cake</strong></h1>
                       <p className="p1 md lh-sm">Мы печем вкусные торты, используя только натуральные и свежие ингридиенты </p>
                       <p className="p2"> Порадуйте себя и своих близких</p>
                    <button type="button" onClick={() => document.getElementById("makeOrder").scrollIntoView()}>Заказать</button>
                    </div>
                <div className="col d-flex justify-content-md-center">
                    <Carousels/>
                </div>
                </div>
                <AboutUs/>
                <Cards/>
                <div><h2 className="formHead"><strong id="makeOrder">Закажите торт прямо сейчас</strong></h2></div>
                <Forms/>
            </div>
        );
    }
}

export default Home;