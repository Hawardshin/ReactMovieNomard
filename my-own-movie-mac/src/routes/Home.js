import {useEffect, useState} from "react";
import Movie from "../components/Movie"
import Loading from "../components/loading"

function Home(){
  const [isloading, setLoading] = useState(true);
  const [movies,setMovies] = useState([]);
  const getMovies = async()=>{
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=30&sort_by=year`)).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(()=>{
    getMovies();
  }, [])
  // console.log(movies);
  return(
    <div>
      { isloading ? (
         <Loading />
        ) : (
        <div>
          {movies.map((movie)=>(
            <Movie
            key ={movie.id}
            id = {movie.id}
            coverImage={movie.medium_cover_image}
            title = {movie.title}
            summary={movie.summary}
            genres={movie.genres}
            />
            ))}
        </div>
      )}
    </div>
  );
}

export default Home;
