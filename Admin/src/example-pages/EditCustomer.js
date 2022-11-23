import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { useToasts } from 'react-toast-notifications';
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import validator from 'validator'
import {
    Divider,
    Button,
    TextField
} from '@material-ui/core';

import { PageTitle } from '../layout-components';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
  height: 100%;
`;

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        boxShadow: `0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)`,
        borderRadius: '4px',
        background: 'white'

    },
}));


export default function EditCustomer() {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const [data, setData] = React.useState({});
    const [name, setName] = React.useState('');
    const [nameErr, setNameErr] = useState(false);

    const [address, setAddress] = React.useState('');
    const [addressErr, setAddressErr] = useState(false);

    const [phone, setPhone] = React.useState('');
    const [phoneErr, setphoneErr] = useState(false);

    const [email, setEmail] = React.useState('');
    const [emailErr, setemailErr] = useState(false);

    const [gstno, setGstNo] = React.useState('');
    const [loading, setloading] = useState(true);
    let color = "#36373b";
    const { addToast } = useToasts();


    useEffect(() => {
        setName(location.state.name);
        setAddress(location.state.address);
        setPhone(location.state.phone);
        setEmail(location.state.email);
        setGstNo(location.state.gstno);
        setData(location.state);
        setloading(false);
        console.log('location: ', location);
    }, [location]);

    const onSaveBtnClick = () => {
        if (name === '') {
            setNameErr(true)
        }
        if (address === '') {
            setAddressErr(true)
        }
        if (phone === '') {
            setphoneErr(true)
        }
        if (email === '') {
            setemailErr(true)
        }
        if (email === '' || phone === '' || name ==='' || address === '') {
            addToast('Please complete all required fields', {
                appearance: 'error',
                autoDismiss: true,
            });
        }
        else {
            if (validator.isEmail(email)) {
                const finalData = new FormData();
                finalData.append("id", data.id);
                finalData.append("name", name);
                finalData.append("address", address);
                finalData.append("phone", phone);
                finalData.append("email", email);
                finalData.append("gstno", gstno);
                const requestOptions = {
                    method: 'POST',
                    body: finalData
                };
                console.log('requestOptions: ', requestOptions);

                fetch('https://api.anjalienterprises.co/admin1/editcustomer', requestOptions).then(response => response.json())
                    .then(data => {
                        console.log('data: ', data);

                        if (data.status) {
                            addToast(data.message, {
                                appearance: 'success',
                                autoDismiss: true,
                            })
                            history.push('/customer')
                        } else {
                            addToast(data.message, {
                                appearance: 'error',
                                autoDismiss: true,
                            })
                        }
                    })
                    .catch((error) => {
                        console.log('error: ', error);
                        // onSaveBtnClick();
                    });

            } else {
                addToast('Enter valid Email', {
                    appearance: 'error',
                    autoDismiss: true,
                })
            }
        }
    }
    if (loading)
        return <div className='loaderClass'><HashLoader color={color} loading={loading} css={override} size={100} /></div>
    return (
        <Fragment>
            <PageTitle
                titleHeading="Edit Customer"
                back={true}
                route='/customer'
            />
            <div className={classes.root}>
                <Grid container item spacing={3} sm={12} md={6} className={classes.paper}>

                    <div className="editPageDesign mt-3">
                        <Grid item sm={12} md={3}>
                            <div>
                                <label> Name </label>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={9}>
                            <TextField
                                required
                                fullWidth
                                className="m-2"
                                label="Name"
                                id="standard-required"
                                variant="outlined"
                                value={name}
                                error={nameErr}
                                onChange={e => { setName(e.target.value); setNameErr(false); }}
                            />
                        </Grid>
                    </div>
                    <div className="editPageDesign mt-3">
                        <Grid item sm={12} md={3}>
                            <div>
                                <label> Address </label>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={9}>
                            <TextField
                                required
                                fullWidth
                                className="m-2"
                                label="Address"
                                id="standard-required"
                                variant="outlined"
                                value={address}
                                error={addressErr}
                                onChange={e => { setAddress(e.target.value); setAddressErr(false); }}
                            />
                        </Grid>
                    </div>
                    <div className="editPageDesign mt-3">
                        <Grid item sm={12} md={3}>
                            <div>
                                <label> Phone </label>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={9}>
                            <TextField
                                required
                                fullWidth
                                className="m-2"
                                label="Phone"
                                id="standard-required"
                                variant="outlined"
                                value={phone}
                                error={phoneErr}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                    setphoneErr(false);
                                }}
                            />
                        </Grid>
                    </div>
                    <div className="editPageDesign mt-3">
                        <Grid item sm={12} md={3}>
                            <div>
                                <label> Email </label>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={9}>
                            <TextField
                                fullWidth
                                className="m-2"
                                label="Email"
                                id="standard-required"
                                variant="outlined"
                                value={email}
                                error={emailErr}
                                onChange={e => { setEmail(e.target.value); setemailErr(false) }}
                            />
                        </Grid>
                    </div>
                    <div className="editPageDesign mt-3">
                        <Grid item sm={12} md={3}>
                            <div>
                                <label>Gst No.</label>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={9}>
                            <TextField
                                fullWidth
                                className="m-2"
                                label="Gst No."
                                id="standard-required"
                                variant="outlined"
                                value={gstno}
                                onChange={(e) => {
                                    setGstNo(e.target.value);
                                }}
                            />
                        </Grid>
                    </div>
                    <Divider className="w-100 mt-5" />
                    <div style={{ textAlign: "right", width: '100%', marginTop: '10px' }}>
                        <Button variant="outlined" color="default" style={{ marginRight: '15px' }} onClick={() => history.push('/customer')}>Cancel</Button>
                        <Button variant="outlined" color="primary" onClick={() => onSaveBtnClick()}>Save</Button>
                    </div>
                </Grid>
            </div>
        </Fragment>
    );
}
