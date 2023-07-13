import React, { useEffect, useState } from "react";
import legacyMain from '../images/legacy1.jpg';
import legacyChina from '../images/legacy2.jpeg';
import legacyGer from '../images/legacy3.jpg';
import { legacyList } from "../utils/constants";


export default function Legacy(props) {
    const [legacyDescClass, setLegacyDescClass] = useState("legacy__desc legacy__desc_transform-right");
//добавление и удаление трансформа с таймаутом
    useEffect(() => { 
        if (legacyDescClass === "legacy__desc legacy__desc_transform-right") {
            setLegacyDescClass("legacy__desc");
            setTimeout(() => {
                setLegacyDescClass("legacy__desc legacy__desc_transform-right");
            }, 500);
        }
    }, [props.legacyEl]);

    const [renderText, setRenderText] = useState(props.legacyEl)
    //замена текста через 250, для красоты, что бы текст менялся за кулисами
    useEffect(() => { 

        setTimeout(() => {
            setRenderText(props.legacyEl)
        }, 250)


    }, [props.legacyEl])


    return (
        <div className="legacy-wrapper">
            <ul className="legacy">
                <li className="legacy__el-desc">
                    <h2 className="legacy__heading">Наши объекты</h2>
                    <div className="legacy__desc-container">
                        <p className={legacyDescClass}>{renderText}</p>

                    </div>

                </li>
                <li className="legacy__el">
                    <div className="legacy__el-img-container" onClick={() => { props.switchLegacy(legacyList.minecraft) }}>
                        <img className={`legacy__el-img ${props.legacyEl === legacyList.minecraft ? 'legacy__el-img_active' : ''}`} src={legacyMain} />
                        <p className={`legacy__el-name ${props.legacyEl === legacyList.minecraft ? 'legacy__el-name_active' : ''}`}>Домик в майнкрафте</p>
                    </div>
                    <div className="legacy__el-img-container" onClick={() => { props.switchLegacy(legacyList.china) }}>
                        <img className={`legacy__el-img ${props.legacyEl === legacyList.china ? 'legacy__el-img_active' : ''}`} src={legacyChina} />
                        <p className={`legacy__el-name ${props.legacyEl === legacyList.china ? 'legacy__el-name_active' : ''}`}>Китайская стена</p>
                    </div>
                    <div className="legacy__el-img-container" onClick={() => { props.switchLegacy(legacyList.german) }}>
                        <img className={`legacy__el-img ${props.legacyEl === legacyList.german ? 'legacy__el-img_active' : ''}`} src={legacyGer} />
                        <p className={`legacy__el-name ${props.legacyEl === legacyList.german ? 'legacy__el-name_active' : ''}`}>Домик в германии</p>
                    </div>
                </li>
            </ul>

        </div >
    )



}