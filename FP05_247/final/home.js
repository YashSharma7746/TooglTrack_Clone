function myfunction(){
    let x= document.getElementById("password");
    let y=document.getElementById("hide1");
    let z=document.getElementById("hide2");
    
    if(x.type === "password"){
        x.type="text"
        y.style.display="block"
        z.style.display="none"
       
    }else{
        x.type="password"
        y.style.display="none"
        z.style.display="block"
       
    }
}

const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');

let seconds = 0;
let interval = null;

// Event listeners
start_btn.addEventListener('click', start);

// Update the timer
function timer () {
	seconds++;

	// Format our time
	let hrs = Math.floor(seconds / 3600);
	let mins = Math.floor((seconds - (hrs * 3600)) / 60);
	let secs = seconds % 60;

	if (secs < 10) secs = '0' + secs;
	if (mins < 10) mins = "0" + mins;
	if (hrs < 10) hrs = "0" + hrs;

	time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start () {
	if (interval) {
		return
	}

	interval = setInterval(timer, 1000);
}

let button=document.getElementById("start")

setInterval(function(){
    button.click()
},1000)

let button2=document.getElementById("slider")

setInterval(function(){
    button2.style.visibility="hidden"
},1100)

let button3=document.getElementById("letr")

setInterval(function(){
    button3.style.visibility="visible"
},1000)


 
function auto() {
    if (i < txt.length) {
      document.getElementById("demo").innerText += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }