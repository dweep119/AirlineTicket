import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { useToasts } from 'react-toast-notifications';
import validator from 'validator'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {
    Divider,
    Button,
    TextField
} from '@material-ui/core';

import { PageTitle } from '../layout-components';

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


export default function AddProduct() {
    const classes = useStyles();
    const history = useHistory();

    const [airLine, setAirLine] = React.useState('');
    const [airLineErr, setAirLineErr] = useState(false);

    const [name, setName] = React.useState('');
    const [nameErr, setNameErr] = useState(false);

    const [pnr, setPnr] = React.useState('');
    const [pnrErr, setPnrErr] = useState(false);

    const [from, setFrom] = React.useState('');
    const [fromErr, setFromErr] = useState(false);

    const [depDate, setDepDate] = React.useState(new Date());

    const [depTime, setDepTime] = React.useState('');

    const [to, setTo] = React.useState('');
    const [toErr, setToErr] = useState(false);

    const [arrDate, setArrDate] = React.useState(new Date());
    const [arrTime, setArrTime] = React.useState('');

    const [flightNo, setFlightNo] = React.useState('');

    const [flightFare, setFlightFare] = React.useState('');
    const [flightFareErr, setFlightFareErr] = useState(false);

    const [passengers, setPassengers] = React.useState([]);




    const handleAirLineChange = (date) => {
        setAirLine(date);
        setAirLineErr(false);
    };
    const handleDepatureDateChange = (date) => {
        setDepDate(date);
    };
    const handleDepatureTimeChange = (date) => {
        setDepTime(date);
    };
    const handleArrivalDateChange = (date) => {
        setArrDate(date);
    };
    const handleArrivalTimeChange = (date) => {
        setArrTime(date);
    };

    const { addToast } = useToasts();

   

    const onSaveBtnClick = () => {
        if (airLine === '') {
            setAirLineErr(true)
        }
        if (name === '') {
            setNameErr(true)
        }
        if (pnr === '') {
            setPnrErr(true)
        }
        if (from === '') {
            setFromErr(true)
        }
        if (to === '') {
            setToErr(true)
        }
        if (flightFare === '') {
            setFlightFareErr(true)
        }
      
        if (airLine === '' || name === '' || pnr === '' || from === ''|| to === ''|| flightFare === '') {
            addToast('Please complete all required fields', {
                appearance: 'error',
                autoDismiss: true,
            });
        }
        else {
            if (validator.isEmail(email)) {
                const finalData = new FormData();
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

                fetch('https://api.anjalienterprises.co/admin1/addcustomer', requestOptions).then(response => response.json())
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
    return (
        <Fragment>
            <PageTitle
                titleHeading="Add Customer"
                back={true}
                route='/customer'
            />
            <div className={classes.root}>
                <Grid container item spacing={3} sm={12} md={6} className={classes.paper}>

                    <div className="editPageDesign mt-3">
                        <Grid item sm={12} md={3}>
                            {/* <Paper className={classes.paper}> */}
                            <div>
                                <label>Air Line</label>
                            </div>
                            {/* </Paper> */}
                        </Grid>

                        <Grid item sm={12} md={9}>
                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                <InputLabel id="demo-simple-select-outlined-label" required error={mediaTypeErr}>Air Line</InputLabel>
                                <Select
                                    error={airLineErr}
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={airLine}
                                    onChange={handleAirLineChange}
                                    label="Air Line"
                                >
                                    <MenuItem value={'Spice Jet'}>Spice Jet</MenuItem>
                                    <MenuItem value={'Indigo'}>Indigo</MenuItem>
                                    <MenuItem value={'Air Asia'}>Air Asia</MenuItem>
                                    <MenuItem value={'Vistara'}>Vistara</MenuItem>
                                    <MenuItem value={'Go First'}>Go First</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                    </div>

                    <div className="editPageDesign mt-3">
                        <Grid item sm={12} md={3} style={{ margin: 'auto' }}>
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
                                <label> PNR No. </label>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={9}>
                            <TextField
                                required
                                fullWidth
                                className="m-2"
                                label="PNR No. "
                                id="standard-required"
                                variant="outlined"
                                value={pnr}
                                error={pnrErr}
                                onChange={e => { setPnr(e.target.value); setPnrErr(false); }}
                            />
                        </Grid>
                    </div>
                    <div className="editPageDesign mt-3">
                        <Grid item sm={12} md={3}>
                            <div>
                                <label> From </label>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={9}>
                            <TextField
                                required
                                fullWidth
                                className="m-2"
                                label="From"
                                id="standard-required"
                                variant="outlined"
                                value={from}
                                error={fromErr}
                                onChange={(e) => {
                                    setFrom(e.target.value);
                                    setFromErr(false);
                                }}
                            />
                        </Grid>
                    </div>
                    <div className="editPageDesign mt-3">
                        <Grid item sm={12} md={3}>
                            <div>
                                <label>Depature Date</label>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={9}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Depature Date"
                                    format="MM/dd/yyyy"
                                    value={depDate}
                                    onChange={handleDepatureDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                    </div>
                    <div className="editPageDesign mt-3">
                        <Grid item sm={12} md={3}>
                            <div>
                                <label>Depature Time</label>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={9}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardTimePicker
                                    margin="normal"
                                    id="time-picker"
                                    label="Depature Time"
                                    value={depTime}
                                    onChange={handleDepatureTimeChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change time',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                    </div>

                    <div className="editPageDesign mt-3">
                        <Grid item sm={12} md={3}>
                            <div>
                                <label> To </label>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={9}>
                            <TextField
                                required
                                fullWidth
                                className="m-2"
                                label="To"
                                id="standard-required"
                                variant="outlined"
                                value={to}
                                error={toErr}
                                onChange={(e) => {
                                    setTo(e.target.value);
                                    setToErr(false);
                                }}
                            />
                        </Grid>
                    </div>

                    <div className="editPageDesign mt-3">
                        <Grid item sm={12} md={3}>
                            <div>
                                <label>Arrival Date</label>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={9}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Arrival Date"
                                    format="MM/dd/yyyy"
                                    value={arrDate}
                                    onChange={handleArrivalDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                    </div>
                    <div className="editPageDesign mt-3">
                        <Grid item sm={12} md={3}>
                            <div>
                                <label>Arrival Time</label>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={9}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardTimePicker
                                    margin="normal"
                                    id="time-picker"
                                    label="Arrival Time"
                                    value={arrTime}
                                    onChange={handleArrivalTimeChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change time',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                    </div>
                    <div className="editPageDesign mt-3">
                        <Grid item sm={12} md={3}>
                            <div>
                                <label> Flight No. </label>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={9}>
                            <TextField
                                fullWidth
                                className="m-2"
                                label="Flight No."
                                id="standard-required"
                                variant="outlined"
                                value={flightNo}
                                onChange={e => { setFlightNo(e.target.value)}}
                            />
                        </Grid>
                    </div>
                    <div className="editPageDesign mt-3">
                        <Grid item sm={12} md={3}>
                            <div>
                                <label>Flight Fare</label>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={9}>
                            <TextField
                                fullWidth
                                className="m-2"
                                label="Flight Fare"
                                id="standard-required"
                                variant="outlined"
                                value={flightFare}
                                error={flightFareErr}
                                onChange={(e) => {
                                    setFlightFare(e.target.value);
                                    setFlightFareErr(false);
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