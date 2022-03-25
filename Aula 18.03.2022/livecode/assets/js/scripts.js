/*
    var: escopo global
    let: escopo local
    const: constante escopo global
*/

/*
    public void function hello(){
        // escopo da função
    }
*/

let nome = window.document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.getElementById('assunto')

function pressionar(){
    alert("Você clicou no botão")
}

function verificarCampos(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("Todos os campos devem ser preenchidos")
    } else {
        alert("Feedback Enviado")
    }
}
