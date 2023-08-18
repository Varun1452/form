import React from 'react'
import "./MainForm.css";
import {useState} from "react";


const MainForm = () => {
        const [fname, setFname] = useState ('');
        const [fnameErr, setFnameErr] = useState (false);
        
        const [lname, setLname] = useState ('');
        const [lnameErr, setLnameErr] = useState (false);

        const [agenumber, setagenumber] = useState ('');
        const [agenumberErr, setagenumberErr] = useState (false);

                // Fname validation start

        const FnameHandle = (e) => {
            let item = e.target.value;
            if (item.length  >= 1 && item.length <= 7) {
                setFnameErr(false)
            }
            else{
                setFnameErr(true)
            }
            setFname(item)
        }
        const valuesHandle = () => {
                if(fnameErr == true)
                {
                    alert("Your FIRST NAME is invalid");
                }
        }
                // Fname validation End

       

                
                // Email validation start

              const emailHandle
        let regex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        let emailvalue = e.target.value;
        setPhoneErr(!(regex.test(emailvalue)));
                setphone(emailvalue);

                // Email validation end
                // Lname validation start

                const LnameHandle = (e) => {
                    let item = e.target.value;
                    setLname(item)
                    if (lname.length >= 1 && lname.length <= 7) {
                        setLnameErr(false)
                    }
                    else{
                        setLnameErr(true)
                    }
                }
                const LvaluesHandle = () => {
                        if(lnameErr == true)
                        {
                            alert("Your LAST NAME is invalid");
                        }
                }
                // Lname validation End

                // age validation start

                const AgenumberHandle = (e) => {
                    let item = e.target.value;
                    setagenumber(item)
                    if (agenumber.length >= 0 && agenumber.length <= 1) {
                        setagenumberErr(false)
                    }
                    else{
                        setagenumberErr(true)
                    }
                }
                const AgevaluesHandle = () => {
                        if(lnameErr == true)
                        {
                            alert("Your age is invalid");
                        }
                }

                // age validation end

    return (
        <>
            <div className="mainContainer">
                <div className="mainForm">
                    <h1 className='mainHeading'>Regestration Form</h1>
                    <form className='formBox' onSubmit={valuesHandle} >
                        <label className='mainLabel'>First Name:</label>
                        <input type="text" name="firstname" onChange={FnameHandle} className='mainInput'/> {fnameErr?<span className='ErrMessage'>First name is invalid</span>:""
                        } <br/>
                        <br/>
                        <label className='mainLabel'>Last Name:</label>
                        <input type="text" name="lastname" onChange={LnameHandle} className='mainInput'/> {lnameErr?<span className='ErrMessage'>Last name is invalid</span>:""} <br/>
                        <br/>
                        <label className='mainLabel'>Email:</label>
                        <input type="text" name="email" className='mainInput'/>
                        <br/>
                         <label className='mainLabel'>Phone:</label>
                        <input type="text" name="phone" className='mainInput' /> 
                        <br/>
                        <label className='mainLabel'>Age :</label>
                        <input type="text" name="age" onChange={AgenumberHandle} className='mainInput'/> {agenumberErr?<span className='ErrMessage'>Last name is in valid</span>:<span className='Sucess'></span>} <br/>

                        <button type='button' className='mainBtn'> Submit </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default MainForm