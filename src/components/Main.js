import React from "react";
import Mission from "./Mission";
import Payment from "./Payment";
import Legacy from "./Legacy";
import Catalog from "./catalog";
import HeadingSlider from "./HeadingSlider";

export default function Main({headingContent, swtichHeadingSlider, legacyEl, switchLegacy, catalog, switchCatalog,  productList}) {

    return (
        <>
            <HeadingSlider headingContent={headingContent} swtichHeadingSlider={swtichHeadingSlider} />
            <Mission />
            <Payment />
            <Legacy legacyEl={legacyEl} switchLegacy={switchLegacy} />
            <Catalog catalog={catalog} switchCatalog={switchCatalog} productList={productList} />


        </>

    )
}