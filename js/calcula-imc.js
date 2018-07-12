function calcularIMC(peso, altura) {

    return (peso / (altura * altura)).toFixed(2);
}

function validaPaciente(paciente) {

    let erros = [];

    if(!isNomeValido(paciente.nome)){
        erros.push("Nome inválido!");
    }

    if (!isAlturaValida(paciente.altura)) {
        erros.push("Altura inválida!");
    }

    if (!isPesoValido(paciente.peso)) {
        erros.push("Peso inválido!");
    }

    if (!isGorduraValida(paciente.gordura)) {
        erros.push("Gordura inválida!");
    }

    return erros;
}


function isNomeValido(nome) {

    return !!nome && nome.length > 0;
}

function isPesoValido(peso) {

    return !isNaN(peso) && peso > 0 && peso < 1000;
}

function isAlturaValida(altura) {

    return !isNaN(altura) && altura > 0 && altura < 3.00;
}

function isGorduraValida(gordura) {

    return !isNaN(gordura) && gordura > 0 && gordura < 100;
}