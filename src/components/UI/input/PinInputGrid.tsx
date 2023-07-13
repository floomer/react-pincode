import React, {Dispatch, FC, SetStateAction} from 'react';
import classes from './PinInputGrid.module.css'

interface PinInputGridProps {
    userPincode: string;
    pincode: {}
    setPincode: Dispatch<SetStateAction<{}>>
}

const PinInputGrid:FC<PinInputGridProps> = ({userPincode, setPincode, pincode}) => {
    const arrayOfInputs = Array.from(userPincode)

    return (
        <div className={classes.PinInputGrid}>
            {arrayOfInputs.map((element,index) => <input
                key ={index}
                maxLength={1}
                onChange={(event) => {
                    setPincode({...pincode, [index]: event.target.value})
                    const nextSibling  = event.currentTarget.nextSibling as HTMLElement
                    const previousSibling = event.currentTarget.previousSibling as HTMLElement
                    if (nextSibling || previousSibling){
                        if (event.currentTarget.value !== '' && index < userPincode.length - 1){
                            return nextSibling.focus()
                        }
                        if (event.currentTarget.value === '' && previousSibling !== null){
                            event.currentTarget.focus()
                            previousSibling.focus()
                        }
                    }
                }}
            ></input>)}
        </div>
    );
};

export default PinInputGrid;