const qs = window.location.search;

const urlpar = new URLSearchParams(qs);

if (urlpar.has("episode")) {
    var episode = urlpar.get('episode')
} else {
    var episode = 1
}

// if there isnt a review, it will return undefined, leaving the template message.
var review = reviews[episode]

if (review == undefined) {
    review = "Hmm, it seems Ben hasn't left a review for this episode. Usually, reviews consist of a short description of what the episode contains, and what Ben thinks of the episode"
}

var reviewtag = '<p>' + review + '</p>'

document.getElementById("review").outerHTML = reviewtag;
