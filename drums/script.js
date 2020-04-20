    
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key= "${e.keyCode}"]`)
    if(!audio) return; //stop function
    audio.currentTime = 0; //rewind to start
    audio.play();
    console.log(key);
    key.classList.add('playing');
    key.classList.add('playing');
}
    function removeTransition(e){
        if(e.propertyName !== 'transform') return; // skip if its not transform
        this.classList.remove('playing'); //= to key console log to see
    }
    
window.addEventListener('keydown',playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    
    