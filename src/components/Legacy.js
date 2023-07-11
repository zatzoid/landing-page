import React from "react";
import legacyMain from '../images/legacy1.jpg'
import legacyChina from '../images/legacy2.jpeg'
import legacyGer from '../images/legacy3.jpg'
export default function Legacy(props) {

    return (
        <div className="legacy-wrapper">
            <ul className="legacy">
                <li className="legacy__el-desc">
                    <h2 className="legacy__heading">Наши объекты</h2>
                    <p className="legacy__desc">текст текст текст тексттекст тексттекст тексттекст тексттекст тексттекст текст текст тексттекст тексттекст тексттекст тексттекст тексттекст тексттекст текст</p>
                </li>
                <li className="legacy__el">
                    <div className="legacy__el-img-container">
                        <img className="legacy__el-img" src={legacyMain} />
                        <p className="legacy__el-name"></p>
                    </div>
                    <div className="legacy__el-img-container">
                        <img className="legacy__el-img" src={legacyChina} />
                        <p className="legacy__el-name"></p>
                    </div>
                    <div className="legacy__el-img-container">
                        <img className="legacy__el-img" src={legacyGer} />
                        <p className="legacy__el-name"></p>
                    </div>
                </li>
            </ul>

        </div>
    )

}