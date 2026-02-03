

// ctx.fillStyle = "red";

// ctx.fillRect(50,50,100,60);

// ctx.fillStyle = "rgb(200,0,0)";
// ctx.fillRect(130,130,55,50);

// ctx.fillStyle = "rgb(0,0,200,0.5)";
// ctx.fillRect(100,100,55,50);


// ctx.fillRect(200,200,100,100);
// ctx.clearRect(220,220,60,60);
// ctx.strokeRect(225,225,50,50);


// ctx.beginPath();
// ctx.moveTo(10,10);
// ctx.lineTo(200,50);
// ctx.stroke();



// ctx.beginPath();
// ctx.moveTo(75,50);
// ctx.lineTo(100,75);
// ctx.lineTo(100,25);
// ctx.fill();


// ctx.beginPath();
// ctx.moveTo(20,300);
// ctx.lineTo(100,300);
// ctx.lineTo(20,100);
// ctx.fill();


// ctx.beginPath();
// ctx.moveTo(100,300);
// ctx.lineTo(100,100);
// ctx.lineTo(155,100);

// ctx.closePath();
// ctx.stroke();


// ctx.beginPath();
// ctx.arc(100,100,40,0,Math.PI *2);
// ctx.fillStyle = "rgb(0,200,0,0.7)";
// ctx.fill();

// ctx.fillStyle = "rgb(0,100,100,0.7)";
// ctx.beginPath();
// ctx.arc(75,75,50,0,Math.PI *2, true);
// ctx.moveTo(110,75);
// ctx.arc(75,75,35,0,Math.PI *2, false);
// ctx.moveTo(65,65);
// ctx.arc(60,65,5,0,Math.PI *2, true);
// ctx.moveTo(95,65);
// ctx.arc(90,65,5,0,Math.PI *2, true);
// ctx.stroke();


// ctx.beginPath();
// ctx.moveTo(75,25);
// ctx.quadraticCurveTo(25,25,25,62.5);
// ctx.quadraticCurveTo(25,100,50,100);
// ctx.quadraticCurveTo(50,120,30,125);
// ctx.quadraticCurveTo(60,120,65,100);
// ctx.quadraticCurveTo(125,100,125,62.5);
// ctx.quadraticCurveTo(125,25,75,25);
// ctx.stroke();
// ctx.fill();


// ctx.fillStyle = "red";
// ctx.beginPath();
// ctx.moveTo(75,40);
// ctx.bezierCurveTo(75,37,70,25,50,25);
// ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
// ctx.bezierCurveTo(20,80,40,102,75,120);
// ctx.bezierCurveTo(110,102,130,80,130,62.5);
// ctx.bezierCurveTo(130,62.5,130,25,100,25);
// ctx.bezierCurveTo(85,25,75,37,75,40);
// ctx.fill();

// ctx.font = "20px Arial"
// ctx.fillText("Hello",200,200);
// let x =0;

// function draw() {
//     ctx.clearRect(0,0,400,300);
//     ctx.fillRect(x,100,50,50+(x/2));
//     x+=1;
//     requestAnimationFrame(draw);
// }
// draw();
const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");


const img = new Image();
img.src ="public/images.jpg";


// img.onload = () =>{
//     ctx.drawImage(img,50,50,200,150);
//     ctx.drawImage(img,200,150,200,150);
// };

// img.onload = () => {
//     const pattern = ctx.createPattern(img, "repeat");
//     ctx.fillStyle = pattern;
//     ctx.fillRect(0,0,canvas.width, canvas.height);
// };


// img.onload = () =>{
//     ctx.save();

//     ctx.beginPath();
//     ctx.arc(150,150,60,0,Math.PI *2);
//     ctx.clip();

//     ctx.drawImage(img,90,90,120,120);

//     ctx.restore();
// }


let a = 0;

img.onload = () => {
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, a, 100, 80, 80);
        a += 2;
        if(a > canvas.width){ a = -80};
        requestAnimationFrame(animate);
    }
    animate();
};

