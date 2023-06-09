import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import altImage from "../assets/noMoive.png";
import { useState } from "react";
import style from "./page.module.css";
function Page({title, genres,description,synopsis,background_image,poster}){

  return (
    <div className={style.screen}>
      <a className= {style.background_image}>
        <img src= {background_image}/>
        <div className={style.poster}>
         <img src= {poster}/>
        </div>
        <h1 className={style.title}>{title}</h1>
        <div className={style.genres}>
          <h3>genres</h3>
          {genres.map((each,idx)=>{
            return (
            <li key={idx}>
              {each}
            </li>);
          })}
        </div>
        <div className={style.description}>
          <h3>description</h3>
          {description}
        </div>
        <div className={style.synopsis}>
          <h3>synopsis</h3>
          {synopsis}
        </div>
      </a>
    </div>
  );


};

export default Page;
