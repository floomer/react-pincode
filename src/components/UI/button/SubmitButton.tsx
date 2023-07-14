import React, {FC, MouseEvent} from 'react';
import classes from "./SubmitButton.module.css";


interface SubmitButtonProps {
    onClick: (e:MouseEvent<HTMLButtonElement>) => void,
}

export const SubmitButton:FC<SubmitButtonProps> = ({onClick}) => {
    return (
        <button className={`${classes.submitButton}`} onClick={onClick}>Submit</button>
    );
};
