/* Tableau exos*/
let exercicesOne   = ['Jumping Jacks : 25 reps', 'Burpees : 25 reps', 'Montée de genoux : 40 reps', 'Mountain Climber : 40 reps']
let exercicesTwo   = ['Pompes : 10 reps', 'Pompes prise large : 10 reps', 'Pompes pieds surélevés : 10 reps', 'Dips : 10 reps']
let exercicesThree = ['Tractions supination : 10 reps', 'Tractions pronation : 10 reps', 'Tractions prise large : 10 reps', 'Tractions prise serrée : 10 reps']
let exercicesFour  = ['Pike push-up : 10 reps', 'Handstand : 30s', 'Handstand push-up : 30s']
let exercicesFive  = ['Squat : 20 reps', 'Squat sautés : 20 reps', 'Pistol squat : 10 reps par jambe', 'Fentes : 20 reps par jambe', 'Fentes sautées : 20 reps']
let exercicesSix   = ['Crunch : 30 reps', 'Relevé de jambes couché : 30 reps', 'Planche : 1mn', 'Relevé de jambes à la barre : 20 reps']

/* Tableaux encouragements */
let quotes = [
    ['Donnez-vous à fond !'],
    ["N'abandonnez pas !"],
    ["Courage !"],
    ["Même si c'est dur continuez !"],
    ['Ne lachez rien !'],
    ['Privilégiez une bonne exécution'],
    ['Même si vous êtes épuisé, finissez !']
]

/*Variables globales */
let exerciceOne      = document.querySelector('#exercice-one');
let exerciceTwo      = document.querySelector('#exercice-two');
let exerciceThree    = document.querySelector('#exercice-three');
let exerciceFour     = document.querySelector('#exercice-four');
let exerciceFive     = document.querySelector('#exercice-five');
let exerciceSix      = document.querySelector('#exercice-six');
let mode             = document.querySelector('#mode');
let descript         = document.querySelector('#descript'); 

let replaceTrainings       = document.querySelector('#replace-trainings');
let nombreAleatoireUn      = 0;
let nombreAleatoireDeux    = 0;
let nombreAleatoireTrois   = 0;
let nombreAleatoireQuatre  = 0;
let nombreAleatoireCinq    = 0;
let nombreAleatoireSix     = 0;
let startingMinutes        = 30;
let time                   = startingMinutes * 60;
let chrono                 = document.querySelector('#chrono');
let remove                 = document.querySelector('#remove');
let chronoBouton           = document.querySelector('#chronoBouton');
let encouragements         = document.querySelector('#encouragements');
let last = 0;
let nombreAleatoireQuotes  = 0;
let endTrainingButton      = document.querySelector('#endTraining');
let cheers                 = document.querySelector('#cheers');
let removeCheers           = document.querySelector('.removeCheers');

/* Fonction Nombre aléatoire citation */
function genererNombreCitations(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

/* Fonction citations aléatoires */
function genererCitations() {
    do {
        nombreAleatoireQuotes = genererNombreCitations(quotes.length)
    } while (nombreAleatoireQuotes == last);

    encouragements.textContent = quotes[nombreAleatoireQuotes];
    last = nombreAleatoireQuotes;
}

 /* Appel de la fonction */
setInterval(genererCitations, 6000);

/* Fonction Nombre aléatoire */
function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

/*Fonction pour générer un nombre par tableau*/
function genererNombreAleatoire() {
    nombreAleatoireUn     = genererNombreEntier(exercicesOne.length);
    nombreAleatoireDeux   = genererNombreEntier(exercicesTwo.length);
    nombreAleatoireTrois  = genererNombreEntier(exercicesThree.length);
    nombreAleatoireQuatre = genererNombreEntier(exercicesFour.length);
    nombreAleatoireCinq   = genererNombreEntier(exercicesFive.length);
    nombreAleatoireSix    = genererNombreEntier(exercicesSix.length);
}

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
    window.location.href = "../HTML/randomtrainings.html";
}

/*Clic sur le bouton*/
replaceTrainings.addEventListener('click', () => {
    mode.innerHTML = ' ';
    descript.innerHTML = ' ';

    genererNombreAleatoire();

    exerciceOne.textContent   = exercicesOne[nombreAleatoireUn];
    exerciceTwo.textContent   = exercicesTwo[nombreAleatoireDeux];
    exerciceThree.textContent = exercicesThree[nombreAleatoireTrois];
    exerciceFour.textContent  = exercicesFour[nombreAleatoireQuatre];
    exerciceFive.textContent  = exercicesFive[nombreAleatoireCinq];
    exerciceSix.textContent   = exercicesSix[nombreAleatoireSix];
    let repos = document.createElement('p');
    repos.innerHTML = 'Repos 3 minutes </br> On recommence !';
    repos.style.marginTop = '2%';
    exerciceSix.appendChild(repos);
    remove.removeChild(replaceTrainings);

    chronoBouton.style.display = 'inline';
})

/* Clic bouton chrono */
chronoBouton.addEventListener('click', () => {
    setInterval(updateCountdown, 1000);
    remove.removeChild(chronoBouton);
    encouragements.style.display = 'inline';
})

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
    removeCheers.removeChild(encouragements);
    cheers.style.display = 'inline';
    setInterval(returnTraining, 4000);
})
