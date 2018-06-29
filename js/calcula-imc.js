atualizarTabelaPacientes();


function atualizarTabelaPacientes(){

    Array.from(document.querySelectorAll(".paciente")).map(pacienteTR => {

        var peso = Number(pacienteTR.querySelector(".info-peso").textContent);
        var altura = Number(pacienteTR.querySelector(".info-altura").textContent);

        let erro = null;
        if(peso <= 0 || peso >= 1000){
            erro = "Peso inválido!";
        }
        
        if(altura <= 0 || altura >= 3.00){
            erro = "Altura inválida!";
        }

        if(!!erro){
            pacienteTR.classList.add("paciente-invalido");
        }

        var imcTD = pacienteTR.querySelector(".info-imc");

        imcTD.textContent = erro || calcularIMC(peso, altura);        
    });
}

function calcularIMC(peso, altura){

    return (peso / (altura * altura)).toFixed(2);
}