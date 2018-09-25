// first get the size from the window
// if that didn't work, get it from the body
let size = {
  width: window.innerWidth || document.body.clientWidth,
  height: window.innerHeight || document.body.clientHeight
}

let bubblesOnWidth = parseInt(size.width / 50);
let bubblesOnHeight = parseInt(size.height / 50);

let containerName = "container";
let container = document.getElementById(containerName);

//Function to be triggered on bubble click
function bubbleClick(event){
  console.log(event.target);
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

//Play sound
function play(){
  var audio = document.getElementById("audio");
  if (audio.paused) {
      audio.play();
  }else{
      audio.currentTime = 0
  }
}

for(let h = 1 ; h <= bubblesOnHeight; h++ ){
  var row = document.createElement('div');
  for(let c = 1; c <= bubblesOnWidth ; c++){
    var column = document.createElement('div');
    column.className = 'bubble';
    column.id = 'bubble-'+c;
    column.addEventListener('click',bubbleClick);
    row.append(column);
  }
  row.className += 'bubbleRow';
  container.append(row);
}
