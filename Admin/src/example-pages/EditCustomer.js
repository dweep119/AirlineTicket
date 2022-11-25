import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { useToasts } from 'react-toast-notifications';
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
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
import moment from 'moment/moment';
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

    const [parentInputFieldsFinal, setParentInputFieldsFinal] = useState(
        [
            {
                name: ''
            }
        ])

    const [loading, setloading] = useState(true);
    let color = "#36373b";
    const { addToast } = useToasts();

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
    const handlePassengerDataChange = (index, event) => {
        let data = [...parentInputFieldsFinal];
        data[index][event.target.name] = event.target.value;
        setParentInputFieldsFinal(data);

    }

    useEffect(() => {
        const today = moment().format('YYYY-MM-DD');

        setAirLine(location.state.attributes.airlineName);
        setName(location.state.attributes.customerName);
        setPnr(location.state.attributes.pnrNo);
        setFrom(location.state.attributes.from);
        setDepDate(location.state.attributes.depDate);
        setDepTime(new Date(`${today}T${location.state.attributes.depTime}`));
        setTo(location.state.attributes.to);
        setArrDate(location.state.attributes.arrDate);
        setArrTime(new Date(`${today}T${location.state.attributes.arrTime}`));
        setFlightNo(location.state.attributes.flightNo);
        setFlightFare(location.state.attributes.flightFare);
        setParentInputFieldsFinal(location.state.attributes.passengers)
        setData(location.state);
        setloading(false);
        console.log('============location: ', location);
    }, [location]);

    // useEffect(() => {
    //     set

    // }, [location]);

    const removeMoreFields = (e, index) => {
        // setloading(true);
        e.preventDefault();
        let data = [...parentInputFieldsFinal];

        data.splice(index, 1);
        setParentInputFieldsFinal(data);
        // setTimeout(() => {
        //     setloading(false);
        // }, 2000);
    }
    const addProduct = () => {
        let newfield = {
            name: ''
        }

        setParentInputFieldsFinal([...parentInputFieldsFinal, newfield])
    }

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
        if (airLine === '' || pnr === '' || name === '' || from === '' || to === '' || flightFare === '') {
            addToast('Please complete all required fields', {
                appearance: 'error',
                autoDismiss: true,
            });
        }
        else {

            const finalData = {};
            let passengerItems = [];
            parentInputFieldsFinal.map((item, index) => {
                let obj = {
                    "name": item.name
                }
                passengerItems.push(obj)
            });
            console.log('passengerItems: ', passengerItems);
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            let finalDepTime = moment(depTime).format("HH:mm:ss.SSS")
            let finalArrTime = moment(arrTime).format("HH:mm:ss.SSS")
            let bookingRefNo = 'BT-' + mm + dd+Math.random();
            finalData["airlineName"] = airLine;
            finalData["customerName"] = name;
            finalData["pnrNo"] = pnr;
            finalData["from"] = from;
            finalData["to"] = to;
            finalData["depDate"] = depDate;
            finalData["depTime"] = finalDepTime;
            finalData["arrDate"] = arrDate;
            finalData["arrTime"] = finalArrTime;
            finalData["flightNo"] = flightNo;
            finalData["flightFare"] = flightFare;
            finalData["bookingRefNo"] = bookingRefNo;
            finalData["passengers"] = passengerItems;
            const requestOptions = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${token.jwt}`
                },
                body: JSON.stringify({ "data": finalData })
            };
            console.log('requestOptions: ', requestOptions);

            fetch(`http://localhost:1337/api/airline-tickets/${data.id}`, requestOptions).then(response => response.json())
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
            <div className='d-flex'>
                    <Grid container item spacing={3} sm={12} md={12} className={classes.paper}>
                        <Grid container item spacing={3} sm={12} md={6} >

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
                                        <InputLabel id="demo-simple-select-outlined-label" required error={airLineErr}>Air Line</InputLabel>
                                        <Select
                                            error={airLineErr}
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={airLine}
                                            onChange={e => setAirLine(e.target.value)}
                                            label="Air Line"
                                        >
                                            <MenuItem value={'SpiceJet'}>SpiceJet</MenuItem>
                                            <MenuItem value={'Indigo'}>Indigo</MenuItem>
                                            <MenuItem value={'AirAsia'}>AirAsia</MenuItem>
                                            <MenuItem value={'Vistara'}>Vistara</MenuItem>
                                            <MenuItem value={'GoFirst'}>GoFirst</MenuItem>
                                        </Select>
                                    </FormControl>
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

                        </Grid>
                        <Grid container item spacing={3} sm={12} md={6}>

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
                                        onChange={e => { setFlightNo(e.target.value) }}
                                    />
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
                            <div className="editPageDesign mt-3" style={{ height: "54px" }}></div>

                        </Grid>
                        <Divider className="w-100 mt-5" />
                        <Grid container item spacing={3} sm={12} md={12}>
                            {parentInputFieldsFinal.map((input, index) => (
                                <div className="editPageDesign mt-3" key={index}>
                                    <Grid item sm={12} md={2}>
                                        <div className='mt-4 ml-4'>
                                            <label>Passenger Name</label>
                                        </div>
                                    </Grid>
                                    <Grid item sm={12} md={6}>
                                        <TextField
                                            fullWidth
                                            className="m-2"
                                            label="Passenger Name"
                                            id="standard-required"
                                            variant="outlined"
                                            name='name'
                                            value={input.name}
                                            onChange={event => handlePassengerDataChange(index, event)}

                                        />
                                    </Grid>
                                    <div className='ml-3 mt-3'>
                                        <Button variant="outlined" color="primary" onClick={addProduct}> Add More</Button>
                                        {
                                            parentInputFieldsFinal.length > 1 ?
                                                <Button variant="outlined" onClick={(e) => removeMoreFields(e, index)} >Remove</Button>
                                                :
                                                <Button variant="outlined" disabled onClick={(e) => removeMoreFields(e, index)} >Remove</Button>
                                        }
                                        {/* <Button className='ml-1' variant="outlined" color="primary" onClick={addProduct}> Remove</Button> */}
                                    </div>
                                </div>
                            ))
                            }
                        </Grid>
                        <Divider className="w-100 mt-5" />
                        <div style={{ textAlign: "right", width: '100%', marginTop: '10px' }}>
                            <Button variant="outlined" color="primary" >Generate PDF</Button>
                            <Button variant="outlined" color="default" style={{ marginRight: '15px' }} onClick={() => history.push('/customer')}>Cancel</Button>
                            <Button variant="outlined" color="primary" onClick={() => onSaveBtnClick()}>Save</Button>
                        </div>
                    </Grid>
                </div>
            </div>
            <br></br>
        </Fragment>

    );
}
