const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

if (urlParams.has("episode")) {
    var episode = urlParams.get('episode')
    if (episode > 405) {
        window.location.replace("./player?episode=1");
    }
    if (episode <1) {
        window.location.replace("./player?episode=1")
    }
} else {
    var episode = 1
}

var link = itemsmp4[episode]

var videoreplaced = '<source height=100% width=100% src="' + link + '">'

document.getElementById("replacevideo").outerHTML = videoreplaced;


var nextEpisode = parseInt(episode) + 1

var buttonreplaced = '<a class="btn-rounded-dark noborder" href="./player?episode=' + nextEpisode + '">Next Video</a>'

document.getElementById("next__video").outerHTML = buttonreplaced;

console.log("dumping variables.")
console.log(link)
console.log(videoreplaced)
console.log(nextEpisode)
console.log(buttonreplaced)