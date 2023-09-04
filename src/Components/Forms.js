import React from 'react';
import '../App.css';
import {useForm} from "react-hook-form";
import http from "../url/http-url";
import { ErrorMessage } from "@hookform/error-message";

const Forms = () => {

    const {register, formState:{errors, isValid}, handleSubmit, reset} = useForm({
        mode: "onBlur"
    });


    const onSubmit = (data) => {
        http.post("/orders", data).then((response) => {
            console.log(response.status, response.data);
            alert("Ваш заказ принят!");
            reset();
        })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log("server responded");
                } else if (error.request) {
                    console.log("network error");
                } else {
                    console.log(error);
                    alert("Ваш заказ отклонен!")
                }
            });
    };


    return (
        <div className="container form" style={{width:"470px"}}>
                <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="FormControlInput1" className="form-label">Имя</label>
                    <input type="text" className="form-control" placeholder="Введите ваше имя"
                           {...register("client.name",{
                               required:"Обязательное поле",
                               pattern: /^[a-zA-Zа-яА-Я]+$/ui
                           })}/>
                    <ErrorMessage errors={errors} name="client.name" render={({ message }) => <p style={{color:'red'}}>
                        {message || 'Имя не может содержать цифры'}</p>}/>
                </div>
                <div className="form-group">
                    <label htmlFor="FormControlInput2" className="form-label">Номер телефона</label>
                    <input type="tel" className="form-control" placeholder="+7-777-777-77-77"
                           {...register("client.telNumber",{
                               required:"Обязательное поле",
                               pattern: /^([+]?[0-9\s-\(\)]{3,25})*$/i
                           })}/>
                    <ErrorMessage errors={errors} name="client.telNumber" render={({ message }) => <p style={{color:'red'}}>
                        {message || 'Номер имеет неправильный формат'}</p>}/>
                </div>
                <div className="form-group">
                    <label htmlFor="FormControlInput3" className="form-label">Вид торта</label>
                    <select className="form-select" aria-label="Default select"
                            {...register("cakeType.cakeName",{
                                required:"Обязательное поле"
                            })}>
                        <option>Выберите из выпадающего списка</option>
                        <option value="Молочная девочка">Молочная девочка</option>
                        <option value="Шоколадные капкейки">Шоколадные капкейки</option>
                        <option value="Красный бархат">Красный бархат</option>
                        <option value="Трайфлы">Трайфлы</option>
                        <option value="Вупипай">Вупипай</option>
                        <option value="Классические капкейки">Классические капкейки</option>
                        <option value="Морковный торт">Морковный торт</option>
                    </select>
                    <ErrorMessage errors={errors} name="cakeType.cakeName" render={({ message }) => <p style={{color:'red'}}>{message}</p>}/>
                </div>
                <div className="form-group">
                    <label htmlFor="FormControlInput4" className="form-label">Вec</label>
                    <select className="form-select" aria-label="Default select"
                            {...register("weight",{
                                required:"Обязательное поле"
                            })}>
                        <option>Выберите из выпадающего списка (кг)</option>
                        <option value="1.5">1.5</option>
                        <option value="2">2</option>
                        <option value="2.5">2.5</option>
                        <option value="3">3</option>
                        <option value="3.5">3.5</option>
                        <option value="4">4</option>
                    </select>
                    <div style={{color:'red'}}>{errors?.weight && <p>{errors?.weight?.message}</p>}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="FormControlInput5" className="form-label">Дата</label>
                    <input type="date" className="form-control"
                           {...register("date",{
                        required:"Обязательное поле"
                    })}/>
                    <div style={{color:'red'}}>{errors?.date && <p>{errors?.date?.message}</p>}</div>
                </div>
                    <div className="form-group">
                    <button type="submit" disabled={!isValid}>Заказать</button>
                    </div>
                </form>
            </div>
        );
}

export default Forms;