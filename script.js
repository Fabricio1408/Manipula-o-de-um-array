let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inlist(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar() {
    if (isnumero(num.value) && !inlist(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('Invalido ou já está na lista.')
    }
    num.value = ''
    num.focus()

}

function finalizar(){
    if (valores.length == 0) {
        window.alert ('Adicione os valores')
    }else{
        let tot = valores.length
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let soma = 0
        for (let i = 0; i < valores.length;i++){
            soma += valores[i];
        }
        let media = soma/tot
        
        res.innerHTML += ``
        res.innerHTML += `Ao todo, temos ${tot} números cadastrados.`
        res.innerHTML += `<br>O maior valor digitado é o ${maior}.`
        res.innerHTML += `<br>O menor valor digitado é o ${menor}.`
        res.innerHTML += `<br>A soma de todos os valores digitados é ${soma}.`
        res.innerHTML += `<br>A média dos valores digitados é ${media}.`
        let zerou = document.getElementById('zerou')
        zerou.style.display = 'block'





    }
}
function zerar(){
    location.reload();
}
