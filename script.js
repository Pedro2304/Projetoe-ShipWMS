function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    if (name.trim() == '') {
        errorMessage.innerText = 'Por favor, insira seu nome.';
        return false;
    }

    if (email.trim() == '') {
        errorMessage.innerText = 'Por favor, insira seu email.';
        return false;
    }

    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        errorMessage.innerText = 'Por favor, insira um email válido.';
        return false;
    }

    if (password.trim() == '') {
        errorMessage.innerText = 'Por favor, insira sua senha.';
        return false;
    }

    errorMessage.innerText = '';
    return true;
}
