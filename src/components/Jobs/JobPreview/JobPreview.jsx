import React from 'react';
import Styles from './JobPreview.module.scss'

export default function JobPreview({ Title = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", image=null, salary=0, description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at", schedule="Full time" }) {
    return (
        <div className={Styles.container}>
            <img src="" alt="" />
            <div>
                <h2>{Title}</h2>
                <div>
                    <h3>${salary}USD</h3>
                    <div>
                        <p>{schedule} <img src="" alt="" /></p>
                        <p>Salt Lake City, UT <img src="" alt="" /></p>
                    </div>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
}