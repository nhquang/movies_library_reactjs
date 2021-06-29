import React from 'react'
import { Slide } from 'react-slideshow-image';
import SlideshowItem from './SlideshowItem';

const Slideshow = () => {
    const items = [
        {url: "https://www.media4.hw-static.com/wp-content/uploads/6174823.jpg"},
        {url: "https://upload.wikimedia.org/wikipedia/en/6/62/Ted_poster.jpg" }
    ];
    return (
        <div className="slide-container" style={{width: "60%", margin: "auto" }}>
            <Slide>
                {items.map((item) => (
                    <SlideshowItem key ={item.url} url={item.url}/>
                ))}
            </Slide>
        </div>
    )
}

export default Slideshow
