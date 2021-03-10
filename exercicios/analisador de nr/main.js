let num = document.getElementById('fnum');
let list = document.getElementById('selc');
let res = document.getElementById('res');
let valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <=100){
             return true
    }  else {
            return false
    }
}

function inList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
} else {
    window.alert ("Erro, você digitou algum número errado ou ja adicionado anteriormente!")
}
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione algum valor antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        
        media = soma/total

        res.innerHTML= ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados!</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores foi ${soma} </p>`
        res.innerHTML += `<p> A media de todos os valores acima é ${media}.`
   
    }
}