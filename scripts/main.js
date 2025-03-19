document.querySelector('#iniciarSesionBtn').addEventListener('click', (event) => {
    event.preventDefault(); // Evitar comportamiento predeterminado del enlace
    const loginElement = document.querySelector('.login');
    const regisElement = document.querySelector('.regis');
    if (loginElement && regisElement) {
        loginElement.style.display = 'block';
        regisElement.style.display = 'none';
    }
});

document.querySelector('#registrarBtn').addEventListener('click', (event) => {
    event.preventDefault(); // Evitar comportamiento predeterminado del enlace
    const loginElement = document.querySelector('.login');
    const regisElement = document.querySelector('.regis');
    if (loginElement && regisElement) {
        loginElement.style.display = 'none';
        regisElement.style.display = 'block';
    }
});
