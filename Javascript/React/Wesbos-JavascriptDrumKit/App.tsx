import React from 'react';
import ReactDOM from 'react-dom';
import Sound from './Sound.tsx'
import './style.css';

const App: React.FunctionComponent = () => {
	
	const kbdArray = [
		[65,'A','clap'],
		[83,'S','hihat'],
		[68,'D','kick'],
		[70,'F','openhat'],
		[71,'G','boom'],
		[72,'H','ride'],
		[74,'J','snare'],
		[75,'K','tom'],
		[76,'L','tink']
	]
	
	return (
		<div className="App">
			<div className="keys">
				<Sound data={kbdArray}	/>
			</div>		
		</div>
	)
}
	

ReactDOM.render(<App />, document.getElementById('root'));
	
	
	
	