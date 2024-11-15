/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from 'axios';
import { BottomWarning } from "../components/ButtonWorning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signup = () => {
const [firstName,setfirstName] = useState("");
const [lastName,setlastName] = useState("");
const [username,setusername] = useState("");
const [Password,setPassword] = useState("");

  return <div className="bg-slate-300 h-screen flex justify-center">
  <div className="flex flex-col justify-center">
    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign Up"}/>
            <SubHeading label={"Enter Info about account to Create"}/>
            <InputBox onChange={(e) => {
              setfirstName(e.target.value);
            }} placeholder="F_Name" label={"First Name "}/>
            <InputBox onChange={(e) => {
              setlastName(e.target.value);
            }}placeholder="L_Name" label={"Last Name "}/>
            <InputBox onChange={(e) => {
              setusername(e.target.value);
            }} placeholder="abcd@gmail.com" label={"E_mail"}/>
            <InputBox onChange={(e) => {
              setPassword(e.target.value);
            }} placeholder="123@ABcd" label={"Password "}/>
      <div className="pt-4">
        <Button onClick={()=>{
            axios.post("http://localhost:3000/api/v1/user/signup",
              username,
              firstName,
              lastName,
              Password
            )
        }} label={"Sign up"} />
      </div>
      <BottomWarning label={"Alredy account Exists ??"} buttonText={"Sign in"} to={"/Signin"} />
    </div>
  </div>
</div>
}