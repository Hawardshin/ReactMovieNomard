import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import altImage from "../assets/noMoive.png"
import style from "./Movie.module.css"
import { useState } from "react";
const handleImageError = (event) => {
  event.target.src = altImage;
  event.target.style = "width:40"
};

function Movie({id,coverImage,title,summary,genres}){
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
  <div
    className = {style.pic}
  >
    <h2 >
      <Link to={`/movie/${id}`}>
      <a className = {style.screen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      <div>
        <div
          className={!isHovered ? style.top : style.hover}
        ><h2>{title}</h2>
          {summary}</div>
      </div>
      <img src={coverImage} onError={handleImageError}
        alt= ""
      />
      </a>
      </Link>
    </h2>
    <ul className={style.gallery}>
    <a className={style.title}>{title}</a>

    {genres.map((genre, index) => {
      if (index % 2 === 0) {
        const nextGenre = genres[index + 1]; // 다음 genre 가져오기
        return (
          <li key={index}>
            {genre}, {nextGenre}
          </li>
        );
      }
      return null; // 홀수 인덱스의 경우에는 빈 요소 반환
    })}
  </ul>
  <Link to={`/movie/${id}`}>
    <span>Detail</span>
    </Link>
  </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title   : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
