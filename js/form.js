atualizarTabelaPacientes();

document.querySelector("#adicionar-paciente").addEventListener("click", function (event) {

    event.preventDefault();

    let formulario = document.querySelector("#form-adiciona");
    let tabela = document.querySelector("#tabela-pacientes");
    let paciente = obterPacienteFormulario(formulario);

    let erros = validaPaciente(paciente);
    if (erros.length > 0) {
        exibeErrosFormulario(erros);
    } else {
        adicionarPacienteTabela(tabela, paciente);
        limparFormulario(formulario);
        limparErrosFormulario();
    }
});


function atualizarTabelaPacientes() {

    Array.from(document.querySelectorAll(".paciente")).map(pacienteTR => {

        let nome = pacienteTR.querySelector(".info-nome").textContent;
        let peso = Number(pacienteTR.querySelector(".info-peso").textContent);
        let altura = Number(pacienteTR.querySelector(".info-altura").textContent);
        let gordura = Number(pacienteTR.querySelector(".info-gordura").textContent);

        let paciente = {
            "nome": nome,
            "peso": peso,
            "altura": altura,
            "gordura": gordura
        };

        let erros = validaPaciente(paciente);
        if (erros.length > 0) {
            exibeErrosLinhaTabela(pacienteTR, erros.join("\r\n"));
        } else {
            let imcTD = pacienteTR.querySelector(".info-imc");
            imcTD.textContent = calcularIMC(peso, altura);
        }
    });
}

function limparFormulario(formulario) {

    formulario.nome.value = "";
    formulario.peso.value = "";
    formulario.altura.value = "";
    formulario.gordura.value = "";
}

function obterPacienteFormulario(formulario) {

    return {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calcularIMC(formulario.peso.value, formulario.altura.value)
    };
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

    addListenerParaRemover(linhaTabela);
}

function adicionarColunaLinhaTabela(linhaTabela, valor, classeCss) {

    let colunaNome = document.createElement("td");
    colunaNome.classList.add(classeCss);
    colunaNome.textContent = valor;
    linhaTabela.appendChild(colunaNome);
}

function exibeErrosLinhaTabela(pacienteTR, mensagem) {

    pacienteTR.classList.add("paciente-invalido");
    let imcTD = pacienteTR.querySelector(".info-imc");
    imcTD.textContent = mensagem;
}

function exibeErrosFormulario(erros) {

    limparErrosFormulario();

    let ULErro = document.querySelector("#mensagens-erro");
    erros.forEach(erro => {
        LIErro = document.createElement("li");
        LIErro.textContent = erro;
        ULErro.appendChild(LIErro);
    });
}

function limparErrosFormulario() {

    let ULErro = document.querySelector("#mensagens-erro");

    while (ULErro.firstChild) {
        ULErro.removeChild(ULErro.firstChild);
    }
}