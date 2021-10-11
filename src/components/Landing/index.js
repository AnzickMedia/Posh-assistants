import React from 'react';
import Card from '../Card/Card';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';
import Styles from './Home.module.scss'
import IconText from './IconText/IconText';
import logo from '../../images/POSH-logo-02.png'

const Landing = () => (
  <div>
    <div className={Styles.banner}>
      <img src={logo} alt="" />
      <h1>THE PERFECT <br />MATCH</h1>
    </div>
    <div className={Styles.homeinfo}>
      <IconText />
      <IconText />
      <IconText />
    </div>
    <FeaturedJobs />
    <div className={Styles.testimonials}>
      <img src="" alt="" />
    </div>
    <div className={Styles.subscribe}>
      <h2>
        Subscribe to our newsletter!
      </h2>
      <input type="text" />
      <button>Subscribe</button>
    </div>
  </div>
);

export default Landing;
