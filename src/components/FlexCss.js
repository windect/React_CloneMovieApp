import React from "react";
import "./FlexCss.css";

class FlexCss extends React.Component{
    render(){
        return(
            <div className="father">
                <div className="child">1</div>
                <div className="child">2</div>
                <div className="child">3</div>
                {/* <div className="child">4</div>
                <div className="child">5</div>
                <div className="child">6</div> */}
            </div>
        )
    }
}

export default FlexCss;