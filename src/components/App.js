import React, { useEffect } from "react";
import Header from "./Header";
import HeadingSlider from "./HeadingSlider";
import { headingContentList } from "../utils/constants";


function App() {
  const [headingContent, setHeadingContent] = React.useState(headingContentList[2]);



  const updateHeadingContent = (obj) => {
    setHeadingContent(obj);
  };
  function swithHeading(list) {
    for (let i = 0; i < list.length; i++) {
      console.log(list[i])
    }
  }
  swithHeading(headingContentList)



  
  function showConsole() {
    console.log(new Date().getSeconds())

  }
  function interval() {
    setInterval(() => { showConsole() }, 2000)
  }
  interval()

  return (
    <main className="main">
      <Header />
      <HeadingSlider headingContent={headingContent} />
    </main>
  );
}

export default App;
