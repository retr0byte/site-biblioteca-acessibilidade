
const acessarCampos = () => {
    let nome = $("#nome")
    let email = $("#email")
    let tel = $("#tel")
    let msg = $("#msg")

    return { nome, email, tel, msg }
}

const aplicarMascaras = () => {
    let campos = acessarCampos()
    campos.tel.mask('(00) 0000-0000')
}

const validarCampos = () => {
    let arrErros = []
    let campos = acessarCampos()
    for (const key in campos) {
        if(campos[key].val() == ''){
            arrErros.push({ key, status:'empty'})
        }
        // fazer as verificacoes para os status minSize e onlyChar
    }
    exibirMensagem(arrErros)
}

const exibirMensagem = erros => {
    let msgsErro = ''

    const mensagens = {
        empty:"o campo não pode estar em branco!",
        minSize: `minímo de X carácteres!`,
        onlyChar: "somente é permitida a entrada de letras!"
    }
    
    for (let i = 0; i < erros.length; i++) {
        const erro = erros[i];
        const status = erro.status

        const nomeCampo = $(`label[for="${erro.key}"]`).text()
        const msg = mensagens[status]

        msgsErro += `<p> ${i+1} - ${nomeCampo}, <a href="#${erro.key}">${msg}</a> </p>`
    }
    $("#mensagensErro").html(msgsErro)
    $("#mensagensErro").fadeIn()
}

const assistirForm = () => {
    $("#formAcessivel").submit(function(e){
        e.preventDefault()
        validarCampos()
    })
}

const enviarDados = () => {
    // todos os dados tendo passado na verificação
    // enviará os dados através de uma request
    // para um arquivo .php de testes que exibirá os dados recebidos
}

$(function(){
    aplicarMascaras()
    assistirForm()
})

