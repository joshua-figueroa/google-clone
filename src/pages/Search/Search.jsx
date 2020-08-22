/* eslint-disable react/no-danger-with-children */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import "./styles.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useStateValue } from "../../util/StateProvider";
import useGoogleSearch from "../../hooks/useGoogleSearch";
// import data from "../../config/response";
import breadcrumbs from "../../util/breadcrumbs";
import ActivityIndicator from "../../components/ActivityIndicator/ActivityIndicator";

export default function Search() {
    const [{ term }, dispatch] = useStateValue();
    const history = useHistory();
    const { data, loading } = useGoogleSearch(term);

    useEffect(() => {
        if (!term) return history.push("/");
    }, []);

    return (
        <>
            <ActivityIndicator visible={loading} />
            <div className="searchPage">
                <div className="searchPage__header">
                    <Link to="/">
                        <img src="images/home_logo.png" alt="" className="searchPage__logo" />
                    </Link>
                    <div className="searchPage__headerBody">
                        <SearchBar hideButtons onSearchBar />
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
                    </div>
                </div>
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results (
                        {data?.searchInformation.formattedSearchTime} seconds)
                    </p>
                    {data?.items.map((item) => (
                        <div className="searchPage__result">
                            <a href={item.link} className="searchPage__resultLink">
                                {breadcrumbs(item.link)}
                                <ArrowDropDownIcon />
                            </a>
                            <a href={item.link} className="searchPage__resultTitle">
                                <h3>{item.title}</h3>
                            </a>
                            <p
                                dangerouslySetInnerHTML={{ __html: item.htmlSnippet }}
                                className="searchPage__resultSnippet"
                            ></p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
