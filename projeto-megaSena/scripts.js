const frm = document.querySelector("form")
let num1 = document.querySelector("#num1")
let num2 = document.querySelector("#num2")
let num3 = document.querySelector("#num3")
let num4 = document.querySelector("#num4")
let num5 = document.querySelector("#num5")
let num6 = document.querySelector("#num6")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let listaNum = []
    let min = 1
    let max = 60
    while (listaNum.length < 6) {
        let numSorteado = Math.floor(Math.random() * (max - min + 1) + min);

        if (listaNum.indexOf(numSorteado) == -1) {
            listaNum.push(numSorteado)
        }
    }
    console.log(listaNum)

    num1.innerText = listaNum[0]
    num2.innerText = listaNum[1]
    num3.innerText = listaNum[2]
    num4.innerText = listaNum[3]
    num5.innerText = listaNum[4]
    num6.innerText = listaNum[5]
})





