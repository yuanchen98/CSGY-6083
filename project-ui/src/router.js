// import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {HashRouter as Router,Route,Routes} from "react-router-dom";
import React from 'react'
import App from "./App";
import NavBar from "./components/NavBar";
import { Home } from "./components/Home";
// import Login from "./pages/simplerouter/login";
// import Home from "./pages/simplerouter/home";


export default function IRouter(){
    return  <Router>
            {/*普通方式，根据path匹配,但是App的内容会出现在Login上方 ->图1所示*/}
            {/*<Route path = "/" component={App}></Route>*/}
            {/*<Route path = "/login" component={Login}></Route>*/}
            {/*<Route path = "/home" component={Home}></Route>*/}

        {/*如果用swithc，浏览器输入/home也只会加载App页，因为/home先匹配了/*/}
        {/*加上 exact 可以精准匹配 ->图2所示*/}
        {/*如果导入的是HashRouter，会自动加上# 如 http://localhost:3000/login#/ ->图3所示*/}
        <Routes>
            <Route exact path = "/" element={<App />}></Route>
            <Route exact path = "/login" element={<App />}></Route>
            <Route exact path = "/home" element={<Home />}></Route>
        </Routes>

    </Router>
}

