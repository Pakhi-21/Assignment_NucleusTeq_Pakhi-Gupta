import React, {useState} from "react";


function TextInput(){
    const [text,setText]=useState('');
    return (
        <div>
            <h2> Task 2 - Text Input</h2>
            <input type="text" value={text} placeholder="Enter something .." onChange={(e)=> setText(e.target.value)}/>
            <p>
                You Typed:{text}
            </p>
        </div>
    );
}

export default TextInput;
