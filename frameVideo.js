const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

if (urlParams.has("episode")) {
    var episode = urlParams.get('episode')
}
else {
    console.log("replace window")
    window.location.replace("https://bob.bildsben.tech")
}

console.log("finding episode and framing it")
var link = items[episode]
console.log(link)

var videoreplaced = "<video id="buffer"" src='" + link + "'></video>"

document.getElementById("replacevideo").outerHTML = videoreplaced;

//buffer for slow servers

video = document.getElementById("buffer");
video.load();
video.play();