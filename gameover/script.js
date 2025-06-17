//colores neon
const coloresNeon = ['#fff', '#0ff', '#f0f', '#39ff14', '#ff00ff', '#00f', '#ff073a'];

function crearDestello() {
    const destello = document.createElement('div');
    destello.classList.add('destello');

    //tamano aleatorio entre 4px y 8px

    const tamaño = Math.random() * 6 + 6;
    destello.style.width = tamaño + 'px';
    destello.style.height = tamaño + 'px';

    //posicion aleatorio en la pantalla
    destello.style.top = Math.random() * 100 + 'vh';
    destello.style.left = Math.random() * 100 + 'vw';

    //color neon aleatorio
    const color = coloresNeon[Math.floor(Math.random() * coloresNeon.length)];
    destello.style.backgroundColor = color;
    destello.style.boxShadow = `0 0 8px ${color}, 0 0 12px ${color}`;

    //agregar al DOM
    document.body.appendChild(destello);

    //eliminar despues de 2 segundos
    setTimeout(() => {
        destello.remove();
    }, 4000);
}

//crear destellos continuamente cada 150ms
setInterval(crearDestello, 200);



//javascript para lluvia
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numStars = 150;
let stars = [];

for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speedY: Math.random() * 0.7 + 0.3,
        glow: Math.random() * 20 + 10
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.shadowBlur = star.glow;
        ctx.shadowColor = 'cyan';
        ctx.fillStyle = 'white';
        ctx.fill();

        star.y += star.speedY;
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    }
    requestAnimationFrame(draw);
}

draw();
