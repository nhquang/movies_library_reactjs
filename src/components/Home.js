import Header from "./Header"
import Slideshow from "./Slideshow"
import {useState, useEffect} from "react";
import FeaturedItems from "./FeaturedItems";

const Home = ({movies, tvshows, slideShowItems}) => {
    // const [slideShowItems, setslideShowItems] = useState([]);
    // const [movies, setmovies] = useState([]);
    // const [tvshows, settvshows] = useState([]);
    // useEffect(() => {
    //     const fetchMovies = async () =>{
    //         //const data = await fetch("http://localhost:4000/api/movies");
    //         const data = await fetch("https://movies-night-nhquang.herokuapp.com/api/movies");
	// 		const parsed = await data.json();
    //         const temp = [];
    //         for(let i = 0; i < 8; i++)
    //             temp.push(parsed[i]);
    //         setmovies(prev => temp);
    //     }
    //     const fetchTVShows = async() =>{
    //         //const data = await fetch("http://localhost:4000/api/tvShows");
    //         const data = await fetch("https://movies-night-nhquang.herokuapp.com/api/tvShows");
	// 		const parsed = await data.json();
    //         const temp = [];
    //         for(let i = 0; i < 8; i++)
    //             temp.push(parsed[i]);
    //         settvshows(prev => temp);
    //     }
    //     const fetchSlideShowItems = async() =>{
    //         //const data = await fetch("http://localhost:4000/api/banners");
    //         const data = await fetch("https://movies-night-nhquang.herokuapp.com/api/banners");
	// 		const parsed = await data.json();
    //         setslideShowItems(prev => parsed);
    //     }
    //     fetchMovies();
    //     fetchTVShows();
    //     fetchSlideShowItems();
    // }, [])




    return (
        <div>
            <Header title={"Movies Night"}/>
            <Slideshow items ={slideShowItems} />
            <FeaturedItems items={movies} title={"Featured Movies"} movie={true}/>
            <FeaturedItems items={tvshows} title={"Featured TV Shows"} movie={false}/>
            <img className="img" style={{ display:"block", width:"100%", borderRadius: "0px", margin:"40px auto"}} src="/content.PNG"/>
        </div>
    )
}

export default Home
