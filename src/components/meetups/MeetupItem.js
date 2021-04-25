import React from 'react'
import meetupItemStyle from './MeetupItem.module.css';
import Card from '../ui/Card';


function MeetupItem(props) {
	return (
		<li className={meetupItemStyle.item}>
			<Card>
				<div className={meetupItemStyle.image}>
					<img src={props.image} alt={props.title}/>
				</div>
				<div className={meetupItemStyle.content}>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
					<p>{props.description}</p>
				</div>
				<div className={meetupItemStyle.actions}>
					<button>To Favorites</button>
				</div>
			</Card>
		</li>
	)
}

export default MeetupItem;
