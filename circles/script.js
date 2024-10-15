const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouseX;
let mouseY;

function CirlceObject(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = this.color;
    ctx.stroke();
  };
}

function detectCollision() {
  const distance =
    Math.sqrt(
      Math.pow(player.x - obstacle.x, 2) + Math.pow(player.y - obstacle.y, 2)
    ) -
    (player.radius + obstacle.radius);
  return distance <= 0 ? true : false;
}

const player = new CirlceObject(400, 400, 50, "skyblue");
const obstacle = new CirlceObject(200, 200, 50, "indianred");
obstacle.draw();

document.addEventListener("mousemove", (event) => {
  mouseX ? ctx.clearRect(0, 0, canvas.width, canvas.height) : null;
  obstacle.draw();
  mouseX = event.clientX;
  mouseY = event.clientY;
  player.x = mouseX;
  player.y = mouseY;
  if (detectCollision()) {
    player.color = "tomato";
  } else {
    player.color = "skyblue";
  }
  player.draw();
});
