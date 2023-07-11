import React from "react";
import click from '../images/monito-click.svg'
import payment from '../images/payment.svg'
import time from '../images/time-date.svg'
import delivery from '../images/delivery.svg'

export default function Payment() {
    return (
        <div className="payment-wrapper">
            <div className="payment">
                <h2 className="payment__heading">Как мы работаем</h2>
                <ul className="payment__grid">
                    <li className="payment__el">
                        <img className="payment__el-img" src={click} />
                        <h3 className="payment__el-head">Заявка</h3>
                        <p className="payment__el-text">Вы отправляете нам заявку</p>
                    </li>
                    <li className="payment__el">
                        <img className="payment__el-img" src={payment}/>
                        <h3 className="payment__el-head">Оплата</h3>
                        <p className="payment__el-text"> Оплачиваете ее</p>
                    </li>
                    <li className="payment__el">
                        <img className="payment__el-img" src={time}/>
                        <h3 className="payment__el-head">Расчет сроков</h3>
                        <p className="payment__el-text">Мы расчитываем сроки</p>
                    </li>
                    <li className="payment__el">
                        <img className="payment__el-img" src={delivery}/>
                        <h3 className="payment__el-head">Доставка</h3>
                        <p className="payment__el-text">И доставляем вам на объект</p>
                    </li>

                </ul>
            </div>

        </div>

    )


}