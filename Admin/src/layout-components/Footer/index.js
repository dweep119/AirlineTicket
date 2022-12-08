import React, { Fragment } from 'react';

import clsx from 'clsx';

import { Paper } from '@material-ui/core';

import { connect } from 'react-redux';

const Footer = props => {
  const { footerFixed } = props;
  return (
    <Fragment>
      <Paper
        square
        className={clsx('app-footer text-black-50', {
          'app-footer--fixed': footerFixed
        })}>
        <div className="app-footer--inner">
          <div className="app-footer--first">
          </div>
          <div className="app-footer--second">
            <span></span>
            © 2022 - developed with <span className="text-danger px-1">❤</span> by{' '}
            <a
              href="https://rmedia.tech/"
              rel="noopener noreferrer"
              target="_blank"
              title="R Media">
              R Media
            </a>
          </div>
        </div>
      </Paper>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  footerFixed: state.ThemeOptions.footerFixed
});
export default connect(mapStateToProps)(Footer);
