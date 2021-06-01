const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

if (urlParams.has("episode")) {
    var episode = urlParams.get('episode')
    if (episode > 405) {
        window.location.replace("./player?episode=1");
    }
} else {
    var episode = 1
}

var link = items[episode]

var videoreplaced = '<source src="' + link + '" type="video/mp4">'

document.getElementById("replacevideo").outerHTML = videoreplaced;


var nextEpisode = parseInt(episode) + 1

var buttonreplaced = '<a class="btn-rounded-dark noborder" href="./player?episode=' + nextEpisode + '">Next Video</a>'

document.getElementById("next__video").outerHTML = buttonreplaced;
