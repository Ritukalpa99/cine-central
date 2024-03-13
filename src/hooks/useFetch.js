import { useState, useEffect } from "react";

export const useFetch = (apiPath,queryTerm="") => {
	const [data, setData] = useState([]);
	const url = `${process.env.REACT_APP_BASE_URL}${apiPath}?api_key=${process.env.REACT_APP_API}&query=${queryTerm}`

	useEffect(() => {
		const fetchMovies = async () => {
			const response = await fetch(url);

			const json = await response.json();
			setData(json.results);
		};
		fetchMovies();
	}, [url]);

	return { data };
};
