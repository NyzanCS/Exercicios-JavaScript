function carregar(){
    var img = document.getElementById(`msg`)
    var img = document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    //var hora = 21
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        img.src = "fotomanha.png"
        document.body.style.background = '#e6df91'

    } else if (hora >=12 && hora <= 18){
        img.src = "fototarde.png"
        document.body.style.background ="#9f4c15"

    } else {
        img.src = "fotonoite.png"
        document.body.style.background ='#0d1515'
    }
}
