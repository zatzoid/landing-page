import React, { useEffect, useState } from "react";
import { headingContentList } from "../utils/constants";
import imgBuild from '../images/building1.png'
import imgMine from '../images/building2.png'
import imgWork from '../images/building3.png'
import imgTime from '../images/building4.png'

export default function HeadingSlider(props) {
    const [choicenBlock, setChoicenBlock] = useState(props.headingContent.name)
    const [renderText, setRenderText] = useState(true)
    const [textValue, setTextValue] = useState(props.headingContent)
    useEffect(() => {
        setChoicenBlock(props.headingContent.name)
        setRenderText(false)

        setTimeout(() => {

            setRenderText(true)
        }, 500)
        setTimeout(() => {
            setTextValue(props.headingContent)
        }, 500)

    }, [props.headingContent])

    return (
        <div className={` hs-wrapper `}>
            <img
                className={`hs__img-background ${choicenBlock.includes('building') && 'hs-el_active'}`} src={imgBuild} />
            <img
                className={`hs__img-background ${choicenBlock.includes('minecraft') && 'hs-el_active'}`} src={imgMine} />
            <img
                className={`hs__img-background ${choicenBlock.includes('worker') && 'hs-el_active'}`} src={imgWork} />
            <img
                className={`hs__img-background ${choicenBlock.includes('time') && 'hs-el_active'}`} src={imgTime} />
            <div className={`hs-content ${renderText && 'hs-el_active'}`}>
                <p className='hs-paragraph' >{textValue.paragraph}</p>
                <h1 className='hs-heading'>{textValue.heading}</h1>
                <h2 className='hs-subtitle'>{textValue.subhead}</h2>
                {choicenBlock.includes('building') && <a><button className="hs-btn">ЗАКАЗАТЬ</button></a>}
            </div>
            <div className="hs-slider__switch-btn-block">
                <button onClick={() => { props.swtichHeadingSlider(headingContentList.building) }}
                    className={`hs-slider__switch-btn ${choicenBlock.includes('building') && 'hs-slider__switch-btn_active'}`} ></button>
                <button onClick={() => { props.swtichHeadingSlider(headingContentList.minecraft) }}
                    className={`hs-slider__switch-btn ${choicenBlock.includes('minecraft') && 'hs-slider__switch-btn_active'}`} ></button>
                <button onClick={() => { props.swtichHeadingSlider(headingContentList.worker) }}
                    className={`hs-slider__switch-btn ${choicenBlock.includes('worker') && 'hs-slider__switch-btn_active'}`} ></button>
                <button onClick={() => { props.swtichHeadingSlider(headingContentList.time) }}
                    className={`hs-slider__switch-btn ${choicenBlock.includes('time') && 'hs-slider__switch-btn_active'}`} ></button>

            </div>
        </div>
    )
}