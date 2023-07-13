import React from "react";
import product from '../images/product.svg'
import best from '../images/icon-best-item.svg';
import iconNew from '../images/icon-new.svg';
import year from '../images/icon-year.svg'

export default class Product extends React.Component {
constructor(props){
super(props)
}
    render() {
        this.line = this.props.catalog === 'line'
        console.log(`продукт${this.props.product.special}`)
        return (
            <li className={`product ${this.line && 'product_line' }`}>
                <div className={`product__img-container ${this.line && 'product__img-container_lline' }`} >
                    <img className="product__img" src={product} />
                </div>
                <p className={`product__name ${this.line && 'product__name_line' }`}>{this.props.product.name}</p>
                <p className={`product__price ${this.line && 'product__price_line' }`}>{this.props.product.price}</p>
                {this.line && <p className="product__desc">{this.props.product.desc}</p> }
                <button className="product__btn-basket">
                </button>
                <div className="product__icon">
                    <img />
                    <img />
                    <img />
                </div>
            </li>)
    }
}