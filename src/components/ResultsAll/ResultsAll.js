import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import "./styles.css";
import breadcrumbs from "../../util/breadcrumbs";

export default function ResultsAll({ data, loading }) {
    return (
        <div className="searchPage__results">
            {!loading && (
                <p className="searchPage__resultCount">
                    About {data?.searchInformation.formattedTotalResults} results (
                    {data?.searchInformation.formattedSearchTime} seconds)
                </p>
            )}
            {data?.items.map((item) => (
                <div className="searchPage__result" key={item.cacheId}>
                    <a href={item.link} className="searchPage__resultLink">
                        {breadcrumbs(item.link)}
                        <ArrowDropDownIcon />
                    </a>
                    <a href={item.link} className="searchPage__resultTitle">
                        <h3>{item.title}</h3>
                    </a>
                    <p dangerouslySetInnerHTML={{ __html: item.htmlSnippet }} className="searchPage__resultSnippet"></p>
                </div>
            ))}
        </div>
    );
}
