import React, { useEffect, useState } from "react";
import Header from "./Header";
import HeadingSlider from "./HeadingSlider";
import { headingContentList, legacyList, productList } from "../utils/constants";
import Mission from "./Mission";
import Payment from "./Payment";
import Legacy from "./Legacy";
import Catalog from "./catalog";




function App() {
  const [headingContent, setHeadingContent] = useState(headingContentList.building);
  const swtichHeadingSlider = (i) => {
    setHeadingContent(i)
  }
  /* const [headingIndex, setHeadingIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (headingIndex + 1) % Object.keys(headingContentList).length;
      setHeadingIndex(nextIndex);
      setHeadingContent(headingContentList[nextIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []); */




  const [legacyEl, setLegacyEl] = useState(legacyList.placeHold)
  const switchLegacy = (el) => {
    setLegacyEl(el)
  }

  const [catalog, setCatalog] = useState('block')

  const switchCatalog = (el) => {
    setCatalog(el)
  }





  return (
    <main className="main">
      <Header />
      <HeadingSlider headingContent={headingContent} swtichHeadingSlider={swtichHeadingSlider} />
      <Mission />
      <Payment />
      <Legacy legacyEl={legacyEl} switchLegacy={switchLegacy} />
      <Catalog catalog={catalog} switchCatalog={switchCatalog} productList={productList} />
    </main>
  );
}

export default App;
