
function playSong(e)
{
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reset the playback time
    });

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio)
    {
        alert(`features will be added in near future`);
        return;
    }

    audio.currentTime=0;
    audio.play();
}

window.addEventListener('keydown',playSong);