function carregar () {

    let msg = document.getElementById ('msg')
    let img = document.getElementById ('imagem')
    let data = new Date()
    let hora = data.getHours()

    //CASO QUEIRA FORÇAR A HORA, REMOVER COMENTARIO ABAIXO
    //let hora = 13

    msg.innerHTML = `Agora sao ${hora} horas`

    if (hora >= 0 && hora < 12) {
            // MANHA!
        img.src = 'manha.png'
        document.body.style.background = '#8f685b'
    }

    else if (hora >= 12 && hora <= 18) {
            // TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#ec764c'
    }

    else {
            // NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#233147'
    }
}
