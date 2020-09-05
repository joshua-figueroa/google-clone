/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { create } from "apisauce";
import google_api_key from "../config/keys";

const CONTEXT_KEY = "ba6ff88ec9f8ccaf3";

export default function useGoogleSearch(term) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);

    const api = create({
        baseURL: "https://www.googleapis.com",
    });
    useEffect(() => {
        (async () => {
            const imagesArr = [];
            setLoading(true);
            const response = await api.get("/customsearch/v1", {
                key: google_api_key,
                cx: CONTEXT_KEY,
                imgType: "photo",
                c2coff: 1,
                q: term,
            });

            if (!response.ok) return console.log(response.originalError);

            setData(response.data);
            if (response.data.items) {
                response.data.items.forEach((item) => {
                    if (item.pagemap?.cse_thumbnail) imagesArr.push(item.pagemap.cse_thumbnail[0].src);
                    else if (item.pagemap?.cse_image) imagesArr.push(item.pagemap.cse_image[0].src);
                });
            }
            setImages(imagesArr);
            setLoading(false);
        })();
    }, [term]);

    return { data, loading, images };
}
