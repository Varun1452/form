import React from 'react'
import "./MainForm.css";
import {useState} from "react";
import { computeHeadingLevel } from '@testing-library/react';


const MainForm = () => {
        const [fname, setFname] = useState ('');
        const [FnameErr, setFnameErr] = useState (false);
        
        const [lname, setLname] = useState ('');
        const [LnameErr, setLnameErr] = useState (false);

        const [Email,setEmail]= useState('');
        const [EmailErr,setEmailErr] =useState(false);

        const [PhoneNo,setPhoneNo] = useState('');
        const [PhoneNoErr,setPhoneNoErr] = useState(false);

        const [Age,setAge]= useState('');
        const [AgeErr,setAgeErr] =useState(false);

                // Fname validation start

        const FnameHandle = (e) => {
            let item = e.target.value;
            if (item.length  >= 3 && item.length <= 7 || item.length==0) {
                setFnameErr(false)
        }
            else{
                setFnameErr(true)
            }
            setFname(item)
        }

                // Fname validation End

                // Lname validation start

                const LnameHandle = (e) => {
                    let item = e.target.value;
                    if (item.length >= 3 && item.length <= 7 || item.length==0) {
                        setLnameErr(false)
                    }
                    else{
                        setLnameErr(true)
                    }
                 setLname(item)
                }
                const LvaluesHandle = () => {
                        if(LnameErr == true)
                        {
                            alert("Your LAST NAME is invalid");
                        }
                        else{

                        }
                }
                // Lname validation End

                // Email validation start

                const EmailHandle = (e) => {
                    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                    let emailvalue = e.target.value;
                    setEmailErr(!(regex.test(emailvalue)));
                    
                    if (emailvalue.length==0) {
                        setEmailErr(false)
                    }
                    setEmail(emailvalue); 
               }

                // Email validation end

                // Phone validation start

                const PhoneNoHandle =(e) => {
                    let regex = /^[6-9]\d{9}$/g;
                    let PhoneNovalue = e.target.value;
                    setPhoneNoErr(!(regex.test(PhoneNovalue)))
                    
                    if (PhoneNovalue.length==0) {
                        setPhoneNoErr(false)
                        
                    }
                    
                    setPhoneNo(PhoneNovalue)
                }

                // phone validation end

                // age validation start

                const AgeHandle = (e) => {
                    let item = e.target.value;
                    if (item >= 18 && item <= 100){
                         setAgeErr(false)
                    } 
                    else{ 
                        setAgeErr(true)
                    }
                    
                    if (item.length==0) {
                        setAgeErr(false)  
                    }
                    setAge(item)
             }
                const AvalueHandle = () => {
                    if(AgeErr == true)
                    {
                        alert('your Age is Invalid');
                    }
                    
                }
                // age validation end

                //on submit error start
                      
                const RunCheck = () =>{
                   
              
             } 
                   //on submit error end

                    //valueshandle function start   

        const valuesHandle = (e) => {
            e.preventDefault();
            if(FnameErr == true || fname.length==0)
            {
                alert("Your FIRST NAME is invalid");
            }
            if(LnameErr == true || lname.length==0)
            {
                alert("Your LAST NAME is invalid");
            }
            if(EmailErr == true || Email.length==0)
            {
                alert("Your E-mail is invalid");
            }
            if(PhoneNoErr == true || PhoneNo.length==0)
            {
                alert("Your Phone No. NAME is invalid");
            }
            if(AgeErr == true || Age.length==0)
            {
                alert("Your AGE is invalid");
            }
    }
                    //valueshandle function start


 const SubmitForm = () => {
        if (FnameErr === true || LnameErr === true || EmailErr === true || PhoneNoErr === true || AgeErr === true || fname.length==0 || lname.length==0 || Email.length==0|| PhoneNo.length==0||  Age.length==0) {
            document.getElementById('FailMessage').innerHTML = "Registration Unsuccessful";
            document.getElementById('FailMessage').style.display="block"
            document.getElementById('PassMessage').style.display="none"
            console.log("Unsuccessful")
        } else {
            document.getElementById('PassMessage').innerHTML = "Registration Successful";
            document.getElementById('PassMessage').style.display="block"
            document.getElementById('FailMessage').style.display="none"
            console.log("successful")
            
        }
    }

    return (
        <>
            <div className="mainContainer">
              <div className='PassMessage' id='PassMessage'></div>
                <div className='FailMessage' id='FailMessage'></div>
                <div className="mainForm">
                    <h1 className='mainHeading'>Regestration Form</h1>
                    <form className='formBox' onSubmit={valuesHandle} >
                        <label className='mainLabel'>First Name:</label>
                        <input type="text" name="firstname" id="fname" onChange={FnameHandle} className='mainInput'/> {FnameErr?<span className='ErrMessage'>First name is invalid</span>:""} <br/>
                        <label className='mainLabel'>Last Name:</label>
                        <input type="text" name="lastname" id="lname" onChange={LnameHandle} className='mainInput'/> {LnameErr?<span className='ErrMessage'>Last name is invalid</span>:""}<br/>
                        <br/>
                        <label className='mainLabel'>Email:</label>
                        <input type="text" name="email" onChange={EmailHandle} className='mainInput'/> {EmailErr?<span className='ErrMessage'>Email is invalid</span>:""} <br/>
                        <br/>
                         <label className='mainLabel'>Phone:</label>
                         <input className='mainInput' type="text" id="phone" name='Phone No'onChange={PhoneNoHandle} />{PhoneNoErr? <span className='ErrMessage'>Phone No Invalid</span>:""}
                        <br/>
                        <label className='mainLabel'>Age :</label>
                        <input className='mainInput' type="text" id="age" name='Age' onChange={AgeHandle} />{AgeErr? <span className='ErrMessage'>Age Invalid</span>:""} 

                        <button type='submit' onClick={SubmitForm} className='mainBtn'  > Submit </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default MainForm