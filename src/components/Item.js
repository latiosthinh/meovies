import React from 'react';
const { imgUrl } = require( '../data' );

function Item( { props } ) {
	const imgSrc = imgUrl + props.poster_path;

	return (
		<div className="meovies-item">
			<img src={ imgSrc } alt={ props.title } />
			<h3>{ props.title }</h3>
		</div>
	)
}

export default Item
