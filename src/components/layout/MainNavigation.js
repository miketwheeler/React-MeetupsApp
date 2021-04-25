import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import mainNavStyle from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
	const favoritesCtx = useContext(FavoritesContext);

	return (
		<header className={mainNavStyle.header}>
			<div className={mainNavStyle.logo}>React Meetups</div>
			<nav>
				<ul>
					<li>
						<Link to='/'>All Meetups</Link>
					</li>
					<li>
						<Link to='/new-meetup'>Add New Meetups</Link>
					</li>
					<li>
						<Link to='/favorites'>
							My Favorites
							<span className={mainNavStyle.badge}>{favoritesCtx.totalFavorites}</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default MainNavigation;
