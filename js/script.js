// Animación al hacer scroll
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            card.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let dynamicText = document.querySelector('.dynamic-text');
    let phrases = ['sabores deliciosos', 'sabores frescos', 'sabores únicos']; // Array de frases
    let index = 0;

    setInterval(() => {
        dynamicText.style.animation = 'none'; // Detenemos la animación
        dynamicText.offsetHeight; // Forzamos la revalidación del estilo
        dynamicText.textContent = phrases[index]; // Cambiamos el texto
        dynamicText.style.animation = ''; // Reiniciamos la animación
        index = (index + 1) % phrases.length; // Cicla entre las frases
    }, 5000); // Cambia el texto cada 5 segundos
});

function initMap() {
    // Mapa centrado en una ubicación ejemplo
    var location = {lat: -31.43331812847518, lng: -64.15490600136874};  // Cambia estas coordenadas por las de tu franquicia
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Nuestra Ubicación'
    });
}