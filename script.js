const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let data = new Date()
    let hr = data.getHours()
    let mins = data.getMinutes()
    let s = data.getSeconds()

    if(hr < 10) hr = '0' + hr
    if(mins < 10) mins = '0' + mins
    if(s < 10) s = '0' + s

    horas.textContent = hr
    minutos.textContent = mins
    segundos.textContent = s


})