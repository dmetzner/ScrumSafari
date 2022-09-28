function InitEventListeners () {
    const SolutionButton = document.getElementById("solution");

    SolutionButton.addEventListener("click", ShowSolution);
    SolutionButton.addEventListener("touchstart", ShowSolution);
}

function ShowSolution () {
    const SolutionButton = document.getElementById("solution");

    SolutionButton.removeEventListener("touchstart", ShowSolution);
    SolutionButton.removeEventListener("click", ShowSolution);

    SolutionButton.classList.add("fw-bold");
    SolutionButton.innerHTML = "Eine Wanderine";

    setTimeout(HideSolution, 5000);
}

function HideSolution () {
    const SolutionButton = document.getElementById("solution");

    SolutionButton.classList.remove("fw-bold");
    SolutionButton.innerHTML = "Klick hier um die Lösung zusehen";

    InitEventListeners();
}