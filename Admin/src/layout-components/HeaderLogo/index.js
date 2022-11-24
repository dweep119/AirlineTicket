import React, { Fragment } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { IconButton, Box } from '@material-ui/core';
import Logo from '../../assets/images/BhavnaToursLogo.png';

const HeaderLogo = props => {
  return (
    <Fragment>
      <div className={clsx('app-header-logo', {})}>
        <Box
          className="header-logo-wrapper"
          title="Airline Ticket">
          <Link to="/staff" className="header-logo-wrapper-link">
            <IconButton
              color="primary"
              size="medium"
              className="header-logo-wrapper-btn">
              <img
                className="app-header-logo-img"
                alt="Airline Ticket"
                src={Logo}
              />
            </IconButton>
          </Link>
          {/* <Box className="header-logo-text">FlyMode Travel</Box> */}
        </Box>
      </div>
    </Fragment>
  );
};

export default HeaderLogo;
