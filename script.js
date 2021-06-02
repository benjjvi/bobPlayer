function login() {
    var u = document.getElementById("un").value;
    var logged = false;
    var p = document.getElementById("pw").value;

    // inefficient but fuck you

    if (u == "ben") {
        if (p == "ben") {
            logged = true;
        }
    }

    if (u == "nathan") {
        if (p == "nathan") {
            logged = true;
        }
    }

    if (u == "riff") {
        if (p == "raff") {
            logged = true;
        }
    }

    if (logged) {
        window.location.replace("./release/")
    }
    else {
        window.location.replace("./")
    }
}
