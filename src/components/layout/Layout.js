import React from 'react';
import layoutStyles from './Layout.module.css';
import MainNavigation from './MainNavigation';


function Layout(props) {
	return (
		<div>
			<MainNavigation />
			<main className={layoutStyles.main}>
				{props.children}
			</main>
		</div>
	)
}

export default Layout;