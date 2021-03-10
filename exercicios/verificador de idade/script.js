function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.querySelector('div#res')

        if(fano.value.length == 0 || fano.value > ano){   
            window.alert(`[ERRO] Verifique seus dados e tente novamente!`)
        } else{
            var fsex = document.getElementsByName(`radsex`)
            var idade = ano-Number(fano.value)
            res.innerHTML= `A idade atual é ${idade}`
            var gênero = ''

            var img = document.createElement('img')  
            img.setAttribute('id', 'foto')   

            if(fsex[0].checked){
                gênero = 'Homem'
                    if(idade >= 0 && idade < 5){
                        // Bebe
                        img.setAttribute('src', 'img/fotobebem.png')

                    }else if (idade < 15){
                        img.setAttribute('src', 'img/fotocriancam.png')

                    }else if (idade < 20 ){ 
                        img.setAttribute('src', 'img/fotoadolescentem.png')
                        // Adolescente
                    
                    }else if (idade < 45 ){ 
                        img.setAttribute('src', 'img/fotohomem30.png')
                        // Adulto    

                    }else{
                        img.setAttribute('src', 'img/fotovelhom.png')
                        //velho
                    } 
                    
                    }else if (fsex[1].checked) {
                    gênero = 'Mulher'
                        
                    if(idade >= 0 && idade < 5){
                        img.setAttribute('src', 'img/fotobebef.png')
                        // Bebe

                    }else if (idade < 15){
                        img.setAttribute('src', 'img/fotocriacaf.png')
                    
                        // Criança
                    
                    }else if (idade < 20 ){ 
                        img.setAttribute('src', 'img/fotoadolescentef.png')
                        // Adolescente
                    
                    }else if (idade < 50 ){ 
                        img.setAttribute('src', 'img/fotomulher30.png')
                        // Adulto    


                    }else{
                        img.setAttribute('src', 'img/fotovelhof.png')
                        //velho
                    } 
                    }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos gênero ${gênero} com idade de ${idade}.`
            res.appendChild(img)
        }
    }