function iniciatimer(duracao, display){

    var timer = duracao
    var min
    var seg

    setInterval(function (){
        min = parseInt(timer / 60) // transforma os segundos totais em minutos
        seg = parseInt(timer % 60) // faz com que os segundos totais mostrem os segundos até 60

        min = min<10? "0"+min : min //se os minutos forem menores que 10 coloca um 0 na esquerda
        seg = seg<10? "0"+seg : seg // se os segundos forem menores que 10 coloca um 0 na esquerda

        display.innerText = min+":"+seg // atualiza o display a cada segundo

        timer-- // reduz o tempo da duração em 1

        if(timer < 0){
            timer = duracao // reseta o timer 
        }
    }, 1000)
}

window.onload = function(){
    var duracao = parseInt(window.prompt('Digite quantos segundos serão contados')) 
        display = document.querySelector('#timer') //linka o display com a div no html

    iniciatimer(duracao,display);
}