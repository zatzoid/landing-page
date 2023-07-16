import React, { useState } from "react";
import logo from '../images/logo.png'
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const [showMenu, setShowMobile] = useState(false)
    function switchMenu() {
        if (!showMenu) {
            setShowMobile(true)
        }
        else {
            setShowMobile(false)
        }
    }

    return (<div className="header">

        <div className="header__container">
            <p className="header__adres">Москва, ул.Пушкина, д.Колотушкина </p> {/* before img */}
            <Link to='/'><img className="header__logo" src={logo} /></Link>
        </div>

        <div className={`header__nav ${showMenu && 'header__nav_active'}`}>
            <button onClick={()=>{switchMenu()}} className="header__nav-menu-btn"></button>
            <NavLink to='/menu' onClick={()=>{switchMenu()}} className={({ isActive }) => ` header__nav-el ${isActive ? "header__nav-el_active" : ""}`}>Продукция</NavLink>
            <NavLink to='/about' onClick={()=>{switchMenu()}} className={({ isActive }) => ` header__nav-el ${isActive ? "header__nav-el_active" : ""}`}>О компании</NavLink>
            <NavLink to='/feedback' onClick={()=>{switchMenu()}} className={({ isActive }) => ` header__nav-el ${isActive ? "header__nav-el_active" : ""}`}>Отзывы</NavLink>
            <NavLink to='contacts' onClick={()=>{switchMenu()}} className={({ isActive }) => ` header__nav-el ${isActive ? "header__nav-el_active" : ""}`}>Контакты</NavLink>
        </div>
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