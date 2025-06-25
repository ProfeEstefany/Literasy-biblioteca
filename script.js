// Este es tu archivo JavaScript (script.js)
console.log("¡script.js ha sido cargado exitosamente!");
console.log("Bienvenido a la Biblioteca del Saber.");

document.addEventListener('DOMContentLoaded', function() {
    // --- Cambiar colores y estilo ---
    const tituloMision = document.getElementById('misionTitulo');

    if (tituloMision) { // Verifica si el elemento existe antes de añadir el evento
        tituloMision.addEventListener('mouseenter', function() {
            tituloMision.style.color = '#E74C3C'; // Rojo oscuro
            tituloMision.style.transform = 'scale(1.05)'; // Un poco más grande
            tituloMision.style.transition = 'all 0.3s ease'; // Animación suave
        });

        tituloMision.addEventListener('mouseleave', function() {
            tituloMision.style.color = '#333'; // Vuelve al color original
            tituloMision.style.transform = 'scale(1)'; // Vuelve al tamaño original
        });
    }


    // --- Animaciones con CSS y JS ---
    const imagenPrincipal = document.getElementById('imagenBienvenida');

    if (imagenPrincipal) { // Verifica si el elemento existe
        imagenPrincipal.addEventListener('click', function() {
            imagenPrincipal.classList.toggle('girar');
        });
    }


    // --- Avatar Móvil Interactivo ---
    const avatar = document.getElementById('avatar-container');
    // const avatarImg = document.getElementById('avatar-img'); // Esta línea no es necesaria para este ejemplo

    if (avatar) { // Verifica si el elemento existe
        avatar.addEventListener('click', function() {
            alert("¡Hola! Soy el guardián de esta biblioteca. ¿En qué puedo ayudarte?");

            // Pequeño "salto" al hacer clic
            avatar.style.transform = 'translateY(-15px)';
            setTimeout(() => {
                avatar.style.transform = 'translateY(0px)';
            }, 300);
        });
    }
});
