import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        let newtext = Text.toUpperCase();
        setText(newtext);
        props.showAlert("converted into uppercase", "success");
    }
    const handleLoClick = () => {
        let newtext = Text.toLowerCase();
        setText(newtext);
        props.showAlert("converted into lowercase", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const clearText = () => {
        setText("");
        props.showAlert("the textbox has been cleared", "success");
    }

    const copyText = () => {
        let text = document.getElementById("mybox");
        navigator.clipboard.writeText(text.value);
        props.showAlert("the textbox has been copy", "success");
    }

    const removeSpace = () => {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("all the extra space has been removed", "success");
    }

    const [Text, setText] = useState("");

    return (
        <>
        <div className="container " style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={Text} style={{backgroundColor: props.mode==='light'?'white':'grey' , color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1"  onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1 my-1"  onClick={clearText}>Clear text</button>
            <button className="btn btn-primary mx-1 my-1"  onClick={copyText}>Copy text</button>
            <button className="btn btn-primary mx-1 my-1"  onClick={removeSpace}>Remove extra space</button>
        </div >
        <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}} >
            <h1>Your text summary</h1>
            <p>{Text.split(" ").filter((element)=>{return element.length!=0}).length} words,{Text.length} characters</p>
            <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{Text.length>0?Text:'Enter something in the textbox above to preview it'}</p>
        </div>
        </>

    )
}

