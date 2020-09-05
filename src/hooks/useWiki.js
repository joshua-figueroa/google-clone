import { useState, useEffect } from "react";

export default function useWiki(term) {
    const [wiki, setWiki] = useState();
    const [wikiURL, setWikiURL] = useState();
    const [wikiLoading, setWikiLoading] = useState();

    useEffect(() => {
        (async () => {
            setWikiLoading(true);
            const response = await fetch(
                `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=2&exlimit=1&explaintext=1&formatversion=2&format=json&origin=*&titles=${term}`
            );
            const data = await response.json();
            setWiki(data.query.pages[0]);

            const res = await fetch(
                `https://en.wikipedia.org/w/api.php?action=opensearch&limit=1&format=json&origin=*&search=${term}`
            );
            const url = await res.json();
            setWikiURL(url[3][0]);

            setWikiLoading(false);
            console.log(data.query.pages[0].extract);
        })();
    }, [term]);

    return { wiki, wikiLoading, wikiURL };
}
