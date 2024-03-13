window.onload = init;

function init() {
    var map = L.map('map').setView([10.20, -85], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([10.20, -85]).addTo(map)
        .bindPopup('Centro de Costa Rica')
        .openPopup();

}

