import Header from "./Header"
import Slideshow from "./Slideshow"
import {useState, useEffect} from "react";
import FeaturedItems from "./FeaturedItems";

const Home = ({slideShowItems, featuredMovies, featuredTVShows}) => {
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

    const [showSearchResults, setShowSearchResults] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [text, setText] = useState("");

    const submitting = async (e) =>{
        e.preventDefault();
        if(text.trim() !== ""){
            const res = await fetch(`https://movies-night-back.herokuapp.com/search?name=${text}`);
            const parsed = await res.json();
            if(res.status != 200 || parsed.length === 0)
                alert("Not Found");
            else {
                setShowSearchResults(true);
                setSearchResults(prev => parsed);
            }
        }
        else{
            setShowSearchResults(false);
            setSearchResults(prev => []);
        }
    }
    


    return (
        <div>
            <Header title={"Movies Night"}/>
            <Slideshow items ={slideShowItems} />
            <form className= "form" style={{width:"40%"}} onSubmit={submitting}>
                <div className='form-control'>
                    <input type="text" placeholder="Enter movie/tvshow title" value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            <input type="submit" value ="Search" className="btn btn-block"/>
            </form>
            {showSearchResults && <FeaturedItems items={searchResults} title={"Search Results:"} />}
            <FeaturedItems items={featuredMovies} title={"Featured Movies"} />
            <FeaturedItems items={featuredTVShows} title={"Featured TV Shows"}/>
            <img className="img" style={{ display:"block", width:"100%", borderRadius: "0px", margin:"40px auto"}} src="/content.PNG"/>
        </div>
    )
}

export default Home
