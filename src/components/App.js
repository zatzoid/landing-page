import React, { useEffect } from "react";
import Header from "./Header";
import HeadingSlider from "./HeadingSlider";
import { headingContentList } from "../utils/constants";
import Mission from "./Mission";
import Payment from "./Payment";
import Legacy from "./Legacy";



function App() {
  let i = 2
  const [headingContent, setHeadingContent] = React.useState(headingContentList[i]);



  return (
    <main className="main">
      <Header />
      <HeadingSlider headingContent={headingContent} />
      <Mission />
      <Payment />
      <Legacy />
    </main>
  );
}

export default App;
