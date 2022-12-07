import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Avatar,
  Box,
  Menu,
  Button,
  List,
  ListItem,
  Divider
} from '@material-ui/core';
import { useHistory } from "react-router-dom";

import { setUserData } from '../..//reducers/ThemeOptions';


import avatar4 from '../../assets/images/avatars/avatar4.jpg';
function HeaderUserbox(props) {

  const {
    setUserData
  } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSignOutClick = async e => {
    e.preventDefault();
    localStorage.removeItem('token');
    setUserData(null);
    history.push('/login');
    // console.log('props: ', props);
    // window.location.reload(false);
  }

  return (
    <Fragment>
      <Button
        color="inherit"
        onClick={handleClick}
        className="text-capitalize px-3 text-left btn-inverse d-flex align-items-center">
        <Box>
          <Avatar sizes="44" alt="Emma Taylor" src={avatar4} />
        </Box>
        <div className="d-none d-xl-block pl-3">
          <div className="font-weight-bold pt-2 line-height-1">Tushar Patel</div>
          <span className="text-white-50">Director (Pratham Tours)</span>
        </div>
        <span className="pl-1 pl-xl-3">
          <FontAwesomeIcon icon={['fas', 'angle-down']} className="opacity-5" />
        </span>
      </Button>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        onClose={handleClose}
        className="ml-2">
        <div className="dropdown-menu-right dropdown-menu-lg overflow-hidden p-0">
          <List className="text-left bg-transparent d-flex align-items-center flex-column pt-0">
            <Box>
              <Avatar sizes="44" alt="Emma Taylor" src={avatar4} />
            </Box>
            <div className="pl-3  pr-3">
              <div className="font-weight-bold text-center pt-2 line-height-1">
              Dweep Patel
              </div>
              <span className="text-black-50 text-center">
              Director (AirlineTicket)
              </span>
            </div>
            <Divider className="w-100 mt-2" />
            {/* <ListItem button>My Account</ListItem>
            <ListItem button>Profile settings</ListItem> */}
            <Divider className="w-100" />
            <ListItem button onClick={onSignOutClick}>Sign out</ListItem>
          </List>
        </div>
      </Menu>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  userData: state.ThemeOptions.userData
});

const mapDispatchToProps = dispatch => ({
  setUserData: data => dispatch(setUserData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUserbox);
