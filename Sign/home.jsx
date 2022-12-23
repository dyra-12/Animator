import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

export default function Anime(){

  const [isScrolled, setIsScrolled] =useState(false)
  
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset ===0 ? false : true); 
    return () => (window.onscroll = null); 
  };
  return(
    <div>
      <Navbar isScrolled={isScrolled} />
    </div>
  )
}