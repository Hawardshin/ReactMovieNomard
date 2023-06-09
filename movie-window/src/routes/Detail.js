import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useState } from "react";
import Page from "../components/Page";
import Loading from "../components/loading"
function Detail(){
  const {id} = useParams();
  const [isloading, setLoading] = useState(true);
  const [movie,setMovies] = useState([]);
  const getMovie = async()=>{
    const json =  await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);
  }
  useEffect(()=>{
    getMovie();
  },[])
  return (
    <div>
    { isloading ? (
      <Loading />
    ): (
     <Page
      key ={movie.id}
      id = {movie.id}
      description={movie.description_full}
      title = {movie.title}
      genres={movie.genres}
      synopsis = {movie.synopsis}
      background_image = {movie.background_image}
      poster = {movie.large_cover_image}
      url = {movie.url}
     />
    )}
  </div>
  )
}

export default Detail;
