import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            
            <div style={{width:"75%", margin:"auto", display:"flex", justifyContent:"center"}}>
                <a href="#" style={{display:"inline-block"}} className="fa fa-facebook"></a>
                <a href="#" style={{display:"inline-block"}} className="fa fa-twitter"></a>
                <a href="#" style={{display:"inline-block"}} className ="fa fa-linkedin"></a>
                <a href="#" style={{display:"inline-block"}} className="fa fa-youtube"></a>
                <a href="#" style={{display:"inline-block"}} className="fa fa-instagram"></a>
            </div>
            <div style={{width:"50%", textAlign:"center", margin:"auto"}}>
            Copyright &copy; 2021
            <br/>
            Quang Nguyen
            </div>
        </div>
    )
}
 
export default Footer
