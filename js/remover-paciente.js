Array.from(document.querySelectorAll(".paciente")).forEach(pacienteTR => {
    addListenerParaRemover(pacienteTR);
});

function addListenerParaRemover(elemento){
    elemento.addEventListener("dblclick", function () {
        this.remove();
    });
}