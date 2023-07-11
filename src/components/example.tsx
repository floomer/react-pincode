import React, {JSX, useState} from 'react';


interface ExampleListProps<T>{
    items: T[]
    mapper: (item:T) => JSX.Element
}

function ExampleList<I>(props:ExampleListProps<I>){
    return (
        <div>
            {props.items.map(props.mapper)}
        </div>
    )
}
export const Example = () => {
    const [array1, setArray1] = useState(['Stas', 'Anton', 'Sugar'])
    const [array2, setArray2] = useState([
        {id : 1, size: 'big'}, {id:2, size: 'small'}])


    return (
        <div>
            <ExampleList items = {array1} mapper={(item) => <span key={item}>{item}</span>}/>
            <ExampleList items = {array2} mapper={(item) => <span key={item.id}>{item.size}</span>}/>
        </div>
    );
};
