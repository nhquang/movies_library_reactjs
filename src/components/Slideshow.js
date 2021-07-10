import React from 'react'
import { Slide } from 'react-slideshow-image';
import SlideshowItem from './SlideshowItem';

const Slideshow = ({items}) => {
    
    return (
        <div className="slide-container" style={{width: "95%", margin: "auto"}}>
            <Slide>
                {items.map((item) => (
                    <SlideshowItem key ={item.url} url={item.url}/>
                ))}
            </Slide>
        </div>
    )
}

export default Slideshow
