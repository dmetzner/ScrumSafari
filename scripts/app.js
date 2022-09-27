function Solution () {
    document.getElementById("solution").innerHTML = "Eine Wanderine";
}

function HideSolution () {
    document.getElementById("solution").innerHTML = "Lösung";
}

setTimeout(Solution, 10000);
setTimeout(HideSolution, 15000);