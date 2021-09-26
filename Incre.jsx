import React, { useState } from "react";
import "./incre.css"

const Incre = () =>{

    const [num,setNum] = useState(0);
    const increNum =()=>{
        setNum(num+1)
    }

    const decreNum =()=>{
        setNum(num-1)
        if(num===0){
            setNum(0)
        }
    }
    return(
        <>  
            <div className="container">
                <div className="center_div">
                    <h1>{num}</h1>        
                    <div className="btn">
                        <button onClick={increNum}>Increment</button>
                        <button onClick={decreNum}>Decrement</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Incre;