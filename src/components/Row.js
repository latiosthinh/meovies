import React, { useState, useEffect } from 'react';
import Item from './Item';

const { v4: uuidv4 } = require( 'uuid' );

function Row( { title, url } ) {
	const [ movies, setMovies ] = useState( [] );

	useEffect(() => {
		async function fetchData() {
			fetch( url )
				.then( res => res.json() )
				.then( d => setMovies( d.results ) )
		}

		fetchData();
	}, [ url ]);

	console.table(movies)

	return (
		<section className="container">
			<h2>{ title }</h2>
			<div className="meovies-list">
				{
					movies.map( movie => <Item key={ uuidv4() } props={ movie } /> )
				}
			</div>
		</section>
	)
}

export default Row
