import React from 'react';
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
    
  </div>
);

export default Landing;
