import React from "react";

function About(props){
    console.log(props)
    console.log(props.history)
    return(
        <div className="about__container">
            <span>
                About this page : I built it because I love movies. 
            </span>
            <span>
                George Orwell, 1984
            </span>
        </div>
    )
     
}

export default About;