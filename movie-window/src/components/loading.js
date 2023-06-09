import React from 'react';
import {Background, LoadingText} from "./Styles"
import Spinner from "../assets/spinner.gif";
export const Loading = ()=>{
  return (
    <Background>
    <img src={Spinner} alt="loading" width="5%" />
    <br></br>
    <LoadingText>loading...</LoadingText>
  </Background>
  );
};

export default Loading;
