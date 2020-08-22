import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

import "./styles.css";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon className="apps__icon" />
                    <Avatar className="avatar__icon" />
                </div>
            </div>
            <div className="home__body">
                <img src="images/home_logo.png" alt="" />
                <div className="home__inputContainer">
                    <SearchBar />
                </div>
            </div>
        </div>
    );
}
