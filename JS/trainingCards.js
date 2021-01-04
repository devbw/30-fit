/* Variables globales */
let trainingsDone          = document.querySelector('#numberTrainingsDone');
let train1  = document.querySelector('#train1');
let train2  = document.querySelector('#train2');
let train3  = document.querySelector('#train3');
let train4  = document.querySelector('#train4');
let train5  = document.querySelector('#train5');
let train6  = document.querySelector('#train6');
let train7  = document.querySelector('#train7');
let train8  = document.querySelector('#train8');
let train9  = document.querySelector('#train9');
let train10 = document.querySelector('#train10');
let train11 = document.querySelector('#train11');
let trainBoss = document.querySelector('#trainBoss');

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

train1.addEventListener('click', () => {
    document.location.href="../HTML/trainingone.html";
})

train2.addEventListener('click', () => {
    document.location.href="../HTML/trainingtwo.html";
})

train3.addEventListener('click', () => {
    document.location.href="../HTML/trainingthree.html";
})

train4.addEventListener('click', () => {
    document.location.href="../HTML/trainingfour.html";
})

train5.addEventListener('click', () => {
    document.location.href="../HTML/trainingfive.html";
})

train6.addEventListener('click', () => {
    document.location.href="../HTML/trainingsix.html";
})

train7.addEventListener('click', () => {
    document.location.href="../HTML/trainingseven.html";
})

train8.addEventListener('click', () => {
    document.location.href="../HTML/trainingeight.html";
})

train9.addEventListener('click', () => {
    document.location.href="../HTML/trainingnine.html";
})

train10.addEventListener('click', () => {
    document.location.href="../HTML/trainingten.html";
})

train11.addEventListener('click', () => {
    document.location.href="../HTML/trainingteleven.html";
})

trainBoss.addEventListener('click', () => {
    document.location.href="../HTML/randomtrainings.html";
})