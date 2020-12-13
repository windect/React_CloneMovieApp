import React from "react";
import "./GridCss.css"

class GridCss extends React.Component{
    render(){
        return(
            <div>
            auto-fill
            <div className="grid">
                <div className="item">1</div>
                <div className="item">2</div>
                <div className="item">3</div>
                <div className="item">4</div>
                <div className="item">5</div>
                <div className="item">6</div>
                <div className="item">7</div>
                <div className="item">8</div>
                <div className="item">9</div>
                <div className="item">10</div>
            </div>
            auto-fit
            <div className="grid">
                <div className="item">11</div>
                <div className="item">12</div>
                <div className="item">13</div>
                <div className="item">14</div>
                <div className="item">15</div>
                <div className="item">16</div>
                <div className="item">17</div>
                <div className="item">18</div>
                <div className="item">19</div>
                <div className="item">20</div>
            </div>
            </div>
        )
        // return(
        //     <div className="grid">
        //         <div className="header">header</div>
        //         <div className="content">content</div>
        //         <div className="nav">nav</div>
        //         <div className="footer">footer</div>
        //     </div>
        // )
    }
}

export default GridCss


// class GridCss extends React.Component{
//     render(){
//         return(
//             <div className="father">
//                 <div className="child">1</div>
//                 <div className="child">2</div>
//                 <div className="child">3</div>
//                 <div className="child">4</div>
//                 <div className="child">4</div>
//                 <div className="child">4</div>
//                 <div className="child">4</div>
//                 <div className="child">4</div>
//                 <div className="child">4</div>
//                 <div className="child">4</div>
//                 <div className="child">4</div>
//                 <div className="child">4</div>
//             </div>
//         )
//     }
// }

// export default GridCss