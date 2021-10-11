import React from "react";
import logo from "../../images/POSH-logo-03.png"
import Styles from "./Footer.module.scss"
import Social from "./Social/Social";
import instagram from "../../images/instagram.svg"
import facebook from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"
import linkedin from "../../images/linkedin.svg"


export default function Footer() {
    return (
        <div className={Styles.footer}>
            <div className={Styles.footer_info}>
                <div>
                    <h3> Loren ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consec <br /> <br />
                        Lorem ipsum dolor sit amet, consec <br /> <br />
                        Lorem ipsum dolor sit amet, consec <br /> <br />
                        Lorem ipsum dolor sit amet, consec</p>
                </div>
                <div>
                    <h3> Loren ipsum</h3>
                    <Social brandlogo={facebook} brandname="facebook" />
                    <Social brandlogo={instagram} brandname="instagram" />
                    <Social brandlogo={twitter} brandname="twitter" />
                    <Social brandlogo={linkedin} brandname="linkedin" />
                </div>
            </div>
            <img src={logo} alt="" />
        </div>
    );
}