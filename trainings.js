/* Tableau exos*/
let exercicesOne   = ['Jumping Jacks', 'Burpees', 'Montée de genoux', 'Mountain Climber']
let exercicesTwo   = ['Pompes', 'Pompes prise large', 'Pompes pieds surélevés', 'Dips']
let exercicesThree = ['Tractions supination', 'Tractions pronation', 'Tractions prise large', 'Tractions prise serrée']
let exercicesFour  = ['Pike push-up', 'Handstand', 'Handstand push-up']
let exercicesFive  = ['Squat', 'Squat sautés', 'Pistol squat', 'Fentes', 'Fentes sautées']
let exercicesSix   = ['Crunch', 'Relevé de jambes couché', 'Planche', 'Relevé de Jambes à la barre']


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

/* Fonction Nombre aléatoire*/
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

    replaceTrainings.textContent = "C'est parti !";
})