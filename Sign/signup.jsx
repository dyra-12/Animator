import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { firebaseAuth } from "../utils/firebase-config";
<link rel="stylesheet" href="signup.css" />
export default function Signup() {


  const container = {
    background:"black",
  backgroundSize: "cover",
  fontfamily:"Montserrat",
  height:"100vh"
  }
  return (
    <Container style={container}>
        <div class="login-block">
          <div class="title">
            <h1>Animators Account</h1>
            
              <h2>Create an Account for free!</h2>
          </div>
          <div class="form">
            <input type="text" value="" placeholder="Enter Username" id="username" />
            <input type="email" value="" placeholder="Enter e-mail" id="email" />
            <input type="password" value="" placeholder="Enter Password" id="password" />
            <button>Continue</button>
          </div>
          <div class="end">
            <h1>------------OR--------------</h1>
            
              <a href="" id="a1">BACK</a>


            </div>

          </div>
        </Container>
        );
}

        const Container = styled.div`

        `;