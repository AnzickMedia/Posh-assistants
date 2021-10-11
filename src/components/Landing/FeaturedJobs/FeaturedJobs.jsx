import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './FeaturedJobs.module.scss';
import imagen from '../../../images/home-background-featured-B.png'
import Card from '../../Card/Card';
import * as ROUTES from '../../../constants/routes';

export default function FeaturedJobs() {
    return (
        <div className={Styles.features}>
            <div className={Styles.imagecontainer}>
                {/* <img src={imagen} alt="" /> */}
            </div>
            <div className={Styles.jobs}>
                <h1 >Featured Jobs</h1>
                <Card />
                <Card />
                <Card />
                <Link className={Styles.more} to={ROUTES.LANDING}>
                    APPLY NOW
                </Link>
            </div>
        </div>
    );
}
