import { useState } from "react";
import "./BuscadorPeliculas.css";

export const BuscadorPeliculas = () => {
	const url = "https://api.themoviedb.org/3/search/movie";
	const apiKey = import.meta.env.VITE_API_KEY;

	const [search, setSearch] = useState("");
	const [peliculas, setPeliculas] = useState([]);

	const fetchPeliculas = async (e) => {
		try {
			const response = await fetch(`${url}?api_key=${apiKey}&query=${search}`);
			const data = await response.json();
			setPeliculas(data.results || []);
		} catch (error) {
			console.error("Error fetching movies:", error);
		}
	};
	const handleSearch = (e) => {
		setSearch(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		fetchPeliculas();
	};
	return (
		<div className="container">
			<h1 className="title">Buscador de Películas</h1>
			<form onSubmit={handleSubmit} className="search-form">
				<input
					type="text"
					placeholder="Busca tu película favorita"
					value={search}
					onChange={handleSearch}
					className="search-input"
				/>
				<button type="submit" className="search-button">
					Buscar
				</button>
			</form>
			<div className="movie-list">
				{peliculas.map((pelicula) => (
					<div key={pelicula.id} className="movie-card">
						{pelicula.poster_path && (
							<img
								src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
								alt={pelicula.title}
								className="movie-poster"
							/>
						)}
						<div className="movie-info">
							<h3 className="movie-title">{pelicula.title}</h3>
							<p className="movie-overview">{pelicula.overview}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
