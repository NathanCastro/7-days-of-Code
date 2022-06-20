function validar(){
    let nomeTecnologia = document.getElementById('name').value;
    document.getElementById('name').value ='';

    if (nomeTecnologia == "") {
        alert("Favor informar a tecnologia!");   

    }else if(nomeTecnologia == "frontend" || nomeTecnologia == "front"){
       
        return changeStates();
        let framework 
        if(framework == 'angular' ){           
            document.getElementById('valorDigitado').innerHTML = `parabens pelo bom gosto`
        }else if (framework == 'react'){            
            document.getElementById('valorDigitado').innerHTML = `isso nem framework é`
        }else{
            document.getElementById('valorDigitado').innerHTML = `angular ou react, um dos dois`
        }

    } else if(nomeTecnologia == "back" || nomeTecnologia == "backend"){
        let frameworkBack = prompt('C# ou Java');
        if(frameworkBack == 'C#'){
           
            document.getElementById('valorDigitado').innerHTML = `dizem q é bom`
        }else if(frameworkBack == 'Java'){
           
            document.getElementById('valorDigitado').innerHTML = `pesado sempre`
        }else{
           
            document.getElementById('valorDigitado').innerHTML = `C# ou Java, um dos dois`
        }
    }

    else {
        alert("Colocar a resposta da pergunta");
    }
    
}

function changeStates(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
      document.getElementById(el).style.display = 'block';
    else
      document.getElementById(el).style.display = 'none';
}

