button.addEventListener("click", onButtonClick);

function onButtonClick() {
    video.load();
    fetchVideoAndPlay();
}

function fetchVideoAndPlay() {
    fetch(link)
    .then(respone => response.blob())
    .then(blob => {
        video.srcObject = blob;
        return video.play();
    })
    .then(_ => {
        console.log("video playback started")
    })
    .catch(e => {
        console.log("video playback error!!!")
        console.log(e)
    })
}