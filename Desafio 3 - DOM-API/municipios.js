document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const estado = urlParams.get('estado');
    
    if (estado) {
        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const municipiosSelect = document.getElementById('municipiosSelect');
                data.forEach(municipio => {
                    const option = document.createElement('option');
                    option.value = municipio.id;
                    option.textContent = municipio.nome;
                    municipiosSelect.appendChild(option);
                });
            });
    }
});
