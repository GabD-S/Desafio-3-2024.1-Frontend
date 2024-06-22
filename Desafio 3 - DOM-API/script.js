document.addEventListener('DOMContentLoaded', function () {
    const estadoElements = document.querySelectorAll('.option');
    const ufButton = document.getElementById('ufButton');

    estadoElements.forEach(estado => {
        estado.addEventListener('click', () => {
            const estadoValue = estado.getAttribute('data-value');
            window.open(`municipios.html?estado=${estadoValue}`, '_blank');
        });

        estado.addEventListener('mouseover', () => {
            const estadoName = estado.textContent;
            ufButton.textContent = estadoName;
        });

        estado.addEventListener('mouseout', () => {
            ufButton.textContent = 'Escolha um estado'; 
        });
    });
});
