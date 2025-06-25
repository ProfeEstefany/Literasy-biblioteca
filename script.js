// Este es tu archivo JavaScript (script.js)
// Puedes dejarlo vacío o añadir este código simple para probar.

console.log("¡script.js ha sido cargado exitosamente!");

// Ejemplo: Saludo al cargar la página (aparecerá en la consola del navegador)
console.log("Bienvenido a la Biblioteca del Saber.");



document.addEventListener('DOMContentLoaded', function() {
    // --- Cambiar colores y estilo (Código que te di para el título) ---
    const tituloMision = document.getElementById('misionTitulo');

    tituloMision.addEventListener('mouseenter', function() {
        tituloMision.style.color = '#E74C3C'; // Rojo oscuro
        tituloMision.style.transform = 'scale(1.05)'; // Un poco más grande
        tituloMision.style.transition = 'all 0.3s ease'; // Animación suave
    });

    tituloMision.addEventListener('mouseleave', function() {
        tituloMision.style.color = '#333'; // Vuelve al color original
        tituloMision.style.transform = 'scale(1)'; // Vuelve al tamaño original
    });

    // --- Animaciones con CSS y JS (Código que te di para la imagen) ---
    const imagenPrincipal = document.getElementById('imagenBienvenida');

    imagenPrincipal.addEventListener('click', function() {
        imagenPrincipal.classList.toggle('girar');
    });

    // --- Avatar Móvil Interactivo (Código que te di para el avatar) ---
    const avatar = document.getElementById('avatar-container');
    const avatarImg = document.getElementById('avatar-img'); // Aunque no se usa directamente en este ejemplo, es bueno tenerlo

    avatar.addEventListener('click', function() {
        alert("¡Hola! Soy el guardián de esta biblioteca. ¿En qué puedo ayudarte?");

        // Pequeño "salto" al hacer clic
        avatar.style.transform = 'translateY(-15px)';
        setTimeout(() => {
            avatar.style.transform = 'translateY(0px)';
        }, 300);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // ... código para el título de la misión ...

    // --- Animaciones con CSS y JS ---
    const imagenPrincipal = document.getElementById('imagenBienvenida');

    imagenPrincipal.addEventListener('click', function() {
        // Alterna la clase 'girar'. Si la tiene, la quita; si no la tiene, la añade.
        imagenPrincipal.classList.toggle('girar');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // ... código para el título de la misión ...
    // ... código para la imagen principal ...

    // --- Avatar Móvil Interactivo ---
    const avatar = document.getElementById('avatar-container');
    const avatarImg = document.getElementById('avatar-img');

    avatar.addEventListener('click', function() {
        // Ejemplo 1: Mensaje al hacer clic
        alert("¡Hola! Soy el guardián de esta biblioteca. ¿En qué puedo ayudarte?");

        // Ejemplo 2: Un pequeño "salto" o cambio de posición al hacer clic
        // Puedes alternar entre dos posiciones o hacer un pequeño efecto.
        // Para un "salto":
        avatar.style.transform = 'translateY(-15px)'; // Sube un poco
        setTimeout(() => {
            avatar.style.transform = 'translateY(0px)'; // Vuelve a la posición original
        }, 300); // Después de 300 milisegundos

        // Si quieres que vaya a otra sección:
        // Esto es más avanzado. Tendrías que definir a dónde quieres que vaya
        // y calcular las coordenadas, o hacer scroll a un elemento específico.
        // Por ahora, el salto es un buen inicio.
    });
});


