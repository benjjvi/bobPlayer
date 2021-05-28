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

var videoreplaced = '<source src="' + link + '" type="video/ogg">'

console.log(document.getElementById("replacevideo").outerHTML)

document.getElementById("replacevideo").outerHTML = videoreplaced;


var nextEpisode = parseInt(episode) + 1

var buttonreplaced = '<button><a href="./test/?episode=' +nextEpisode+'">Next Video</a></button>' 

document.getElementById("next__video").outerHTML = buttonreplaced;