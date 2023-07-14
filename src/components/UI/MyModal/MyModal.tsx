import React, {Dispatch, SetStateAction} from 'react';
import classes from "./MyModal.module.css";
import {SubmitButton} from "../button/SubmitButton";


interface MyModalProps {
    userPincode: string;
    pincodeToString: string
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}

export const MyModal: React.FC<MyModalProps> = ({

    userPincode,
    pincodeToString,
    visible,
    setVisible}) => {

    const rootClasses = [classes.myModal]
    if (visible){
        rootClasses.push(classes.active)
    }
    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.myModalContent}>
            {userPincode === pincodeToString ? <h1>Password Accepted</h1> : <h1>Wrong Password!</h1>}
            <SubmitButton onClick={() => setVisible(false)}/>
            </div>
        </div>
    );
};

