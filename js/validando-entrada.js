function validarEntrada(entrada) {
    var retorno = false;
    if (entrada.toLowerCase() != entrada) {
        alert("Por favor, insira apenas letras minúsculas e sem acento!");
        retorno = true;
    };
    return retorno;
};