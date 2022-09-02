function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    if (hora >= 0 && hora < 12){
        img.src = 'src/img/Foto-manha.jpg'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Bom dia! Agora são ${hora}:${minuto}`
    }else if (hora >= 12 && hora < 18){
        img.src = 'src/img/Foto-tarde.jpg'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Boa Tarde! Agora são ${hora}:${minuto}`
    }else{
        img.src = 'src/img/Foto-noite.jpg'
        document.body.style.background = '#515154'
        msg.innerHTML = `Boa Noite! Agora são ${hora}:${minuto}`
    }
}