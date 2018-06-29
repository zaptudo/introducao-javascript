document.querySelector("#adicionar-paciente").addEventListener("click", function (event) {

    event.preventDefault();
    
    let formulario = document.querySelector("#form-adiciona");
    let tabela = document.querySelector("#tabela-pacientes");

    adicionarPacienteTabela(tabela, obterPacienteFormulario(formulario));

    limparFormulario(formulario);
});


function obterPacienteFormulario(formulario){

    return {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calcularIMC(formulario.peso.value, formulario.altura.value)
    };
}

function limparFormulario(formulario){

    formulario.nome.value = "";
    formulario.peso.value = "";
    formulario.altura.value = "";
    formulario.gordura.value = "";
}

function adicionarPacienteTabela(tabela, paciente) {

    let linhaTabela = document.createElement("tr");
    linhaTabela.classList.add("paciente");
    tabela.appendChild(linhaTabela);

    adicionarColunaLinhaTabela(linhaTabela, paciente.nome, "info-nome");
    adicionarColunaLinhaTabela(linhaTabela, paciente.peso, "info-peso");
    adicionarColunaLinhaTabela(linhaTabela, paciente.altura, "info-altura");
    adicionarColunaLinhaTabela(linhaTabela, paciente.gordura, "info-gordura");
    adicionarColunaLinhaTabela(linhaTabela, paciente.imc, "info-imc");
}

function adicionarColunaLinhaTabela(linhaTabela, valor, classeCss){

    let colunaNome = document.createElement("td");
    colunaNome.classList.add(classeCss);
    colunaNome.textContent = valor;
    linhaTabela.appendChild(colunaNome);
}