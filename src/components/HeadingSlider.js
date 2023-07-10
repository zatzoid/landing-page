import React from "react";


export default function HeadingSlider(props) {

    return (
        <div className={` hs-wrapper ${props.headingContent.background}`}>
            <div className="hs-content">
                <p className="hs-paragraph">{props.headingContent.paragraph}</p>
                <h1 className="hs-heading">{props.headingContent.heading}</h1>
                <h2 className="hs-subtitle">{props.headingContent.subhead}</h2>
                <a><button className="hs-btn">ЗАКАЗАТЬ</button></a>
            </div>
        </div>
    )
}