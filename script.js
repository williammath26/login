function logar(){
    var User =document.getElementById('User').value;
    var senha =document.getElementById('senha').value;

    if(User == "admin" && senha == "12345"){
        alert("Sucesso...")
    }else{
        alert('Usuário não cadastrado')
    }


}