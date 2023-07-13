import React from "react";
import Product from "./Product";


export default function Catalog(props) {


    return (
        <div className="catalog-wrapper">
            <div className="catalog">
                <div className="catalog__info">
                    <h2 className="catalog__heading">Товары</h2>
                    <button className="catalog__btn catalog__btn_block" onClick={() => { props.switchCatalog('block') }}> </button>
                    <button className="catalog__btn catalog__btn_line" onClick={() => { props.switchCatalog('line') }}></button>
                </div>
                <ul className={`catalog__grid ${props.catalog === 'line' ? 'catalog__grid_line' : ''}`}>
                    {props.productList && props.productList.map((product) => (<Product product={product} catalog={props.catalog} key={product.name}/>))}


                </ul>

            </div>

        </div>
    )

}