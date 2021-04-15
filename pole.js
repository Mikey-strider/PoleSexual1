const effectLink = document.getElementById('effectLink'); 


//Sound effect event listener
effectLink.addEventListener('click', playEffect);

//Effect play
function playEffect() {
    let kaChing = document.getElementById('effects');
    kaChing.play();
}

