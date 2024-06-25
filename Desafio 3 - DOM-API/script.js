document.addEventListener('DOMContentLoaded', function () {
    const ufInput = document.getElementById('ufInput');
    const municipiosList = document.getElementById('municipiosList');

    function fetchMunicipios() {
        const uf = ufInput.value.trim().toUpperCase();
        if (uf) {
            fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
                .then(response => response.json())
                .then(data => {
                    municipiosList.innerHTML = '';
                    data.forEach(municipio => {
                        const li = document.createElement('li');
                        li.textContent = municipio.nome;
                        municipiosList.appendChild(li);
                    });
                })
                .catch(error => {
                    console.error('Erro ao buscar municípios:', error);
                    municipiosList.innerHTML = `<li>Erro ao buscar municípios: ${error.message}</li>`;
                });
        } else {
            alert('Por favor, digite a sigla de um estado.');
        }
    }

    ufInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            fetchMunicipios();
        }
    });
});
