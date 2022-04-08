import React from 'react';
import CreateBurger from './CreateBurger';

const App = () => {
	return (
		<div className="App">
			<CreateBurger 
				burgerStack={[
					'Lettuce',
					'Tomatoes',
					'Cheese',
					'Lettuce',
					'Tomatoes',
					'Tomatoes',
				]}
			/>
		</div>
	);
}

export default App;