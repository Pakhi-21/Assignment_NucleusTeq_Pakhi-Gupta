import React, {useState} from "react";

function Toggle(){
   
    const [show, setShow]= useState(true);
    
    // function for toggle
    function toggleParagraph() {
    setShow(!show); 
    }

    return (
        <div>
            <h2>Task 3 - Toggle Paragraph</h2>
            <button onClick={toggleParagraph}>{show ? 'Hide':'Show'} Paragraph</button>
            {show && (<p>This is paragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae euismod nulla. Proin pharetra libero nec enim aliquet, vitae aliquam velit euismod. Fusce vitae porta leo. Nam ac ipsum tempor, tincidunt quam eget, condimentum neque.</p>)}
        </div>
    );

}

export default Toggle;
