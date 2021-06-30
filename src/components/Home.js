import Header from "./Header"
import Slideshow from "./Slideshow"
import {useState, useEffect} from "react";
import FeaturedItems from "./FeaturedItems";


const Home = () => {
    const [slideShowItems, setslideShowItems] = useState([]);
    const [movies, setmovies] = useState([]);
    const [tvshows, settvshows] = useState([]);
    useEffect(() => {
        const fetchMovies = async () =>{
            const data = await fetch("http://localhost:3000/movies");
            const parsed = await data.json();
            const temp = [];
            for(let i = 0; i < 8; i++)
                temp.push(parsed[i]);
            setmovies(prev => temp);
        }
        const fetchTVShows = async() =>{
            const data = await fetch("http://localhost:3000/tvShows");
            const parsed = await data.json();
            const temp = [];
            for(let i = 0; i < 8; i++)
                temp.push(parsed[i]);
            settvshows(prev => temp);
        }
        const fetchSlideShowItems = async() =>{
            const data = await fetch("http://localhost:3000/banners");
            const parsed = await data.json();
            setslideShowItems(prev => parsed);
        }
        fetchMovies();
        fetchTVShows();
        fetchSlideShowItems();
    }, [])




    return (
        <div>
            <Header title={"Movies Night"}/>
            <Slideshow items ={slideShowItems} />
            <FeaturedItems items={movies} title={"Featured Movies"}/>
            <FeaturedItems items={tvshows} title={"Featured TV Shows"}/>
        </div>
    )
}

export default Home
