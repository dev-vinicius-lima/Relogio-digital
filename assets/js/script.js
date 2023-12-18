const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

const relogio = setInterval(function time() {
    let datetoday = new Date();
    let hora = datetoday.getHours();
    let minuto = datetoday.getMinutes();
    let segundo = datetoday.getSeconds();

    horas.innerHTML = hora
    minutos.innerHTML = minuto
    segundos.innerHTML = segundo
})