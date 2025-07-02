import { useState } from "react";

function Form2()
{
    let [formdata, setFormdata] = useState({
        fullname : "",
        username : ""
    });

    let handleInputChange = (event)=>{
        
        let feildName = event.target.name ; 
        let newVal = event.target.value ;
        
        setFormdata((currData)=>{
            currData[feildName] = newVal;
            return {...currData , [feildName] : newVal};
        });
    }

    let handelSubmit = (event)=>{
        event.preventDefault();
        setFormdata({
            fullname : "",
            username : ""
        });
    }
    return(
        <>
            <form onSubmit={handelSubmit}>
                <label htmlFor="Fullname"></label>
                <input placeholder="Fullname" 
                id="Fullname" 
                value={formdata.fullname}
                name = "fullname" 
                onChange={handleInputChange}></input>
                <br></br>
                <button>Submit</button>
            </form>
        </>
    )
}
export default Form2;