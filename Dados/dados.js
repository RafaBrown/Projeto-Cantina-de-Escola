var nome = document.querySelector('#nome')
var labelnome = document.querySelector('#labelnome')

var cpf = document.querySelector('#cpf')
var labelcpf = document.querySelector('#labelcpf')

var msgError = document.querySelector('#msgError')
var msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () =>{
    if(nome.value.length <= 2){
       labelnome.setAttribute('style','color: red')
       labelnome.innerHTML = 'Nome *Insira no minimo 3'
       nome.setAttribute('style','border-color: red')
    }else {
        labelnome.setAttribute('style','color: green')
        labelnome.innerHTML = '<strong>Nome</strong>' 
        nome.setAttribute('style','border-color: green')
    }
})
cpf.addEventListener('keyup', () =>{
    if(cpf.value.length <= 10){
       labelcpf.setAttribute('style','color: red')
       labelcpf.innerHTML = 'CPF *Insira no minimo 11'
       cpf.setAttribute('style','border-color: red')
   
    }else {
        labelcpf.setAttribute('style','color: green')
        labelcpf.innerHTML = '<strong>CPF</strong>' 
        cpf.setAttribute('style','border-color: green')
    }
})
function dadosCliente(){
    if(validNome && validCpf){
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

function dadosCliente(){
    nome = document.dados.nome.value
    cpf = document.dados.cpf.value
    if ((nome==nome) && (cpf==cpf)){
        window.location.href='http://127.0.0.1:5500/Venda/venda.html'
        alert("Dados Completos")
    }else{
        alert("Nome Obrigatório")
    }
}