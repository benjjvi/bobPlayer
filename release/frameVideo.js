const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

if (urlParams.has("episode")) {
    var episode = urlParams.get('episode')
    if (episode > 405) {
        window.location.replace("./release/player?episode=1");
    }
    if (episode <1) {
        window.location.replace("./release/player?episode=1")
    }
} else {
    var episode = 1
}

var link = items[episode]

var videoreplaced = '<video height=100% width=100% control src="' + link + '" controls>'

document.getElementById("replacevideo").outerHTML = videoreplaced;


var nextEpisode = parseInt(episode) + 1

var buttonreplaced = '<a class="btn-rounded-dark noborder" href="./release/player?episode=' + nextEpisode + '">Next Video</a>'

document.getElementById("next__video").outerHTML = buttonreplaced;
