import React, {ChangeEvent, FC, InputHTMLAttributes} from 'react';
import classes from './PinCodeInput.module.css';

type PinCodeInputProps = {
    isInvalid:boolean,
    onChange: (e:ChangeEvent<HTMLInputElement>) => void
}
const PinCodeInput:FC<PinCodeInputProps> = ({isInvalid, onChange}) => {
    const rootClasses = [classes.pinCodeInput]
    if (isInvalid){
        rootClasses.push(classes.invalid)
    }
    return (
        <input className={rootClasses.join(' ')} placeholder={'Exp: 123456'} onChange={onChange}></input>
    );
};

export default PinCodeInput;