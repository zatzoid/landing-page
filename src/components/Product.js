import React from "react";
import product from '../images/product.svg'
import best from '../images/icon-best-item.svg';
import iconNew from '../images/icon-new.svg';
import year from '../images/icon-year.svg'

export default class Product extends React.Component {
    constructor(props) {
        super(props)
        this.el = this.props.product
    }
    render() {
        this.line = this.props.catalog === 'line'
        return (
            <li className={`product ${this.line && 'product_line'}`}>
                <div className={`product__img-container ${this.line && 'product__img-container_lline'}`} >
                    <img className="product__img" src={product} />
                </div>
                <p className={`product__name ${this.line && 'product__name_line'}`}>{this.el.name}</p>
                <p className={`product__price ${this.line && 'product__price_line'}`}>{this.el.price}</p>
                {this.line && <p className="product__desc">{this.el.desc}</p>}
                <button className="product__btn-basket">
                </button>
                <div className="product__icon">
                    {this.el.special.best && <div className="product__icon-title" data-title="Самый лучший"><img className={`product__icon-el ${this.line && 'product__icon-el_line'}`} src={best} /></div>}
                        {this.el.special.new && <div className="product__icon-title" data-title="Самый новый"><img className={`product__icon-el ${this.line && 'product__icon-el_line'}`} src={iconNew} /></div>}
                            {this.el.special.year && <div className="product__icon-title" data-title="Самый гаранируемый"><img className={`product__icon-el ${this.line && 'product__icon-el_line'}`} src={year} /></div>}
                            </div>
            </li>)
    }
}