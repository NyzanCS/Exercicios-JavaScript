function multiplicar(){
    var number = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if(number.value.length == 0){
        alert('ERRO, coloque algum número!')
    } else {
        var n = Number(number.value)
        var c = 1
        tab.innerHTML = ''

        while(c <= 10){
            var item = document.createElement ('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}