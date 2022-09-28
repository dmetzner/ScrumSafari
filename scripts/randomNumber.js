function setRandomNumber() {
    document.getElementById('randomNumber').innerHTML = Math.floor(Math.random() * 100) + 1;
    document.getElementById('randomNumber').classList.add('fw-bold');
}