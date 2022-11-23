import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";

import { Paper } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import AddIcon from '@material-ui/icons/Add';
function PageTitle(props) {
  const history = useHistory();

  // eslint-disable-next-line
  const [open, setOpen] = React.useState(false);

  return (
    <Fragment>
      <Paper square elevation={2} className="app-page-title">
        <div>
          <div className="app-page-title--first">
            <div className="app-page-title--heading">
              <div style={{ display: 'flex' }}>
                {
                  props.back && props.route ?
                    <ArrowBackIosIcon style={{ margin: 'auto', cursor: "pointer" }} onClick={() => history.push(props.route)} />
                    : null
                }
                <h1>{props.titleHeading}</h1>
                <div className="app-page-title--description">
                  {props.titleDescription}
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          props.add ?
            <div className="d-flex align-items-center">
              <div className="speedial-wrapper">
                <SpeedDial
                  ariaLabel="SpeedDial menu"
                  icon={<SpeedDialIcon openIcon={<AddIcon />} />}
                  onClick={() => history.push(props.route)}
                  open={open}>
                </SpeedDial>
              </div>
            </div>
            : null
        }
      </Paper>
    </Fragment>
  );
}

export default PageTitle;
