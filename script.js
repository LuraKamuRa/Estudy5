let btn1 = document.querySelector("#menos")
let btn2 = document.querySelector("#mais")
let numero = document.querySelector("#numero")
let btn3 = document.querySelector("#reset")
let btn4 =document.querySelector("#random")

btn1.addEventListener("mouseup", () => {
    let valor = parseInt(numero.innerHTML)
    valor -= 1
    numero.innerHTML = valor
})
btn2.addEventListener("mouseup", () => {
    let valor = parseInt(numero.innerHTML)
    valor += 1
    numero.innerHTML = valor
})
btn3.addEventListener("mouseup", () => {
    let valor = parseInt(numero.innerHTML)
    valor = 0
    numero.innerHTML = valor
})
btn4.addEventListener("mouseup", () => {
    let valor = parseInt(numero.innerHTML)
    min = -100000
    max = 100000
    let random = Math.random() * (max - min) + min;
    random = Math.floor(random)
    valor = random
    numero.innerHTML = valor
})