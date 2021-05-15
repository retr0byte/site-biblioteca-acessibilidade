const camposVazios = valorCampo => {
    if(valorCampo == '')
        return true
    else
        return false
}

const tamanhoMinimo = (valorCampo, paramVerificacao) => {
    if(valorCampo.length < paramVerificacao)
        return true
    else
        return false
}

const apenasLetras = valorCampo => {    
    for (let i = 0; i < 10; i++) {
        if(valorCampo.indexOf(i) != -1)
            return true
    }
    return false
}
