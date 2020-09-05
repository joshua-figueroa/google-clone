import React from "react";
import ShareIcon from "@material-ui/icons/Share";

import "./styles.css";

export default function ResultsWiki({ data, images, url, loading = true }) {
    if (loading) return null;
    if (!loading && !data.extract) return null;

    return (
        <div className="searchPage__wiki">
            <div className="wiki__images">
                {images.map((image) => (
                    <a href={image} target="_blank" rel="noopener noreferrer">
                        <img src={image} alt="" className="wiki_image" />
                    </a>
                ))}
            </div>
            <div className="wiki__title">
                <span>{data?.title}</span>
                <ShareIcon className="wiki__share" />
            </div>
            <div className="wiki__desc">
                <span>{data?.extract}</span>&nbsp;
                <a href={url} className="wiki__url" target="_blank" rel="noopener noreferrer">
                    Wikipedia
                </a>
            </div>
        </div>
    );
}
