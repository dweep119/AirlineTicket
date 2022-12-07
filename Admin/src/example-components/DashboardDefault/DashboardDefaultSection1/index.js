import React, { Fragment, useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, CardContent, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
  height: 100%;
  
`;

export default function LivePreviewExample() {


  const history = useHistory();
  const [customerLength, setCustomerLength] = React.useState(0);
  const [revenue, setRevenue] = React.useState(0);
  const [tickets, setTickets] = React.useState(0);
  const [loading, setloading] = useState(true);
  let color = "#167bff";


  useEffect(() => {
    callAPI();
    // eslint-disable-next-line
  }, []);

  const callAPI = () => {
    fetch('https://api.prathamtour.com/api/airline-tickets?populate=*').then(response => response.json())
      .then(data => {
        let cusLen = data['data'];
        let total = 0;
        if (cusLen.length > 0) {
          // eslint-disable-next-line
          cusLen.map(item => {
            let price = item.attributes.flightFare;
            total = total + Math.round(price);
          })
          setRevenue(total);
        }
        setCustomerLength(cusLen.length);
        setloading(false);

        callAPIForTickets();
      })
      .catch((error) => {
        // callAPI();
      });
  }

  const callAPIForTickets = () => {
    fetch('https://api.prathamtour.com/api/upload/files').then(response => response.json())
      .then(data => {
        setTickets(data.length);
        setloading(false);
      })
      .catch((error) => {
        // callAPI();
      });
  }

  if (loading)
    return <div className='loaderClass'><HashLoader color={color} loading={loading} css={override} size={100} style={{ 'height': '300px' }} /></div>
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box bg-premium-dark border-0 text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Total Amount
                  </small>
                  <span className="font-size-xxl mt-1">{revenue}</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-success d-50 rounded-circle d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box bg-midnight-bloom text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Total Tickets
                  </small>
                  <span className="font-size-xxl mt-1">{tickets}</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-primary d-50 rounded-circle d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={['far', 'lightbulb']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card-box bg-plum-plate text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Total Airlines
                  </small>
                  <span className="font-size-xxl mt-1">5</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-primary d-50 rounded-circle d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4}>
          <Card className="card-box mb-4">
            <CardContent className="p-0">
              <Grid container spacing={4} className="mt-4">
                <Grid item xs={12} sm={12}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">{customerLength}</b>
                      <span className="text-black-50 d-block">Customers</span>
                    </div>
                  </div>
                </Grid>
                {/* <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">3,568</b>
                      <span className="text-black-50 d-block">Appointments</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-xxl text-info"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">$9,693</b>
                      <span className="text-black-50 d-block">Revenue</span>
                    </div>
                  </div>
                </Grid> */}
              </Grid>
              <div className="divider mt-4" />
              <div className="text-center py-4">
                <Button variant="outlined" size="small" color="primary" className='mr-2' onClick={() => history.push('/addcustomer')}>
                  <span className="btn-wrapper--label">Add Customer</span>
                </Button>
                <Button variant="outlined" size="small" color="primary" onClick={() => history.push('/customer')}>
                  <span className="btn-wrapper--label">Customer History</span>
                </Button>
              </div>
            </CardContent>
            {/* <div className="card-footer bg-light text-center">
              <div className="pt-4 pr-4 pl-4">
                <Chart
                  options={chart30Options}
                  series={chart30Data}
                  type="line"
                  height={100}
                />
              </div>
            </div> */}
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
