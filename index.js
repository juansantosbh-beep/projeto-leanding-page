var SetaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var SetaEsquerda = window.document.getElementById("seta-esquerdaa")

function RolarParadireita() {
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
      SetaDireita.style ="display:none"
    SetaEsquerda.style ="display:flex; margin-top:55px" 
}

function RolarParaEsquerda(){
  Bruna.style ="display:none"
  Leonardo.style ="display:flex"
  SetaDireita.style ="display:flex; margin-top:55px "
    SetaEsquerda.style ="display:none" 


}
