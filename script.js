const bioElemento = document.getElementById('my-bio');
const btnBio = document.getElementById('btn-bio');

bioElemento.style.display = 'none';

btnBio.addEventListener('click', function() {
    if (bioElemento.style.display === 'none') {
        bioElemento.style.display = 'block';
        btnBio.textContent = '👀 Ocultar Bio';
    } else {
        bioElemento.style.display = 'none';
        btnBio.textContent = '👀 Mostrar Bio'
    }
});