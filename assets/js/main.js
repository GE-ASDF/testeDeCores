let telaCand = document.querySelector(".telaCand")
let confirma = document.querySelector(".confirma")
let busca = document.querySelector(".busca")
let imagemCand = document.querySelector(".imagemCand")
let recebidos = []

busca.addEventListener("keyup", function(e){
    let seInput = e.target
    if(seInput.classList.contains("fundo")){
        let valorInputFundo = e.target.value
        if(valorInputFundo == ""){
            imagemCand.style.backgroundColor = "#fff"
        } else(
            imagemCand.style.backgroundColor = "#" + valorInputFundo
        )
    } else if(seInput.classList.contains("letra")){
        let valorInputLetra = e.target.value
        if(valorInputLetra == ""){
            imagemCand.style.color = "#000"
        } else(
            imagemCand.style.color = "#" + valorInputLetra
        )
    }

    
})

telaCand.addEventListener("keyup", function(e){
    let max = 300;
    let min = 150;
    let valorInputSize = Number(e.target.value);
    const largura = imagemCand.clientWidth;
    if(valorInputSize > min && valorInputSize <= max){
        imagemCand.style.width = valorInputSize + "px"
        imagemCand.style.height = valorInputSize + "px"
    }
    if(valorInputSize == "" || valorInputSize <= 0){
        imagemCand.style.width = "150px"
        imagemCand.style.height = "150px"
    }
})