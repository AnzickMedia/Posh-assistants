import React from "react";
import imagen from  "../../../images/flower.png"
import Styles from "./IconText.module.scss"

export default function IconText() {
    return (
        <div className={Styles.containerIT}>
            <img src={imagen} alt="" width="100px"/>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit,
                sed diam nonummy</p>
        </div>
    );
}