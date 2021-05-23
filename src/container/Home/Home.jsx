// Libraries
import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import GlobalProvider from "../../context/context";

// Pages
import Product from "../pages/Product/Product";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../pages/BlogPost/BlogPost";
import YoutubeCompPage from "../pages/YoutubeCompPage/YoutubeCompPage";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";

// Style
import "./Home.css";
import Hooks from "../pages/Hooks/Hooks";

class Home extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <div className={"navigation"}>
                        <Link to={"/"}> Blog Post </Link>
                        <Link to={"/product"}> Product </Link>
                        <Link to={"/lifecycle"}> LifeCycle </Link>
                        <Link to={"/youtube"}> Youtube </Link>
                        <Link to={"/hooks"}> Hooks </Link>
                    </div>
                    <hr/>

                    {/*Routing*/}
                    <Route path={"/"} exact component={BlogPost} />
                    <Route path={"/detail-posts/:postID"} component={DetailPost} />
                    <Route path={"/product"} component={Product} />
                    <Route path={"/lifecycle"} component={LifeCycleComp} />
                    <Route path={"/youtube"} component={YoutubeCompPage} />
                    <Route path={"/hooks"} component={Hooks} />
                </Fragment>
            </Router>
        )
    }
}

export default GlobalProvider(Home);
