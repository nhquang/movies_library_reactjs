import React from 'react'

const SlideshowItem = ({url}) => {
    return (
        <div className="each-slide">
            <img className="img" src={url} style={{margin:"auto", display:"block"}}/>
        </div>
    )
}

export default SlideshowItem
