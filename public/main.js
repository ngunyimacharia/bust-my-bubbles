// first get the size from the window
// if that didn't work, get it from the body

let deviceDimensions = {
  width: screen.width,
  height: screen.height
};

let size = {
  width: window.innerWidth || document.body.clientWidth,
  height: window.innerHeight || document.body.clientHeight
}

let bubblesOnWidth = parseInt(deviceDimensions.width / 50);
let bubblesOnHeight = parseInt(deviceDimensions.height / 50);

let bubbleDimensions = {
  width: parseInt(size.width / bubblesOnWidth),
  height: parseInt(size.height / bubblesOnHeight)
}

let containerName = "container";
let container = document.getElementById(containerName);

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
    //Set column dimensions
    column.style.width = bubbleDimensions.width+"px";
    column.style.height = bubbleDimensions.width+"px";
    row.append(column);
  }
  row.className += 'bubbleRow';
  //Set row dimensions
  row.style.height = bubbleDimensions.width+"px";
  container.append(row);
}
