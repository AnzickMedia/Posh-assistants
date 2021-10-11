import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import Styles from './nav.module.scss'

import Logo from '../../images/POSH-logo.svg'

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <ul className={Styles.o_nav}>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    {!!authUser.roles[ROLES.ADMIN] && (
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    )}
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul className={Styles.o_nav}>

      <li>
        <Link to={ROUTES.LANDING}><img src={Logo} alt="Logo Posh Assistants" width="200px" /></Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>HOME</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>JOBS</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>ABOUT US</Link>
      </li>
    <div>

    </div>
  </ul>
);

export default Navigation;