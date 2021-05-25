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

alert(link)