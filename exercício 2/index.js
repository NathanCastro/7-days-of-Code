const textName = document.getElementById('name').value;
    const age = document.getElementById('years').value;
    const textlanguage = document.getElementById('language').value;
    console.log(textName)
    function send(){   

    if(textName && age && textlanguage === ''){
        alert('preencher os dados corretamente')
    }else{
        document.getElementById('valorDigitado').innerHTML = `Seu nome é ${textName}
    vc tem ${age} anos e estuda a linguagem ${textlanguage}`
    }
    
}
