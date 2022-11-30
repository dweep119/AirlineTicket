import React from 'react';
import { connect } from 'react-redux';
// import { useToasts } from 'react-toast-notifications';
import clsx from 'clsx';

import {
    InputLabel,
    InputAdornment,
    IconButton,
    TextField,
    FormControl,
    Button
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import Visibility from '@material-ui/icons/Visibility';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import logoPath from "../assets/images/BhavnaToursLogo.png";
import useToken from '../useToken';
import { loginUser } from "../libs/api";

import { setUserData } from '../reducers/ThemeOptions';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    margin: {
        margin: theme.spacing(1)
    },
    withoutLabel: {
        marginTop: theme.spacing(3)
    }
}));


function Login(props) {

    const {
        setUserData
    } = props;

    const classes = useStyles();

    const { setToken } = useToken();

    const [userName, setUserName] = React.useState();
    const [password, setPassword] = React.useState();
    // const [isUserNameHasValue, setisUserNameHasValue] = React.useState(false);
    // const [isPasswordHasValue, setisPasswordHasValue] = React.useState(false);
    // const { addToast } = useToasts();
    const [showPassword, setshowPassword] = React.useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            "identifier": userName,
            "password": password
        });
        // const token = { "success": true, "response": { "id": "3c66c01c-5d87-434e-9ede-e9896b73acee", "firstName": "Dweep", "lastName": "Patel", "userName": "dweep", "email": "dweep.neha@gmail.com", "mobile": "9978532084" } }
        setToken(token);
        setUserData(token.user);
        props.history.push('/dashboard');
        window.location.reload(false);
    }

    const handleClickShowPassword = () => {
        setshowPassword(!showPassword);
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <div className="text-center">
                        <img src={logoPath} alt="img" className="authLogo" />
                        {/* <h1 className='mb-5'>DSS Driving School LTD</h1> */}
                        <h3>Log in</h3>
                        <p>Hello! Log in with your user name.</p>

                    </div>
                    <div className="form-group">
                        <TextField
                            fullWidth
                            className="m-2"
                            label="User Name"
                            id="outlined-size-normal"
                            variant="outlined"
                            value={userName}
                            onChange={e => { setUserName(e.target.value); }}
                        />
                    </div>

                    <div className="form-group">
                        <FormControl
                            fullWidth
                            className={clsx(classes.margin, classes.textField)}
                            variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">
                                Password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}

                                onChange={e => { setPassword(e.target.value); }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end">
                                            {showPassword ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                    </div>

                    <Button className="m-2" variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                        LOGIN
                    </Button>

                </form>
            </div>
        </div>

    )
}

const mapStateToProps = state => ({
    userData: state.ThemeOptions.userData
});

const mapDispatchToProps = dispatch => ({
    setUserData: data => dispatch(setUserData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);