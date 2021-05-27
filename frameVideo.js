const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

if (urlParams.has("episode")) {
    var episode = urlParams.get('episode')
}
else {
    var episode = 1
}

console.log("finding episode and framing it")
var link = items[episode]
console.log(link)

var videoreplaced = '<video class="player__video viewer" height=100% src="' + link + '"></video>'

document.getElementById("replacevideo").outerHTML = videoreplaced;


/// Code to add next video button.
var nextEpisode = parseInt(episode) + 1

var buttonreplaced = '<button class="transparent"><a href="./testing?episode=' +nextEpisode+'">Next Video</a></button>' 

document.getElementById("next__video").outerHTML = buttonreplaced;