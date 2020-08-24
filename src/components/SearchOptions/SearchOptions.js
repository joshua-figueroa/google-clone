import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./styles.css";

export default function SearchOptions() {
    return (
        <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
                <div className="searchPage__option">
                    <Link to="/all">
                        <SearchIcon />
                        <span>All</span>
                    </Link>
                </div>
                <div className="searchPage__option">
                    <Link to="/images">
                        <ImageIcon />
                        <span>Images</span>
                    </Link>
                </div>
                <div className="searchPage__option">
                    <Link to="/shopping">
                        <LocalOfferIcon />
                        <span>Shopping</span>
                    </Link>
                </div>
                <div className="searchPage__option">
                    <Link to="/maps">
                        <RoomIcon />
                        <span>Maps</span>
                    </Link>
                </div>
                <div className="searchPage__option">
                    <Link to="/more">
                        <MoreVertIcon />
                        <span>More</span>
                    </Link>
                </div>
            </div>
            <div className="searchPage__optionsRight">
                <div className="searchPage__option">
                    <Link to="/settings">Settings</Link>
                </div>
                <div className="searchPage__option">
                    <Link to="/tools">Tools</Link>
                </div>
            </div>
        </div>
    );
}
