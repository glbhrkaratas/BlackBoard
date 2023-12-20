function eraserFunction(){
  window.location.reload()
}


const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
ctx.fillStyle = "#163020";
ctx.fillRect(0, 0, canvas.width, canvas.height);
let draw_color = "white";
let draw_width = "2";
let drawing = false;
let R = Math.random() * Math.random()* 130;
let S = Math.random() * Math.random() * 120;
canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);

canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function start(event) {
   drawing = true;
   ctx.beginPath();
   ctx.moveTo(
      event.clientX - canvas.offsetLeft,
      event.clientY - canvas.offsetTop
   );
   event.preventDefault();
}
function draw(event) {
   if (drawing) {
      ctx.lineTo(
         event.clientX - canvas.offsetLeft,
         event.clientY - canvas.offsetTop
      );
      ctx.strokeStyle = draw_color;
      ctx.lineWidth = draw_width;
      ctx.lineCap = "round";
      ctx.lineJoin = "line";
      ctx.stroke();
   }
   event.preventDefault();
}
function cancella(ctx) {
  ctx.clearRect(0, 0, 3000, 3000);
}
function stop(event) {
  if (drawing) {
     ctx.stroke();
     ctx.closePath();
     drawing = false;
  }
  event.preventDefault();
}
ctx.beginPath();
ctx.stroke();

 