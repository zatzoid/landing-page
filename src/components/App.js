import React, { useEffect, useState } from "react";

import Header from "./Header";

import { headingContentList, legacyList, productList } from "../utils/constants";

import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./Main";
import Menu from "./menu";
import About from "./About";
import FeedBack from "./FeedBack";
import Contacts from "./Contacts";
import Error from "./Error";





function App() {
  const [headingContent, setHeadingContent] = useState(headingContentList.building);
  const swtichHeadingSlider = (i) => {
    setHeadingContent(i)
  }

  useEffect(() => {
    setTimeout(() => {
      swtichHeadingSlider(headingContentList.minecraft)
    }, 3000)



  }, [])

  const [legacyEl, setLegacyEl] = useState(legacyList.placeHold)
  const switchLegacy = (el) => {
    setLegacyEl(el)
  }

  const [catalog, setCatalog] = useState('block')

  const switchCatalog = (el) => {
    setCatalog(el)
  }

  const location = useLocation()
  const [currentPath, setCurrentPath] = useState('')
  useState(() => {
    console.log(currentPath)
    setCurrentPath(location.pathname)
    console.log(currentPath)
  }, [location])

  return (
    <main className="main">
      <Header />
      <Routes>
        <Route path="/menu" element={<Menu catalog={catalog} switchCatalog={switchCatalog} productList={productList} />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/landing-page" element={<Main headingContent={headingContent}
          swtichHeadingSlider={swtichHeadingSlider}
          legacyEl={legacyEl} switchLegacy={switchLegacy}
          catalog={catalog} switchCatalog={switchCatalog}
          productList={productList} />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </main>
  );
}

export default App;
