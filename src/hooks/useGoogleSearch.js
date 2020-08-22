/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { create } from "apisauce";
import google_api_key from "../config/keys";

const CONTEXT_KEY = "ba6ff88ec9f8ccaf3";

export default function useGoogleSearch(term) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const api = create({
        baseURL: "https://www.googleapis.com",
    });
    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await api.get("/customsearch/v1", {
                key: google_api_key,
                cx: CONTEXT_KEY,
                q: term,
            });

            if (!response.ok) return console.log(response.originalError);

            setData(response.data);
            setLoading(false);
        })();
    }, [term]);

    return { data, loading };
}
