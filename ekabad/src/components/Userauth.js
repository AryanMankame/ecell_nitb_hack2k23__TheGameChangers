import React from "react";
import * as Components from "./Component";
import { useNavigate } from "react-router-dom";
import './styles.css'
// import { GoogleAuthProvider } from "@firebase/auth";
const Userauth = () => {
  const navigate = useNavigate();
  const [signIn, toggle] = React.useState(true);
  const [name,setname] = React.useState('');
  const [email,setemail] = React.useState('');
  const [password,setpassword] = React.useState('');
//   const provider = new GoogleAuthProvider();
  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type="text" placeholder="Name" onChange = {(event) => {
              setname(event.target.value);
          }}/>
          <Components.Input type="email" placeholder="Email" onChange= {(event) => {
            setemail(event.target.value)
          }}/>
          <Components.Input type="password" placeholder="Password" />
          <Components.Button onClick={(event) => {
            event.preventDefault();
            console.log(name,email,password)
          }}>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" onChange = {(event) => {
              setemail(event.target.value);
          }}/>
          <Components.Input type="password" placeholder="Password" onChange = {(event) => {
              setpassword(event.target.value);
          }}/>
          <Components.Button onClick = {(event) => {
            event.preventDefault();
            console.log(name,email,password)
            fetch("http://localhost:3004/auth/login", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({
            email,
            password
            }),

            // Adding headers to the request
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
            })
            navigate('/threeBtn');
          }}
          >Sigin In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.LeftPartGhostButton onClick={() => {
              toggle(true)} 
              }>
              Sign In
            </Components.LeftPartGhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <img id = "logo" src = "elogopn.png"></img>
            <button id = "btn-fix" onClick={() => { toggle(false)}}>
              Sign Up
            </button>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};
export default Userauth;
