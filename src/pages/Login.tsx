import React, {useState} from 'react';
import SubmitButton from "../components/UI/button/SubmitButton";
import PinInputGrid from "../components/UI/input/PinInputGrid";

const Login = () => {
    const pincode = localStorage.getItem('pincode')
    const [pincode1, setPincode1] = useState([])
    if (pincode !== null){
        return (
            <div className={'login-form'}>
                <h2>Enter your Pin-Code</h2>
                <PinInputGrid pincode = {pincode}/>
                <SubmitButton onClick={() => {}}/>
            </div>
        );
    } else {
        return (
            <div>
                <h1 style={{color: 'white'}}>Error!</h1>
                <h3 style={{color: 'white'}}>You should create a Pin-Code before trying to login!</h3>
                <a href ='/signup'><span style={{color: 'white'}}>Return to register page</span></a>
            </div>
        )
    }

};

export default Login;