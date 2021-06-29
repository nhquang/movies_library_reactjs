import React from 'react'

const SlideshowItem = ({url}) => {
    return (
        <div className="each-slide">
            <div style={{backgroundImage: `url(${url})`, height:"500px", backgroundRepeat: "no-repeat", backgroundPosition :"center", backgroundSize:"cover"}}>
              {/* <span>{title}</span> */}
            </div>
        </div>
    )
}

export default SlideshowItem
