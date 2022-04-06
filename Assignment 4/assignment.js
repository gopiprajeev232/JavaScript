window.onload = () => {
    localStorage.setItem("localCount", 0);

    if(!sessionStorage.getItem("sessionCount")) {
        sessionStorage.setItem("sessionCount", 0);

        let countLabel = document.getElementById("session-count");
        countLabel.innerText = 0;
    }

    else {
        let countLabel = document.getElementById("session-count");
        countLabel.innerText = sessionStorage.getItem("sessionCount");
    }
}

var increaseLocalCount = () => {
    let count = localStorage.getItem("localCount");
    localStorage.setItem("localCount", ++count);

    let countLabel = document.getElementById("local-count");
    countLabel.innerText = count;
}

var increaseSessionCount = () => {
    let count = sessionStorage.getItem("sessionCount");
    sessionStorage.setItem("sessionCount", ++count);

    let countLabel = document.getElementById("session-count");
    countLabel.innerText = count;
}