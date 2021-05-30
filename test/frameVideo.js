const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

if (urlParams.has("episode")) {
    var episode = urlParams.get('episode')
} else {
    var episode = 1
}

var link = items[episode]

var videoreplaced = '<source src="' + link + '" type="video/ogg">'

document.getElementById("replacevideo").outerHTML = videoreplaced;


var nextEpisode = parseInt(episode) + 1

var buttonreplaced = '<a class="btn-rounded-dark noborder" href="./test/?episode=' + nextEpisode + '">Next Video</a>'

document.getElementById("next__video").outerHTML = buttonreplaced;
