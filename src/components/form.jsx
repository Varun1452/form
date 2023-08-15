import react from "react";
import {useState} from "react";
 const Form = () => {

  const [counter,setCounter] = useState(0);
      
  const Clicked = () =>{
   setCounter (counter +1)
  }

     
  const Reset = () =>{
    setCounter (counter -1)
   }

  return(
      <>
      
      <form>
      <label>first name:-</label>
      <input type="text" id="fname" />
      <label>last name:-</label>
      <input type="text" id="lname" />

         
      <button type="button" onclick="submitbtn()">SUBMIT</button>    
      </form>
      <h1>clicked {counter} times</h1>
         

         <button onClick={Clicked}>click</button>
         <button onClick={Reset}>reset</button>
      </>
    
    );  
 }

 export default Form;