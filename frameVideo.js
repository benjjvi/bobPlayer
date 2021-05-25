var videoByEpisode;

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

if (urlParams.has("episode")) {
    const episode = urlParams.get('episode')
}
else {
    console.log("replace window")
    //window.location.replace("https://bob.bildsben.tech")
}
