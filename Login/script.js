let usuario = document.querySelector('#usuario')
let labelusuario = document.querySelector('#labelusuario')

let senha = document.querySelector('#senha')
let labelsenha = document.querySelector('#labelsenha')

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

usuario.addEventListener('keyup', () =>{
    if(usuario.value.length <= 2){
       labelusuario.setAttribute('style','color: red')
       labelusuario.innerHTML = 'Nome *Insira no minimo 3'
       usuario.setAttribute('style','border-color: red')
    }else {
        labelusuario.setAttribute('style','color: green')
        labelusuario.innerHTML = 'Nome' 
        usuario.setAttribute('style','border-color: green')
    }
})
senha.addEventListener('keyup', () =>{
     if(senha.value.length <= 5){
        labelsenha.setAttribute('style','color: red')
        labelsenha.innerHTML = 'Senha *Insira no minimo 6'
        senha.setAttribute('style','border-color: red')
    
     }else {
         labelsenha.setAttribute('style','color: green')
         labelsenha.innerHTML = 'Senha' 
         senha.setAttribute('style','border-color: green')
     }

 })
 
function pegarDados(){
    if(validUsuario && validSenha){
       

     msgSuccess.setAttribute('style','display: block')
     msgSuccess.innerHTML = '<strong>Concluido </strong>'
     msgError.setAttribute('style','display:none')
     msgError.innerHTML =''
    
     } else{
     msgError.setAttribute('style','display:block')
     msgError.innerHTML ='<strong>Preencha todos os dados!</strong>'
     msgSuccess.innerHTML = ''
     msgSuccess.setAttribute('style','display: none')
    }
}
var nome = 'Rafael'
var num = '123456';

    function pegarDados(){
       login = document.dados.login.value
       senha = document.dados.senha.value

       if ((nome==login) && (num==senha)){
        window.location.href='http://127.0.0.1:5500/Home/home.html'
        alert ("Seja bem Vindo")
       }else{
        alert("Login ou senha incorreto")
       }
}


 

