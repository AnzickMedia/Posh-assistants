import React from "react";
import Styles from "./Social.module.scss"

export default function Social({brandlogo, brandname}) {
    return (
        <div className={Styles.social}>
            <img src={brandlogo} alt="" />
            <p>{brandname}</p>
        </div>
    );
}