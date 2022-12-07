import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { useToasts } from 'react-toast-notifications';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Invoice from '../summaryComponents/Invoice';
import axios from "axios";
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
import { PDFViewer } from '@react-pdf/renderer'
import { PDFDownloadLink } from '@react-pdf/renderer';

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

    const [depTime, setDepTime] = React.useState(new Date());

    const [to, setTo] = React.useState('');
    const [toErr, setToErr] = useState(false);

    const [arrDate, setArrDate] = React.useState(new Date());
    const [arrTime, setArrTime] = React.useState(new Date());

    const [flightNo, setFlightNo] = React.useState('');

    const [flightFare, setFlightFare] = React.useState('');
    const [flightFareErr, setFlightFareErr] = useState(false);

    const [showPdf, setshowPdf] = useState(false);
    const [pdfpath, setPdfPath] = React.useState('');
    const [counter, setcounter] = React.useState(0);
    const [invoice, setInvoice] = useState({});
    const [fileName, setfileName] = React.useState('');
    const [bookingRefNo, setbookingRefNo] = useState(null);
    const [customer, setCustomer] = React.useState([]);

    const [parentInputFieldsFinal, setParentInputFieldsFinal] = useState(
        [
            {
                name: ''
            }
        ])

    const handlePassengerDataChange = (index, event) => {
        let data = [...parentInputFieldsFinal];
        data[index][event.target.name] = event.target.value;
        setParentInputFieldsFinal(data);

    }
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

    const addProduct = () => {
        let newfield = {
            name: ''
        }

        setParentInputFieldsFinal([...parentInputFieldsFinal, newfield])
    }
    const blobToFile = (theBlob, fileName) => {
        const file = new File([theBlob], fileName, {
            type: theBlob.type,
        });
        console.log('file: ', file);
        if (counter === 0) {
            setcounter(counter + 1);
            setPdfPath(file);
        }
    }

    useEffect(() => {
        callAPI();
        // eslint-disable-next-line
    }, []);

    const callAPI = () => {
        fetch('http://localhost:1337/api/airline-tickets?populate=*').then(response => response.json())
            .then(data => {
                console.log('data: ', data);
                setCustomer(data['data']);
            })
            .catch((error) => {
                // callAPI();
            });
    }

    const onSubmitBtnClk = () => {
        console.log(parentInputFieldsFinal)
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

        if (airLine === '' || name === '' || pnr === '' || from === '' || to === '' || flightFare === '') {
            addToast('Please complete all required fields', {
                appearance: 'error',
                autoDismiss: true,
            });
        } else {
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0');

            let lastNo =
                parseInt(
                    customer
                        .sort((a, b) => a.attributes.createdAt.localeCompare(b.attributes.createdAt))
                    [customer?.length - 1]?.attributes.bookingRefNo.split('-')[3] || 0
                ) + 1;

            let applicationNo = 'PT-' + mm + '-' + dd + '-' + lastNo;
            setbookingRefNo(applicationNo);
            console.log('applicationNo: ', applicationNo);



            setInvoice({

                ...invoice,

                // "trans_date": newDat,
                "customer_name": name,
                "customer_mobile": '1234567890',
                "customer_email": 'email123@gmail.com',
                "customer_airline": airLine,
                "pnr": pnr,
                "ref_no": applicationNo,
                "booked": moment().format("ddd, MMM. D, YYYY HH:mm"),
                "status": 'Confirmed',
                "from": from,
                "to": to,
                "flightNo": flightNo,
                "flightFare": flightFare,
                "arrDate": moment(arrDate).format('ddd MMM. D, YYYY'),
                "arrTime": moment(arrTime).format("HH:mm"),
                "depDate": moment(depDate).format('ddd MMM. D, YYYY'),
                "depTime": moment(depTime).format("HH:mm"),
                "passengers": parentInputFieldsFinal
            });

            setshowPdf(true);
            setfileName(name + '.pdf');
        }

    }

    const onSaveTicketBtnClick = async () => {
        try {
            let passengerItems = [];
            // eslint-disable-next-line
            parentInputFieldsFinal.map((item, index) => {
                let obj = {
                    "name": item.name
                }
                passengerItems.push(obj)
            });
            console.log('passengerItems: ', passengerItems);

            let finalDepTime = moment(depTime).format("HH:mm:ss.SSS")
            let finalArrTime = moment(arrTime).format("HH:mm:ss.SSS")
            let finalDepDate = moment(depDate).format('YYYY-MM-DD')
            let finalArrDate = moment(arrDate).format('YYYY-MM-DD')
            const finalData = {
                airlineName: airLine,
                customerName: name,
                pnrNo: pnr,
                from: from,
                to: to,
                depDate: finalDepDate,
                depTime: finalDepTime,
                arrDate: finalArrDate,
                arrTime: finalArrTime,
                flightNo: flightNo,
                flightFare: flightFare,
                bookingRefNo: bookingRefNo,
                passengers: passengerItems,
            };
            const resData = await axios({
                method: "POST",
                url: "http://localhost:1337/api/airline-tickets",
                data: { "data": finalData }
            });
            console.log('resData: ', resData);
            const formData = new FormData();
            formData.append("files", pdfpath);
            const id = resData.data.data.id;
            formData.append("ref", "api::airline-ticket.airline-ticket"); //name of content type
            formData.append("refId", id); //id of content type
            formData.append("field", "ticketFile"); //name of key for the content type
            fetch("http://localhost:1337/api/upload", {
                method: "POST",
                body: formData
            })
                .then((response) => response.json())
                .then((result) => {
                    console.log("Success:", result);
                    setshowPdf(false);
                    history.push('/customer')
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
            console.log(resData.data.id);
        } catch (error) {
            console.log(error);
        }

    }

    const removeMoreFields = (e, index) => {
        e.preventDefault();
        let data = [...parentInputFieldsFinal];
        data.splice(index, 1);
        setParentInputFieldsFinal(data);
    }

    return (
        <Fragment>
            <PageTitle
                titleHeading="Add Customer"
                back={true}
                route='/customer'
            />
            <div className={classes.root} >
                {
                    !showPdf ?
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
                                                <Button className='mr-3' variant="outlined" color="primary" onClick={addProduct}> Add More</Button>
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
                                    <Button variant="outlined" color="primary" onClick={() => onSubmitBtnClk()} >Generate PDF</Button>
                                    <Button variant="outlined" color="default" style={{ marginLeft: '15px' }} onClick={() => history.push('/customer')}>Cancel</Button>
                                    {/* <Button variant="outlined" color="primary" onClick={() => onSaveBtnClick()}>Save</Button> */}
                                </div>
                            </Grid>
                        </div>
                        :
                        <PDFViewer width="1000" height="600" className="app" >
                            <Invoice invoice={invoice} />
                        </PDFViewer>
                }
            </div>
            {
                showPdf ?
                    <>
                        <PDFDownloadLink document={<Invoice invoice={invoice} />}>
                            {({ blob, url, loading, error }) =>
                                // loading ? 'Loading document...' : 'Download now!'

                                !loading && blob ?
                                    blobToFile(blob, fileName)
                                    : null

                            }
                        </PDFDownloadLink>
                        <Button variant="outlined" color="primary" onClick={() => onSaveTicketBtnClick()} >Save</Button>
                        <Button variant="outlined" color="default" style={{ marginLeft: '15px' }} onClick={() => { setshowPdf(false); setcounter(0); }}>Cancel</Button>
                    </>
                    :
                    null
            }
        </Fragment>
    );
}