let box = document.querySelector('.box');
let overlay = document.querySelector(".overlay");
let overlayPlayer = document.querySelectorAll('.overlay .player');
let overlayInfo = document.querySelectorAll('.overlay .info');
let preloader = document.querySelector('.preloader');
let playerOneIcon = document.querySelector('.player._one i');
let playerTwoIcon = document.querySelector('.player._two i');
let playerOneScore = document.querySelector(".player._one .score");
let playerTwoScore = document.querySelector(".player._two .score");
let x = '<i class="fas fa-times"></i>';
let o = '<i class="far fa-circle"></i>';

let xScore = 0;
let oScore = 0;
for (let i = 0; i < 9; i++) {
    box.innerHTML += "<div class='cell'></div>"
}


let count = 0;
let win = false;

let winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        count++;
        if (cell.innerHTML.length === 0) {
            if (count % 2 === 0) {
                cell.innerHTML = x;
                playerOneIcon.style.color = "";
                playerTwoIcon.style.color = "#4dbbee"

            } else {
                cell.innerHTML = o;
                playerOneIcon.style.color = "#4dbbee";
                playerTwoIcon.style.color = ""
            }
        }
        check();

    })
});


function check() {
    // Проверка поюеды
    for (let i = 0; i < winArr.length; i++) {
        if (
            cells[winArr[i][0]].innerHTML === x && cells[winArr[i][1]].innerHTML === x && cells[winArr[i][2]].innerHTML === x
        ) {
            end(x, "Winner");
            win = true
        } else if (
            cells[winArr[i][0]].innerHTML === o && cells[winArr[i][1]].innerHTML === o && cells[winArr[i][2]].innerHTML === o
        ) {
            end(o,"Winner");
            win = true
        }


    }
    // Проверка ничии
    let checked = [];
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML.length > 0 && checked.push(cells[i])
    }
    if (checked.length === 9) {
        if (!win) {
            end('<i class="far fa-handshake"></i>', "Draw")
        }
    }
}


function end(player,info) {

        overlay.classList.add('visible');
      for (let i =0; i < 2; i++) {
          overlayPlayer[i].innerHTML = player;
          overlayInfo[i].innerHTML = info;
          console.log(overlayPlayer[i])
          if (player === x) {
              xScore++;
              playerOneScore.innerHTML = xScore / 2;
          }
         else   if (player === o) {
              oScore++;
              playerTwoScore.innerHTML = oScore / 2;
          }
      }
    setTimeout(()=> {
        cells.forEach(item => {
            item.innerHTML = "";
        })
    }, 1500);
      setTimeout(()=> {
          overlay.classList.remove('visible');
          win = false;
      }, 3000)


}


window.onload = () => {
    preloader.classList.add('loaded');
    if (count % 2 === 0) {
        playerOneIcon.style.color = "";
        playerTwoIcon.style.color = "#4dbbee"

    } else {
        playerOneIcon.style.color = "#4dbbee";
        playerTwoIcon.style.color = ""
    }
};