import React, {ButtonHTMLAttributes, ChangeEvent, FC, MouseEvent} from 'react';
import classes from "./SubmitButton.module.css";


interface SubmitButtonProps {
    onClick: (e:MouseEvent<HTMLButtonElement>) => void,
}

const SubmitButton:FC<SubmitButtonProps> = (props) => {
    return (
        <button className={`${classes.submitButton}`} onClick={props.onClick}>Submit</button>
    );
};

export default SubmitButton;