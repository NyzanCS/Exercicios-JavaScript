function calcular(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('resultado')
        if(inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0){
            alert('Preencha os valores corretamente.')
        } else if (inicio.value == 0 || fim.value == 0 || passo.value == 0){
            alert('O número zero, não é um valor válido')
        } else{
            res.innerHTML = "Contando..."
            let i = Number(inicio.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            if (i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F47E}`
            }
            }else{
            for (let c = i; c >= f; c-= p){
                res.innerHTML += `${c} \u{1F47E}`
            }
        }
        }
}