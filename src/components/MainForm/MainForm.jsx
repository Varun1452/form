import React from "react";
import "./MainForm.css";

const MainForm = () => {
     return(
    <>

      <div className="FormBox">

    <h1 className="MainHeading">Registraion form</h1>

    <label className="FieldOne">First Name:- </label>
    <input type="text" name="firstname" placeholder="Enter your first name"/> <br />

    <label className="FieldOne">Last Name:- </label>
    <input type="text" name="firstname" placeholder="Enter your last name"/> <br />

    <label className="FieldOne">Email:- </label>
    <input type="text" name="Email" placeholder="Enter your Email"/> <br />

    <label className="FieldOne">Phone:- </label>
    <input type="text" name="Phone" placeholder="Enter your Phone"/> <br />

    <label className="FieldOne">D.O.B:- </label>
    <input type="text" name="Date" placeholder="Enter your DOB"/> <br />
</div>
    </>


)
}

export default MainForm;