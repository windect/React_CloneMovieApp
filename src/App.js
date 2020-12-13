import React from "react";
import {HashRouter, Route} from "react-router-dom";
// import About from "./routes/About";
// import Home from "./routes/Home";
// import Detail from "./routes/Detail";

// import Navigation from "./components/Navigation";
import Flex from "./components/FlexCss";
import Grid from "./components/GridCss";
// import "./App.css";


function App(){
    return (
        // browserRouter 찾아봐야할것 exact={true}
    <HashRouter>
        {/* <Navigation/> */}
        <Route path="/" component={Flex}/>
        {/* <Route path="/" component={GridCssAutofitl}/> */}
       
        {/* <Route path="/" component={Grid}/> */}
        {/* <Route path="/"  exact={true}  component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/movie/:id" component={Detail} /> */}
    </HashRouter>
    );
}

export default App;