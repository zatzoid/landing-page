import React from "react";
import logo from '../images/logo.png'

export default function Header() {

    return (<div className="header">
        <div className="header__container">
            <p className="header__adres">Москва, ул.Пушкина, д.Колотушкина </p> {/* before img */}
            <img className="header__logo" src={logo} />
        </div>
        <ul className="header__nav">
            <li className="header__nav-el">Продукция</li>
            <li className="header__nav-el">О компании</li>
            <li className="header__nav-el">Отзывы</li>
            <li className="header__nav-el">Контакты</li>
        </ul>
        <div className="header__container">
            <div className="header__container-top">
                <p className="header__telephone">8 (800) 555 35 35</p>
                <a className="header__social header__social_wa" href="#" />
                <a className="header__social header__social_tg" href="#" />
                <a href="#"><button className="header__order-btn">ЗАКАЗАТЬ</button></a>
            </div>
            <div className="header__container-bottom">
                <form className="header__search-form">
                    <input className="header__search" />
                    <button className="header__search-btn" type="submit"></button>
                </form>
                <a href="#"><button className="header__basket-btn"></button></a>
            </div>
        </div>

    </div>)
}