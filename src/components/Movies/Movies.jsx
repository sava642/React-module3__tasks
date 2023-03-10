import React from "react";
import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { Input, Button } from "./Movies.styled";
import { fetchSearchMovies } from '../../api'

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Movies() {
	const [foundMovies, setFoundMovies] = useState([])
	const [searchParams, setSearchParams] = useSearchParams();
	const valueParam = searchParams.get('query') ?? '';
	const location = useLocation();


	const handleSubmit = event => {
		event.preventDefault();
		const form = event.currentTarget;
		const value = form.elements.searchValue.value;
		if (value === "") {
			toast('Впишите значение поиска')
			return;
		}
		setSearchParams(value !== '' ? { query: value } : {});
		form.reset();
	}
	useEffect(() => {
		if (valueParam === "") {
			return;
		}
		async function fetchSearch() {
			const url = 'search/movie'
			try {
				const data = await fetchSearchMovies(url, valueParam);
				const foundMovies = data.results.map(({ id, title
				}) => {
					return {
						id,
						title,
					};
				});

				if (foundMovies) {
					setFoundMovies(foundMovies);
				}
			} catch (error) {
				toast(error.massage)
			}
		}
		fetchSearch()
	}, [valueParam])

	return (
		<>
			<ToastContainer />
			<form onSubmit={handleSubmit}>
				<Input
					type="text"
					name="searchValue"
					placeholder="Search video"
				/>
				<Button type="submit" >
					Search
				</Button>
			</form>
			<div>
				{foundMovies.map(({ id, title }) => (<ul key={id}>
					<Link to={`/movies/${id}`} state={{ from: location }}>
						<li>{title}</li>
					</Link>
				</ul>
				))}
			</div>
		</>
	)
}
