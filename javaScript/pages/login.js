document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'senha123') {
            message.style.color = 'green';
            message.textContent = 'Login bem sucedido! Redirecionando...';
            message.style.display = 'block';

            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 500);
        } else {
            message.style.color = 'red';
            message.textContent = 'Nome de usuário inválido ou senha incorreta.';
            message.style.display = 'block';
        }
    });
});