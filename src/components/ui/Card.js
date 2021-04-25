import React from 'react';
import cardStyles from './Card.module.css';
function Card(props) {
	return (
		<div className={cardStyles.card}>{props.children}</div>
	)
}

export default Card;
