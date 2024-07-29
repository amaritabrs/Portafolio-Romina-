document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Mensaje enviado 🦆");

        // Redirige a la página de agradecimiento
        window.location.href = 'redirección.html';
    });
});


