import React, { useEffect } from "react";

/* useEffect instead on componentOnMount for react17 */
const Sound = (props: any) => {
	
  useEffect(() => {
		window.addEventListener('keydown', playSound)

  }, []);
  
  function removeTransition(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.propertyName !== 'transform')	return;
    e.target.classList.remove('playing');
	e.target.removeEventListener('transitionend',removeTransition);
}

  function playSound(e: React.KeyboardEvent<HTMLInputElement>) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
	key.classList.add('playing');
	key.addEventListener('transitionend', removeTransition)
	audio.currentTime = 0;
    audio.play();
  }

 
 
	  return props.data.map((item: any) => {
		let srcSound = 'sounds/' + item[2] + '.wav';
		
		return (
			/* add a key value, needed for react dealing with list */ 
		  <div data-key={item[0]} key={item[0]} className="key" >
			  <kbd>{item[1]}</kbd>
			  <span className="sound">{item[2]}</span>
			  <audio data-key={item[0]} key={item[0]} src={srcSound}></audio>
		  </div>
		)
	})
	
};

export default Sound;