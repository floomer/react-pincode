import React, {useState} from 'react';
import PinCodeInput from "../components/UI/input/PinCodeInput";
import {SubmitButton} from "../components/UI/button/SubmitButton";
import {useNavigate} from "react-router-dom";

export const PinCodeForm = () => {
    const navigate = useNavigate()
    const [pincode, setPincode] = useState('')
    const [isInvalid, setIsInvalid] = useState(false)
    const regExp = /^\d+$/;
    const handleSubmit  = () => {
        localStorage.clear()
        if (!regExp.test(pincode)){
            setIsInvalid(true)

        } else {
            localStorage.setItem('pincode', pincode)
            navigate('/signin')
        }
    }
    return (
        <div className={'pinCode-form'}>
            <h2>Create a Pin-Code</h2>
            <PinCodeInput onChange={(event) => {
                setPincode(event.target.value)
                setIsInvalid(false)
            }}
            isInvalid ={isInvalid}
            />
            <SubmitButton onClick = {handleSubmit}/>
        </div>
    );
};