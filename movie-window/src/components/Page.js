import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import altImage from "../assets/noMoive.png";
import { useState } from "react";
import style from "./page.module.css";

const handleImageError = (event) => {
  event.target.src = altImage;
  event.target.style = "width:40"
};
function Page({title, genres,description,synopsis,background_image,poster,url}){

  return (
    <div className={style.screen}>
      <a className= {style.background_image}>
        <img src= {background_image}/>
        <h1 className={style.title}>{title}</h1>
        <div className={style.poster}>
         <img src= {poster} onError={handleImageError}/>
        </div>
        <div className={style.genres}>
          <h1>genres</h1>
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
          <a href = {url}>
            more detail
          </a>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </a>
    </div>
  );
};

export default Page;
