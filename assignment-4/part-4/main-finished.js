// set up canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class shape {
   constructor(x, y, velocityX, velocityY) {
     this.x = x;
     this.y = y;
     this.velocityX = velocityX;
     this.velocityY = velocityY;
   }
 }

 class EvilCircle extends shape {
   constructor(x, y) {
     super(x, y, 20, 20);
     this.color = 'white';
     this.size = 10;
     this.exists = true;
   }

   draw() {
      ctx.beginPath();
      ctx.strokeStyle = this.color; // Use strokeStyle instead of fillStyle
      ctx.lineWidth = 3; // Set the line width to 3
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.stroke(); // Use stroke() instead of fill()
    }
  
    checkBounds() {
      if ((this.x + this.size) >= width) {
        this.x = width - this.size;
      }
  
      if ((this.x - this.size) <= 0) {
        this.x = this.size;
      }
  
      if ((this.y + this.size) >= height) {
        this.y = height - this.size;
      }
  
      if ((this.y - this.size) <= 0) {
        this.y = this.size;
      }
    }
  
    collisionDetect() {
      for (const ball of balls) {
        if (ball.exists) { // Check if the ball exists
          const dx = this.x - ball.x;
          const dy = this.y - ball.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
  
          if (distance < this.size + ball.size) {
            ball.exists = false; // Set the ball to not exist
          }
        }
      }
    }
  }
 

class Ball extends shape {

   constructor(x, y, velocityX, velocityY, color, size)
   {
      super(x, y, velocityX, velocityY);
      this.color = color;
      this.size = size;
      this.exists=true;
   }

   draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
   }

   update() {
      if ((this.x + this.size) >= width) {
         this.velocityX = -(Math.abs(this.velocityX));
      }

      if ((this.x - this.size) <= 0) {
         this.velocityX = Math.abs(this.velocityX);
      }

      if ((this.y + this.size) >= height) {
         this.velocityY = -(Math.abs(this.velocityY));
      }

      if ((this.y - this.size) <= 0) {
         this.velocityY = Math.abs(this.velocityY);
      }

      this.x += this.velocityX;
      this.y += this.velocityY;
   }

   collisionDetect() {
      for (const ball of balls) {
         if (!(this === ball) && ball.exists) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + ball.size) {
              ball.color = this.color = randomRGB();
            }
         }
      }
   }

}
const balls = [];

while (balls.length < 25) {
   const size = random(10,20);
   const ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size
   );

  balls.push(ball);
}

function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
   ctx.fillRect(0, 0,  width, height);

   for (const ball of balls) {
     ball.draw();
     ball.update();
     ball.collisionDetect();
   }

   requestAnimationFrame(loop);
}

loop();
window.addEventListener("keydown", (e) => {
   switch (e.key) {
     case "a":
       this.x -= this.velocityX;
       break;
     case "d":
       this.x += this.velocityX;
       break;
     case "w":
       this.y -= this.velocityY;
       break;
     case "s":
       this.y += this.velocityY;
       break;
   }
 });   
 