import React, { useState } from 'react';
import { TypeTodo } from './TypeTodo'

interface props {
    show?:boolean,
    // value1?:string,
    // onchange1?:(e: React.ChangeEvent<HTMLInputElement>) => void,
    // value2?:string,
    // onchange2?:(e: React.ChangeEvent<HTMLInputElement>) => void,
    // Submit?:()=> void,
    onSubmit: (param: any) => void;
    handleClose: (arg0: boolean) => void;
}
// interface Props {
//     onSubmit: (param: any) => void;
// }
const Modal: React.FC<props> = ({ onSubmit, handleClose, show }) => {
    const [title, setTitle] = useState('')
    const [subTitle, setSubTitle] = useState('')
    
    return (
        <> {!show ? <div className="mainModal">
            <div className="mainModal-Container">
                <button onClick={() => handleClose(false)}> X </button>
                <div className="contentModal">
                    <h2>Title</h2>
                    <input type="text" placeholder="Nhap Title" value={title} onChange={(e) => setTitle(e.target.value)} />

                </div>
                <div className="contentModal">
                    <h2>SubTitle</h2>
                    <input type="text" placeholder="Nhap SubTitle" value={subTitle} onChange={(e) => setSubTitle(e.target.value)} />
                </div>
                <div className="btn">
                    <button className="btn_cancel" onClick={() => handleClose(false)}>Cancel</button>
                    <button onClick={() =>
                        {onSubmit({ title, subTitle, isComplete: false }); handleClose(false)}}>OK</button>
                </div>
            </div>
        </div> : null}</>
    )
}

export default Modal
function handleClose(arg0: boolean): void {
    throw new Error('Function not implemented.');
}

