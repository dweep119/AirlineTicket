import React from 'react';
import { connect } from 'react-redux';
// import { useToasts } from 'react-toast-notifications';

import {
    TextField,
    Button
} from '@material-ui/core';

import logoPath from "../assets/images/BhavnaToursLogo.png";
import useToken from '../useToken';
import { loginUser } from "../libs/api";

import { setUserData } from '../reducers/ThemeOptions';


function ForgotPassword(props) {

    const {
        setUserData
    } = props;

    const { setToken } = useToken();

    const [userName, setUserName] = React.useState();
    // const [isUserNameHasValue, setisUserNameHasValue] = React.useState(false);
    // const [isPasswordHasValue, setisPasswordHasValue] = React.useState(false);
    // const { addToast } = useToasts();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            "identifier": userName,
        });
        // const token = { "success": true, "response": { "id": "3c66c01c-5d87-434e-9ede-e9896b73acee", "firstName": "Dweep", "lastName": "Patel", "userName": "dweep", "email": "dweep.neha@gmail.com", "mobile": "9978532084" } }
        setToken(token);
        setUserData(token.user);
        props.history.push('/dashboard');
        window.location.reload(false);
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <div className="text-center">
                        <img src={logoPath} alt="img" className="authLogo" />
                        <h3>Forgot your password?</h3>
                        <p>We'll send you an email with a reset password link.</p>
                        {/* <p>Type your registered Email-Id in the field below to receive Reset Password link.</p> */}

                    </div>
                    <div className="form-group">
                        <TextField
                            fullWidth
                            className="m-2"
                            label="Email Address"
                            id="outlined-size-normal"
                            variant="outlined"
                            value={userName}
                            onChange={e => { setUserName(e.target.value); }}
                        />
                    </div>

                    <Button className="m-2" variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                        Reset Password
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);