import { useState } from "react";

function Form()
{
    let [fullname,setFullname]=useState("Shradha");
    let [username,setUsername]=useState("Shradha@apnacollege");


    let handleNameChange = (event)=>{
        console.log(event.target.value);
        setFullname(event.target.value);
    }

    let handleUsername = (event)=>{
        console.log(event.target.value);
        setUsername(event.target.value);
    }

    return(
        <>
            <form>
                <label htmlFor="fullname">Fullname : </label>
                <input placeholder="Enter your fullname" 
                type="text" value={fullname} 
                onChange={handleNameChange} id="fullname"></input>
                <br></br>

                <label htmlFor="username">Username : </label>
                <input placeholder="Enter username" 
                type="text" value={username} 
                onChange={handleUsername} id="username"></input>
                <br></br>
                
                <button>Submit</button>
            </form>
        </>
       
    );
}
export default Form;