import React from "react";
import missionImg from '../images/mission.png'

export default function Mission() {

    return (
        <div className="mission-wrapper">
            <div className="mission">
                <img src={missionImg} className="mission__img" />
                <h2 className="mission__heading">Наша миссия</h2>
                <p className="mission__text">Мы стремимся к созданию самых надежных и крутецких зданий по самым высоким стандартам качества</p>
                <h3 className="mission__grid-head">Наши условия</h3>
                <ul className="mission__grid">
                    <li className="mission__grid-el"><span className="mission__grid-el-span">01</span>Ответ на заявку в течении часа или пицца бесплатно + 2 додстера в подарок</li>
                    <li className="mission__grid-el"><span className="mission__grid-el-span">02</span>Все официально, ну прям все, даже просто строитель не сможет вас обмануть</li>
                    <li className="mission__grid-el"><span className="mission__grid-el-span">03</span>Собственное производство. Производим все сами из собственных материалов, на собственных заводах, собственными рабочими</li>
                    <li className="mission__grid-el"><span className="mission__grid-el-span">04</span>Самые строительные строители. много много много текста</li>
                    <li className="mission__grid-el"><span className="mission__grid-el-span">05</span>Ну крутые условия, что тут еще сказать?</li>
                </ul>
            </div>
        </div>


    )


}