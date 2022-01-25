var input = document.querySelector("#input-texto");
input.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
    }
});

document.getElementById("btn-cripto").addEventListener("click", function (event) {
    event.preventDefault();
    var textoCodificado = document.getElementById("input-texto").value;
    if(validarEntrada(textoCodificado)){
        return;
    };    
    document.getElementById("msg").value = codificar(textoCodificado);
});

document.getElementById("btn-descripto").addEventListener("click", function (event) {
    event.preventDefault();
    var textoCodificado = document.getElementById("input-texto").value;
    if(validarEntrada(textoCodificado)){
        return;
    };      
    document.getElementById("msg").value = descodificar(textoCodificado);
});

document.getElementById("btn-clean").addEventListener("click", function () {
    document.getElementById("input-texto").value = "";
    document.getElementById("msg").value = "";
});

document.getElementById("btn-copy").addEventListener("click", function () {
    var copyText = document.getElementById("msg");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("O texto foi copiado!");
});


 