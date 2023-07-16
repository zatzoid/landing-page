import React from "react";
import Catalog from "./catalog";



export default function Menu({catalog, switchCatalog,  productList}){

return(
    <div className="routes">
    <Catalog catalog={catalog} switchCatalog={switchCatalog} productList={productList} />
    </div>
    
    
    )


}