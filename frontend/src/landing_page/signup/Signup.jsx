import { useEffect, useState } from "react";
import React from "react";
import Hero from "../support/Hero";
import CreateTicket from "../support/CreateTicket";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InputBox } from "./InputBox";
import { SubHeading } from "./SubHeading";
import { Heading } from "./Heading";
import { Button } from "./Button";
import { BottomWarning } from "./BottomWarning";
import { fakerEN_AU_ocker } from "@faker-js/faker";




const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      const userToken = localStorage.getItem("token");
  
      // Check if token exists in local storage
      if (userToken) {
        navigate("/"); // Redirect to sign-in page if token doesn't exist
      }
    }, []);

    

  return (
    
  
      <div className="bg-slate-100 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your infromation to create an account"} />
            <InputBox
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="FirstName"
              label={"First Name"}
            />
            <InputBox
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="LastName"
              label={"Last Name"}
            />
            <InputBox
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Email"
              label={"Email"}
            />
            <InputBox
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              label={"Password"}
            />
            <div className="pt-4">
              <Button
                onClick={async () => {
                  const response = await axios.post(
                      "http://localhost:3002/signup",
                    {
                      username,
                      firstName,
                      lastName,
                      password,
                    }
                  );
                  localStorage.setItem("token", response.data.token);
                  window.location.href = "http://localhost:5174/";
                }}
                label={"Sign up"}
                to={"/"}
              />
            </div>
            <BottomWarning
              label={"Already have an account?"}
              buttonText={"Sign in"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    )
}

export default Signup;


// function Signup() {
//   return ( 
//       <div>
//           <Hero/>
//           <CreateTicket/>
//       </div>
//    );
// }

// export default Signup;
