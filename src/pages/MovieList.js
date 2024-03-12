import React, { useEffect, useState } from "react";
import { Card } from "../components";

export const MovieList = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchMovies = async () => {
			const response = await fetch(`${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`);

			const data = await response.json();
			setMovies(data.results);
		}
		fetchMovies();
	},[])

	return (
		<main>
			<section className="max-w-7xl mx-auto py-7">
				<div className="flex justify-start flex-wrap">
					{movies.map((movie) => (
						<Card key={movie.id} movie={movie}/>
					) )}
				</div>
			</section>
		</main>
	);
};
