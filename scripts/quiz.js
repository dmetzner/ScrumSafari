function InitEventListeners () {
    const SolutionButton = document.getElementById("solution");

    SolutionButton.addEventListener("click", ShowSolution);
    SolutionButton.addEventListener("touchstart", ShowSolution);
}

function ShowSolution () {
    const SolutionButton = document.getElementById("solution");

    SolutionButton.removeEventListener("touchstart", HideSolution);
    SolutionButton.removeEventListener("click", HideSolution);

    SolutionButton.classList.add("fw-bold");
    SolutionButton.innerHTML = "Eine Wanderine";
}

function HideSolution () {
    SolutionButton.classList.remove("fw-bold");
    document.getElementById("solution").innerHTML = "Klick hier um die Lösung zusehen";
}