    
function Verificar(){
    let nome = document.getElementById("txtNome").value;
    let QuemConvidou = document.getElementById("txtConvidou");
    let verifica = document.getElementById("res");
    // lista de convidados
    const CLucas = ['Julia','Kaue','Julio']; 
    const CBruno = ['Ruan','Jake','Amanda'];
    const CPaulo = ['Gabriel','Igor','Kauan'];

    // verifica se o usúario não digitou nada
    if(nome.value === '' || QuemConvidou.value === '' ){ 
        alert("Preencha todos os campos abaixo!")
    }
    
    //verifica se o nome digitado pelo usúario esta na lista de convidados
    else if(CLucas.includes(nome) || CBruno.includes(nome) || CPaulo.includes(nome) ){ 
        verifica.innerText = ("Acesso concedido, divirta-se!")
    }
    else{
        verifica.innerText = ("Acesso negado")
    }   
}





