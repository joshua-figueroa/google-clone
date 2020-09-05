/* eslint-disable react/no-danger-with-children */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import "./styles.css";
import { SearchBar, SearchOptions, ActivityIndicator, ResultsAll, ResultsWiki } from "../../components";
import { useStateValue } from "../../util/StateProvider";
import useGoogleSearch from "../../hooks/useGoogleSearch";
import useWiki from "../../hooks/useWiki";

export default function Search() {
    const [{ term }, dispatch] = useStateValue();
    const history = useHistory();
    const { data, loading, images } = useGoogleSearch(term);
    const { wiki, wikiLoading, wikiURL } = useWiki(term);

    useEffect(() => {
        if (!term) return history.push("/");
    }, [term]);

    return (
        <>
            <ActivityIndicator visible={loading || wikiLoading} />
            <div className="searchPage">
                <div className="searchPage__header">
                    <Link to="/">
                        <img src="images/home_logo.png" alt="" className="searchPage__logo" />
                    </Link>
                    <div className="searchPage__headerBody">
                        <SearchBar hideButtons onSearchBar />
                        <SearchOptions />
                    </div>
                </div>
                <div className="searchPage__body">
                    <ResultsAll data={data} loading={loading} />
                    <ResultsWiki data={wiki} images={images} url={wikiURL} loading={wikiLoading} />
                </div>
            </div>
        </>
    );
}
