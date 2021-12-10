// Restart Game button

var restart = document.querySelector("#restart")

//Grab all the squares

var squares = document.querySelectorAll('td')

//Clear all the squares
function clearBoard(){
  for(var i=0; i<squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click', clearBoard)

// Check the square boxes

function changeMarker(){
  if(this.textContent === '' ){
    this.textContent = 'X';
  }else if (this.textContent === 'X' ) {
    this.textContent = 'O';
  }else {
    this.textContent = " ";
  }
}

for(var i=0; i<squares.length; i++){
  squares[i].addEventListener('click',changeMarker)
}
