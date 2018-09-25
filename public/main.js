/**
Function to obtain and set the necessary dimensions.
Obtain the following values:
- bubblesOnWidth
- bubblesOnHeight
- bubbleWidth
*/
let bubblesOnWidth;
let bubblesOnHeight;
let bubbleWidth;

function setDimensions(){
  let allDimensions = {
    minWidth:getLowestInArray([screen.width,window.innerWidth,document.body.clientWidth]),
    minHeight:getLowestInArray([screen.height,window.innerHeight,document.body.clientHeigh])
  };

  bubblesOnWidth = parseInt(allDimensions.minWidth / 50);
  bubblesOnHeight = parseInt(allDimensions.minHeight / 50);
  bubbleWidth = parseInt(allDimensions.minWidth / bubblesOnWidth);
}

let containerName = "container";
let container = document.getElementById(containerName);
// Function to insert bubbles into the page
function insertBubbles(){

  for(let h = 1 ; h <= bubblesOnHeight; h++ ){
    var row = document.createElement('div');
    for(let c = 1; c <= bubblesOnWidth ; c++){
      var column = document.createElement('div');
      column.className = 'bubble';
      column.id = 'bubble-'+c;
      column.addEventListener('click',bubbleClick);
      //Set column dimensions
      column.style.width = bubbleWidth+"px";
      column.style.height = bubbleWidth+"px";
      row.append(column);
    }
    row.className += 'bubbleRow';
    //Set row dimensions
    row.style.height = bubbleWidth+"px";
    container.append(row);
  }
}

//Function to initialize
(function(){
  setDimensions();
  insertBubbles();
})();

//Function to be triggered on bubble click
function bubbleClick(event){
  if(event.target.className !== 'bubble'){
    return;
  }
  var rand = Math.ceil(Math.random()*3);
  play();
  setTimeout(function(){
    event.target.className = 'bubble-burst';
    event.target.className += ' burst-'+rand;
  },100);
}

//Function to play sound
function play(){
  var audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
  }else{
    audio.currentTime = 0
  }
}

//Function to get lowest element in array
function getLowestInArray(myArray){
  let lowest = 0;
  for(let i=0 ; i<=myArray.length ; i++){

    if( (myArray[i] < lowest && myArray[i] > 0) || (lowest == 0) ){
      lowest = myArray[i];
    }

  }
  return lowest;
}
