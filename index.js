// TASK 1

const TABLE = document.getElementById('table');
const SPECIALCELL = document.querySelector('.special-cell');

TABLE.onclick = function(event) {
  let target = event.target;

  if (target.tagName !== 'TD') {
    return;
  }
  
  bgChange(target);
};

SPECIALCELL.onclick = function() {
  let target = event.target;

  if (target.tagName !== 'TD') {
    return;
  }

  specalBgChange();
};

function specalBgChange() {
  const TABLECELLS = document.querySelectorAll('.cell');

  TABLECELLS.forEach(function(item) {
    if (window.getComputedStyle(item).backgroundColor === 'rgb(255, 255, 255)') {
      item.style.cssText = 'background-color: green';
    }
  });
}

function bgChange(elem) {
  let elStyle = window.getComputedStyle(elem);

  if (elStyle.backgroundColor === 'rgb(255, 255, 255)' && !elem.classList.contains('first-cell')) {
    elem.style.cssText = 'background-color: yellow; z-index: 10';
  }

  if (elem.classList.contains('first-cell')) {
    let cellsInRow = elem.parentNode.childNodes;
    let flag = 0;
    let tdCount = 0;
    let tdElementsArr = [];

    for (let i = 0; i < cellsInRow.length; i++) {

      if (cellsInRow[i].tagName === 'TD') {
        let elStyle = window.getComputedStyle(cellsInRow[i]);
        tdCount += 1;
        tdElementsArr.push(cellsInRow[i]);

        if (elStyle.backgroundColor !== 'rgb(255, 255, 0)') {
          flag += 1;
        }
      }
    }

    if (flag === tdCount) {
      for (let i = 0; i < tdElementsArr.length; i++) {
        tdElementsArr[i].style.cssText = 'background-color: blue';
      }
    }
  }
}

// TASK 2

let telFormEl = document.querySelector('.tel-form');
let formEl = document.querySelector('.form');
let userInput;
let successMesEl = document.querySelector('.succsessMessage');
let errMesEl = document.querySelector('.errMessage');
let buttonEl = document.querySelector('.form-action');

formEl.oninput = function() {
  userInput = telFormEl.value;

  if (validation(userInput)) {
    errMesEl.classList.add('hide');
    buttonEl.removeAttribute('disabled', 'true');
    telFormEl.style = 'outline: none';

    formEl.addEventListener('submit', (evt) => {
      evt.preventDefault();
      successMesEl.classList.remove('hide');
    });
  }

  if (!validation(userInput)) {
    successMesEl.classList.add('hide');
    errMesEl.classList.remove('hide');
    buttonEl.setAttribute('disabled', 'true');
    telFormEl.style = 'outline: 1px solid red';
  }
};

function validation(str) {
  let regEx = /^\+380[\d]{9}$/g;
  return regEx.test(str);
}

// TASK 3

let field = document.querySelector('.bball-container');
let ball = document.querySelector('.ball');
let aTeamEl = document.querySelector('.team-a');
let bTeamEl = document.querySelector('.team-b');
let aTeamScore = document.querySelector('.a-team-score');
let bTeamScore = document.querySelector('.b-team-score');
let goalTeamEl = document.querySelector('.goalTeam');
let aTeamPoints = 0;
let bTeamPoints = 0;
aTeamScore.textContent = aTeamPoints;
bTeamScore.textContent = bTeamPoints;

let ballCoords = {
  top: 50,
  left: 100
}

field.onclick = function(event) {
  let fieldCoords = this.getBoundingClientRect();

  ballCoords = {
    top: event.clientY - fieldCoords.top - ball.clientHeight / 2,
    left: event.clientX - fieldCoords.left - ball.clientWidth / 2
  };

  if (ballCoords.top < 0) {
    ballCoords.top = 0;
  }

  if (ballCoords.left < 0) {
    ballCoords.left = 0;
  }

  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }

  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';
};

aTeamEl.addEventListener('click', () => {
  bTeamScore.textContent = bTeamPoints + 1;
  bTeamPoints += 1;
  goalTeamEl.textContent = 'Team B score!';
  goalTeamEl.style = 'color: red';

  setTimeout(function(){
    goalTeamEl.textContent = '';
  }, 3000);
});

bTeamEl.addEventListener('click', () => {
  aTeamScore.textContent = aTeamPoints + 1;
  aTeamPoints += 1;
  goalTeamEl.textContent = 'Team A score!';
  goalTeamEl.style = 'color: blue';
  
  setTimeout(function(){
    goalTeamEl.textContent = '';
  }, 3000);
});
