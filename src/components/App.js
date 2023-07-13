import React, { useEffect, useState } from "react";
import Header from "./Header";
import HeadingSlider from "./HeadingSlider";
import { headingContentList, legacyList, productList } from "../utils/constants";
import Mission from "./Mission";
import Payment from "./Payment";
import Legacy from "./Legacy";
import Catalog from "./catalog";




function App() {
  let i = 2
  const [headingContent, setHeadingContent] = useState(headingContentList[i]);
  const [legacyEl, setLegacyEl] = useState(legacyList.placeHold)


 const switchLegacy =  (el)=> {
  
    setLegacyEl(el)
  }

  const [catalog , setCatalog] =useState('block')

  const switchCatalog = (el)=>{
  console.log(`switch to ${el}`)
  setCatalog(el)
}





  return (
    <main className="main">
      <Header />
      <HeadingSlider headingContent={headingContent} />
      <Mission />
      <Payment />
      <Legacy legacyEl={legacyEl}  switchLegacy={switchLegacy}/>
      <Catalog catalog={catalog} switchCatalog={switchCatalog} productList={productList}/>
    </main>
  );
}

export default App;
