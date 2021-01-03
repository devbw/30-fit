let chronoBouton = document.querySelector('#chronoBouton');
let remove = document.querySelector('#remove');
let chrono = document.querySelector('#chrono');
let startingMinutes        = 5;
let time                   = startingMinutes * 60;
let endTrainingButton      = document.querySelector('#endTraining');

chronoBouton.addEventListener('click', () => {
    remove.removeChild(chronoBouton);
    setInterval(updateCountdown, 1000);
})

/* Fonction Chrono */
function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    chrono.innerHTML = `${minutes} : ${seconds}`;
    chrono.style.fontSize = '3.5em';
    chrono.style.marginTop = '8%';
    if (time > 0) {
        time--;
    } else {
        chrono.innerHTML = ' ';
        endTrainingButton.style.display = 'inline';
    }
}

/* Fonction retour à la page entraînement */
function returnTraining() {
    window.location.href = "trainings.html";
}

/* Clic bouton "terminer" */
endTrainingButton.addEventListener('click', () => {
    if(typeof localStorage!='undefined'){
        let trainingsDone = localStorage.getItem('trainingsDone', 0);
        if(trainingsDone!=null) {
            trainingsDone = parseInt(trainingsDone);
        }
        trainingsDone++;
        localStorage.setItem('trainingsDone', trainingsDone);
    } else {
        alert("Le localStorage n'est pas supporté");
    }
    remove.removeChild(endTrainingButton);
    cheers.style.display = 'inline';
    setInterval(returnTraining, 3000);
})

