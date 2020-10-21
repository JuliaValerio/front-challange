
/* Validando formulario */
let firstName = document.querySelector('#name');
let phoneUser = document.querySelector('#phone');
let emailUser = document.querySelector('#email');

let senha = document.querySelector('#password');
let senhaRepeat = document.querySelector('#repeatPassword');

let erroSenha = document.querySelector('.error-password');


/* Máscaras para numero de telefone */
mask = (o, f) => {
    v_obj = o
    v_fun = f
    setTimeout("execmascara()", 1)
}
execmascara = () => {
    v_obj.value = v_fun(v_obj.value)
}
mtel = (v) => {
    v = v.replace(/\D/g, "");             //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

//validação para senha

checarSenha = () => {
    if (senha.value === senhaRepeat.value) {
        erroSenha.style.display = 'none';
        senha.style.border = '1px solid #51c751';
        senhaRepeat.style.border = '1px solid #51c751';
    } else {
        erroSenha.style.display = 'block';
        senha.style.border = '2px solid #e7443d';
        senhaRepeat.style.border = '2px solid #e7443d';
    }
}

//validação email
checarEmail = () => {
    if (document.forms[0].email.value == ""
        || document.forms[0].email.value.indexOf('@') == -1
        || document.forms[0].email.value.indexOf('.') == -1) {
        alert("Por favor, informe um E-MAIL válido!");
        emailUser.style.border = '2px solid #e7443d';
        return false;
    } else {
        emailUser.style.border = '2px solid #51c751';
    }
}

//confirmação final

const submitForm = () => {
    if (firstName.value.length > 1 && phoneUser.value.length > 1 && emailUser.value.length > 1 && senha.value.length > 1 && senhaRepeat.value.length > 1) {
        if (senha.value === senhaRepeat.value) {
            alert(`Olá seja bem-vindo!
                    Nome: ${firstName.value}; 
                    Telefone: ${phoneUser.value}; 
                    E-mail: ${emailUser.value}; 
                    Senhas: ${senha.value} e ${senhaRepeat.value}`);
        } else if (senha.value !== senhaRepeat.value) {
            alert("Preencha todos os campos corretamente!")
        }
    }
}

