import Header from "./Header"
import Slideshow from "./Slideshow"
import {useState, useEffect} from "react";
import FeaturedItems from "./FeaturedItems";


const Home = () => {
    const [slideShowItems, setslideShowItems] = useState([]);
    const [movies, setmovies] = useState([]);
    const [tvshows, settvshows] = useState([]);
    useEffect(() => {
        setslideShowItems(prev => [
            {url: "https://images-na.ssl-images-amazon.com/images/I/91FwGS2otBL._AC_SL1500_.jpg"},
            {url: "https://i0.wp.com/www.ageratingjuju.com/wp-content/uploads/2018/08/Ted-2-Age-Rating-2015-Movie-Poster-Images-and-Wallpapers.jpg?fit=1292%2C706&ssl=1" }
        ]);
        setmovies(prev => [
            {url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg"},
            {url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mE2WdHdIwPdnOpfrswpvm6ZyKJu.jpg"},
            {url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jMyudM6LM9VfIsR8ZRghlSpAdfv.jpg"},
            {url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uZkNbB8isWXHMDNoIbqXvmslBMC.jpg"},
            {url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"},
            {url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pR2fzm82fl0giommpo310LBOMbV.jpg"},
            {url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg"}
        ]);
        settvshows(prev => []);
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
