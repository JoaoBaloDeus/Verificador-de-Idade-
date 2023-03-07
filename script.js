function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var fano2 = Number(fano.value)
    var ress = document.querySelector('div#res')
    if (fano2< 0 || fano2 == ""){
        alert('ERRO verifique os dados e tente novamente')
    }else{ 
        var fsex = document.getElementById("radsex")
        var idade = ano - Number(fano.value)
         document.querySelector("div#res").innerHTML = `idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(document.getElementById('masc').checked){
            console.log("marcado")
            genero = 'Homem'
            if(idade >=0 && idade <=10){
                //CRIANÇA
                img.setAttribute('src', 'pexels-bess-hamiti-35537.jpg')
            }else if (idade >10 && idade< 21){
                img.setAttribute('src', 'pexels-myicahel-tamburini-1553783.jpg')
            }else if (idade >=21 && idade< 50){
                img.setAttribute('src', 'pexels-mart-production-8872550.jpg')
            }else{
                img.setAttribute('src', 'pexels-hasan-abwini-9923562.jpg')
            }

        }else if (document.getElementById('fem').checked){
            genero = 'Mulher'
            if(idade >=0 && idade <=10){
                img.setAttribute('src', 'pexels-alexander-dummer-1912868.jpg')
            }else if (idade >10 && idade< 21){
                img.setAttribute('src', 'pexels-daniel-xavier-1239291.jpg')
            }else if (idade >=21 && idade< 50){
                img.setAttribute('src', 'pexels-adrienne-andersen-2552130.jpg')
            }else{
                img.setAttribute('src', 'pexels-askar-abayev-5638645.jpg')
            }
            
        }
        ress.style.textAlign = 'center'
        document.getElementById("res").innerHTML = `Detectamos ${genero} com ${idade} anos`
        ress.appendChild(img)
        img.style.textAlign = 'center'

        
    }

}