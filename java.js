document.addEventListener("DOMContentLoaded",
    function () {} );


    function botao(){
        let botao = document.querySelector("#botao")
        inputminmax()
        console.log(botao)
    }

    function inputminmax() {
        let min = Math.ceil(document.querySelector("#min").value)
        let max = Math.floor(document.querySelector("#max").value)
        let resultado = Math.floor(Math.random() * (max - min + 1)) + min;

        let hresultado = document.querySelector("#resultado")

        hresultado.textContent = `${resultado}`
  
        
        


    }