/* Tableaux exos */
let noob = [
    ['Pompes : 10',  'Squat : 20' ,  'Jumping Jacks : 30'],
    ['Burpees : 15', 'Squat Sautés : 15', 'Planche : 30s'],
    ['Tractions pronation : 5', 'Pompes prise large : 10', 'Fentes : 10 par jambe'],
    ['Jumping Jacks : 30', 'Squat : 20', 'Crunchs : 30']
]

let mid = [
    ['Jumping Jacks : 40', 'Pompes Prise Serrée : 15', 'Handstand : 15s', 'Fentes sautées : 20'],
    ['Burpees : 15', 'Tractions prise large : 10', 'Pike Push-up : 10', 'Relevé de jambes au sol : 15'],
    ['Montée de genoux : 30s', 'Pompes pieds surélevés : 10', 'Squat sautés : 15', 'Crunchs : 25'],
    ['Mountain climber : 30', 'Pompes : 10', 'Tractions supination : 10', 'Fentes : 10 par jambe']
]

let boss = [
    ['Burpees : 15', 'Dips : 10', 'Tractions prise serrée : 10', 'Handstand Push-up : 10', 'Planche : 1mn'],
    ['Jumping Jacks : 30', 'Pompes : 15', 'Tractions prise large : 10', 'Pistol Squat : 10 par jambe', 'Relevé de jambes barre : 15'],
    ['Burpees : 25', 'Pompes : 25', 'Squat sautés : 25', 'Crunchs : 10', 'Planche : 1mn']
]

/* Variables globales */
let trainingsDone = document.querySelector('#numberTrainingsDone');
let noobTrain = document.querySelector('.noob');
let midTrain      = document.querySelector('.inter');
let bossTrain     = document.querySelector('.boss');

/* Appel Fonctions globales */
printTrainingsDone();

/* Fonctions globales */
function printTrainingsDone() {
    let value = localStorage.getItem('trainingsDone');
    if(value <= 0) {
        trainingsDone.textContent = 'Entrainements réalisés : Aucun';
    } else {
        trainingsDone.textContent = 'Entrainements réalisés : ' + value;
    }
}
