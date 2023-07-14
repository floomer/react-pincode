import React, {useState} from 'react';
import {SubmitButton} from "../components/UI/button/SubmitButton";
import {PinInputGrid} from "../components/UI/input/PinInputGrid";
import {MyModal} from "../components/UI/MyModal/MyModal";

export const Login = () => {
    const userPincode = localStorage.getItem('pincode')
    const [pincode, setPincode] = useState({})
    const [modal, setModal] = useState(false)
    const pincodeToString = Object.values(pincode).join('')
    if (userPincode !== null){
        return (
            <div className={'login-form'}>
                <h2>Enter your Pin-Code</h2>
                <PinInputGrid userPincode = {userPincode}  pincode={pincode} setPincode={setPincode} />
                <SubmitButton onClick={() =>  setModal(true) }/>
                <MyModal userPincode={userPincode} pincodeToString={pincodeToString} visible = {modal} setVisible = {setModal}/>
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