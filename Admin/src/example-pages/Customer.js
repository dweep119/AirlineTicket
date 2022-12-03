import React, { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import { makeStyles } from '@material-ui/core/styles';
import {
  TableBody,
  Table,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  IconButton,
  Box,
  Paper
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { PageTitle } from '../layout-components';
import AlertDialog from '../utils/AlertDialog';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
  height: 100%;
`;
const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
    flexGrow: 1
  }
}));

function TablePaginationActions(props) {
  const classes = useStyles1();

  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page">
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page">
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page">
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page">
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500
  }
});
export default function Customer() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [customer, setCustomer] = React.useState([]);
  const [showComponent, setshowComponent] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(null);
  const { addToast } = useToasts();
  const [loading, setloading] = useState(true);
  let color = "#36373b";
  const history = useHistory();

  useEffect(() => {
    callAPI();
    // eslint-disable-next-line
  }, []);

  const callAPI = () => {
    fetch('https://api.prathamtour.com/api/airline-tickets').then(response => response.json())
      .then(data => {
        console.log('data: ', data);
        setCustomer(data['data']);
        setloading(false);
      })
      .catch((error) => {
        // callAPI();
      });
  }

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, customer.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const onDeleteButtonClick = (value) => {
    setshowComponent(value);
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onAlertActionClick = (value) => {
    if (value) {
      // const finalData = new FormData();
      // finalData.append("id", selectedId);
      // finalData.append("isDelete", "Yes");

      const requestOptions = {
        method: 'DELETE',
      };
      fetch(`https://api.prathamtour.com/api/airline-tickets/${selectedId}`, requestOptions).then(response => response.json())
        .then(data => {
         
          if (data.status) {
            callAPI();
            setshowComponent(false);
            addToast(data.message, {
              appearance: 'success',
              autoDismiss: true,
            })
          }
        })
        .catch((error) => {
          console.log('error: ', error);
        });
    } else {
      setshowComponent(false);

    }
  }
  if (loading)
    return <div className='loaderClass'><HashLoader color={color} loading={loading} css={override} size={100} /></div>
  return (
    <Fragment>
      <PageTitle
        titleHeading="Customer"
        add={true}
        route='/addcustomer'
      />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell >Air Line</TableCell>
              <TableCell >Customer Name</TableCell>
              <TableCell >PNR No.</TableCell>
              <TableCell >From</TableCell>
              <TableCell >Depature Date</TableCell>
              <TableCell >Depature Time</TableCell>
              <TableCell >To</TableCell>
              <TableCell >Arrival Date</TableCell>
              <TableCell >Arrival Time</TableCell>
              <TableCell >Flight No.</TableCell>
              <TableCell >Flight Fare</TableCell>
              <TableCell >Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? customer.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : customer
            ).map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.attributes.airlineName}</TableCell>
                <TableCell>{row.attributes.customerName}</TableCell>
                <TableCell>{row.attributes.pnrNo}</TableCell>
                <TableCell>{row.attributes.from}</TableCell>
                <TableCell>{row.attributes.depDate}</TableCell>
                <TableCell>{row.attributes.depTime}</TableCell>
                <TableCell>{row.attributes.to}</TableCell>
                <TableCell>{row.attributes.arrDate}</TableCell>
                <TableCell>{row.attributes.arrTime}</TableCell>
                <TableCell>{row.attributes.flightNo}</TableCell>
                <TableCell>{row.attributes.flightFare}</TableCell>
                <TableCell>
                  <Box>
                    <div className='d-flex'>
                      <FontAwesomeIcon icon={['fas', 'pen']} style={{ fontSize: "15px", cursor: "pointer", color: "#5383ff" }} onClick={() => history.push({ pathname: '/editcustomer', state: row })} />
                      <div className='vertical-divider'></div>
                      <FontAwesomeIcon icon={['fas', 'trash']} style={{ fontSize: "15px", cursor: "pointer", color: "#f83245" }} onClick={() => { onDeleteButtonClick(true); setSelectedId(row.id) }} />
                    </div>
                  </Box>
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={12} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={12}
                count={customer.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      {
        showComponent ?
          <AlertDialog open={showComponent} setopen={onAlertActionClick}></AlertDialog>
          : null
      }
    </Fragment>
  );
}