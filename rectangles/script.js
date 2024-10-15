const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let mouseX;
let mouseY;

function RectangleObject(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.draw = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}

function detectCollision() {
  return (
    rect1.x + rect1.width >= rect2.x &&
    rect2.x + rect2.width >= rect1.x &&
    rect1.y + rect1.height >= rect2.y &&
    rect2.y + rect2.height >= rect1.y
  );
}

const rect1 = new RectangleObject(500, 300, 100, 100, "green");
const rect2 = new RectangleObject(400, 300, 100, 100, "red");
// rect1.draw();
rect2.draw();

document.addEventListener("mousemove", (event) => {
  mouseX ? ctx.clearRect(mouseX, mouseY, 100, 100) : null;
  rect2.draw();
  mouseX = event.clientX;
  mouseY = event.clientY;
  rect1.x = mouseX;
  rect1.y = mouseY;
  rect1.draw();
  detectCollision() ? (rect1.color = "blue") : (rect1.color = "green");
});
