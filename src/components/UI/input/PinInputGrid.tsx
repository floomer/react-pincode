import React, {ChangeEvent, ChangeEventHandler, FC, useRef} from 'react';
import classes from './PinInputGrid.module.css'

interface PinInputGridProps {
    pincode: string
}

const PinInputGrid:FC<PinInputGridProps> = ({pincode}) => {
    const arrayOfInputs = Array.from(pincode)
    const inputRef = useRef<HTMLInputElement[]>([]) // useState
    const setInputFocus = (index:number) => {
        const ref = inputRef.current[index]
        if (ref){
            ref.focus()
        }
    }
    return (
        <div className={classes.PinInputGrid}>
            {arrayOfInputs.map((element,index) => <input
                key ={index}
                ref={element => {
                    if (element){
                        inputRef.current[index] = element
                    }
                }}
                onChange={(event) => {
                    const value = event.target.value
                    if (index < pincode.length - 1){
                        setInputFocus(index + 1)
                    }
                    if (value === ''){
                        setInputFocus(index - 1)
                    }
                }}
                maxLength={1}
            ></input>)}
        </div>
    );
};

export default PinInputGrid;