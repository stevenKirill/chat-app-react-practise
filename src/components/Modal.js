import React, {useState} from 'react';

export const Modal = ({handleShow}) => {
    const [val,setVal] = useState('');
    function handleChange(e) {
        setVal(e.target.value)
    };
    return (
        <div className="modal">
            <form onSubmit={() => handleShow(val)} className="forma">
                <h1>Enter your name</h1>
                <input type="text" onChange={handleChange} value={val} className="input_enter_name"/>
            </form>
        </div>
    )
}