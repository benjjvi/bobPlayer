// get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const fullscreen = player.querySelector('.player__fullscreen');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// build functions
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    // alternatively this can be written with a ternary operator
    /*
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    */
}

function spaceBarTogglePlay(e) {
    if (e.keyCode == 32) {
        togglePlay();
    }
}

function updateButton() {
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    const sliderValue = this.value;
    this.setAttribute('title', sliderValue);
    video[this.name] = sliderValue;
    console.log(this.event);
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        player.requestFullscreen();
        fullscreen.textContent = '↙';
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            fullscreen.textContent = '️️️️↔️';
        }
    }
}

// event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

fullscreen.addEventListener('click', toggleFullscreen);
video.addEventListener('dblclick', toggleFullscreen);

toggle.addEventListener('click', togglePlay);
document.addEventListener('keypress', spaceBarTogglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);