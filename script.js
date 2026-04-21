const valores = document.querySelectorAll('.valor-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.3 });

valores.forEach(valor => {
    observer.observe(valor);
});

// === FORMULARIO CONTACTO PRO ===

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        message.style.display = "block";
        message.style.color = "#00ff88";
        message.innerHTML = "✅ Mensaje enviado correctamente. Nos pondremos en contacto pronto.";
        form.reset();
    })
    .catch(error => {
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "❌ Ocurrió un error. Intenta nuevamente.";
    });
});

// === FRASES MISION VISION EFECTO ALEATORIO ===

const frases = document.querySelectorAll(".frase");

function activarFraseAleatoria(){

    // quitar activas
    frases.forEach(frase=>{
        frase.classList.remove("activa");
    });

    // elegir una aleatoria
    const random = Math.floor(Math.random() * frases.length);

    frases[random].classList.add("activa");
}

// ejecutar continuamente
setInterval(activarFraseAleatoria, 900);


// FUNCIONAMIENTO MENU TIPO HAMBURGUESA

// === LÓGICA MENÚ HAMBURGUESA ===
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('.nav-links li a');

// Abrir/Cerrar menú al dar clic en la hamburguesa
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Cerrar el menú automáticamente cuando se hace clic en un enlace (para navegar)
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});