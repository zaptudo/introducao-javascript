atualizarTabelaPacientes();

document.querySelector("#adicionar-paciente").addEventListener("click", function (event) {
    event.preventDefault();
    
    let tabela = document.querySelector("#tabela-pacientes");

    let linhaTabela = document.createElement("tr");
    linhaTabela.classList.add("paciente");
    tabela.appendChild(linhaTabela);

    let colunaNome = document.createElement("td");
    colunaNome.classList.add("info-nome");
    colunaNome.textContent = document.querySelector("#nome").value;
    document.querySelector("#nome").value = "";
    linhaTabela.appendChild(colunaNome);

    let colunaPeso = document.createElement("td");
    colunaPeso.classList.add("info-peso");
    colunaPeso.textContent = document.querySelector("#peso").value;
    document.querySelector("#peso").value = "";
    linhaTabela.appendChild(colunaPeso);

    let colunaAltura = document.createElement("td");
    colunaAltura.classList.add("info-altura");
    colunaAltura.textContent = document.querySelector("#altura").value;
    document.querySelector("#altura").value = "";
    linhaTabela.appendChild(colunaAltura);

    let colunaGordura = document.createElement("td");
    colunaGordura.classList.add("info-gordura");
    colunaGordura.textContent = document.querySelector("#gordura").value;
    document.querySelector("#gordura").value = "";
    linhaTabela.appendChild(colunaGordura);

    let colunaIMC = document.createElement("td");
    colunaIMC.classList.add("info-imc");
    linhaTabela.appendChild(colunaIMC);

    atualizarTabelaPacientes();
});


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