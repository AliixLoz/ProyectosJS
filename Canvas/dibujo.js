const lienzo = document.querySelector('#lienzo');

const ctx = lienzo.getContext('2d');

//Redondeo 
ctx.beginPath();
ctx.arc(200, 190, 120, 0, Math.PI * 2);
ctx.stroke();

ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.arc(200, 190, 120, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = "brown";
ctx.fillRect(190, 40, 10, 30);

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(140, 150, 20, 0, Math.PI * 2);
ctx.arc(250, 150, 20, 0, Math.PI * 2);
ctx.fill();


ctx.beginPath();
ctx.arc(200, 170, 60, 0.2 * Math.PI, 0.8 * Math.PI);
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(70, 210, 12, 0, Math.PI * 2); 
ctx.arc(330, 210, 12, 0, Math.PI * 2); 
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(60, 220, 12, 0, Math.PI * 2); 
ctx.arc(340, 215, 12, 0, Math.PI * 2); 
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(50, 230, 12, 0, Math.PI * 2); 
ctx.arc(350, 220, 12, 0, Math.PI * 2); 
ctx.fill();

ctx.fillStyle = "green";
ctx.fillRect(240, 302, 12, 50);

ctx.fillStyle = "green";
ctx.fillRect(160, 305, 12, 50);

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(166, 365, 12, 0, Math.PI * 2); 
ctx.arc(245, 363, 12, 0, Math.PI * 2); 
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(155, 365, 12, 0, Math.PI * 2); 
ctx.arc(255, 363, 12, 0, Math.PI * 2); 
ctx.fill();



