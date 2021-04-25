import React, {useContext} from 'react'
import meetupItemStyle from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
	const favoritesCtx = useContext(FavoritesContext);
	const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

	function toggleFavoriteHandler(){
		if(itemIsFavorite){
			favoritesCtx.removeFavorite(props.id);
		} else {
			favoritesCtx.addFavorite({
				id: props.id,
				title: props.title,
				description: props.description,
				image: props.image,
				address: props.address,
			});
		}
	}

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
					<button onClick={toggleFavoriteHandler}>
						{itemIsFavorite ? 
							"Remove from Favorites" : 
							"Add to Favorites"}
					</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
