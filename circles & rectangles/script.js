const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let mouseX = 300;
let mouseY = 300;
const ctx = canvas.getContext("2d");

function RectangleObject(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.draw = function () {
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}

function CircleObject(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  };
}

function detectCollision() {
  const closeX = clamp(player.x, obstacle.x, obstacle.x + obstacle.width);
  const closeY = clamp(player.y, obstacle.y, obstacle.y + obstacle.height);
  const distance = Math.round(
    Math.sqrt(Math.pow(player.x - closeX, 2) + Math.pow(player.y - closeY, 2))
  );
  console.log(distance - player.radius);
}

function clamp(value, min, max) {
  console.log(value, min, max);
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  } else {
    return value;
  }
}

const obstacle = new RectangleObject(200, 200, 300, 100, "tomato");
obstacle.draw();

const player = new CircleObject(350, 350, 50, "skyblue");
player.draw();
detectCollision();

document.addEventListener("mousemove", (event) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  obstacle.draw();
  mouseX = event.clientX;
  mouseY = event.clientY;
  player.x = mouseX;
  player.y = mouseY;
  detectCollision();
  player.draw();
});
