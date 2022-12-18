consultaEndereço = ()=>{
    var cep = document.querySelector('#cep').value
    var resul = document.querySelector('#resul')
    if(cep.length != 8){
        alert('CEEP INEXISTENTE')
        return
    }
    var url = `https://viacep.com.br/ws/${cep}/json/`
    fetch(url).then((response)=>{
        response.json().then((data)=>{
            console.log(data)
            resul.innerHTML = `Você é de: ${data.localidade}-${data.uf}`
        })
    })
}