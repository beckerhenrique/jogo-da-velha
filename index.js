const inputsBoard = document.querySelectorAll(".board input")

function inicioJogo(){
   const jogador1 = document.getElementById("jogador1").value
   const jogador2 = document.getElementById("jogador2").value

   if (jogador1 === "" || jogador2 === "") {
      return
   }

   const informacoes = document.getElementById("lugarInformacoes")
   const p = document.createElement("p") 
   p.setAttribute("id", "informacoesjogador")

   p.innerText = "O jogo está começando, " + jogador1 + " será o X e " + jogador2 + " será o O. " + jogador1 + " começa."

   informacoes.append(p)

   const jogadorAtual = document.getElementById("jogadorAtual")
   jogadorAtual.value = "Vez de " + jogador1
   inputsBoard.forEach(function (element){
      element.disabled = false
   })
}

//Viariável  para ver de quem é a vez
var turno = 1


//Função para  verificar se há  um ganhador
function  checarGanhador(){
   var  botao1, botao2, botao3, botao4, botao5, botao6, botao7, botao8, botao9
   botao1 = document.getElementById("botao1").value
   botao2 = document.getElementById("botao2").value
   botao3 = document.getElementById("botao3").value
   botao4 = document.getElementById("botao4").value
   botao5 = document.getElementById("botao5").value
   botao6 = document.getElementById("botao6").value
   botao7 = document.getElementById("botao7").value
   botao8 = document.getElementById("botao8").value
   botao9 = document.getElementById("botao9").value

   const jogador1 = document.getElementById("jogador1").value
   const jogador2 = document.getElementById("jogador2").value
   const jogadorAtual = document.getElementById("jogadorAtual")

   //Variável para não dar empate quando há vitória mas com o board cheio
   var vitoria = 0

   

   //Verificar se jogador1 (X) ganhou

   if (botao1 == "X" && botao2 == "X" && botao3 == "X") {
      jogadorAtual.value = jogador1 + " ganhou!"
      document.getElementById("botao4").disabled = true
      document.getElementById("botao5").disabled = true
      document.getElementById("botao6").disabled = true
      document.getElementById("botao7").disabled = true
      document.getElementById("botao8").disabled = true
      document.getElementById("botao9").disabled = true
      
      vitoria = 1
      document.getElementById("botao1").classList.add("success")
      document.getElementById("botao2").classList.add("success")
      document.getElementById("botao3").classList.add("success")
   }
   else if (botao4 == "X" && botao5 == "X" && botao6 == "X") {
      jogadorAtual.value = jogador1 + " ganhou!"
      document.getElementById("botao1").disabled = true
      document.getElementById("botao2").disabled = true
      document.getElementById("botao3").disabled = true
      document.getElementById("botao7").disabled = true
      document.getElementById("botao8").disabled = true
      document.getElementById("botao9").disabled = true
      vitoria = 1
      document.getElementById("botao4").classList.add("success")
      document.getElementById("botao5").classList.add("success")
      document.getElementById("botao6").classList.add("success")
   }
   else if (botao7 == "X" && botao8 == "X" && botao9 == "X") {
      jogadorAtual.value = jogador1 + " ganhou!"
      document.getElementById("botao1").disabled = true
      document.getElementById("botao2").disabled = true
      document.getElementById("botao3").disabled = true
      document.getElementById("botao4").disabled = true
      document.getElementById("botao5").disabled = true
      document.getElementById("botao6").disabled = true
      vitoria = 1
      document.getElementById("botao7").classList.add("success")
      document.getElementById("botao8").classList.add("success")
      document.getElementById("botao9").classList.add("success")
   }
   else if (botao1 == "X" && botao5 == "X" && botao9 == "X") {
      jogadorAtual.value = jogador1 + " ganhou!"
      document.getElementById("botao4").disabled = true
      document.getElementById("botao2").disabled = true
      document.getElementById("botao3").disabled = true
      document.getElementById("botao7").disabled = true
      document.getElementById("botao8").disabled = true
      document.getElementById("botao6").disabled = true
      vitoria = 1
      document.getElementById("botao1").classList.add("success")
      document.getElementById("botao5").classList.add("success")
      document.getElementById("botao9").classList.add("success")
   }
   else if (botao3 == "X" && botao5 == "X" && botao7 == "X") {
      jogadorAtual.value = jogador1 + " ganhou!"
      document.getElementById("botao1").disabled = true
      document.getElementById("botao2").disabled = true
      document.getElementById("botao4").disabled = true
      document.getElementById("botao6").disabled = true
      document.getElementById("botao8").disabled = true
      document.getElementById("botao9").disabled = true
      vitoria = 1
      document.getElementById("botao3").classList.add("success")
      document.getElementById("botao5").classList.add("success")
      document.getElementById("botao7").classList.add("success")
   }
   else if (botao1 == "X" && botao4 == "X" && botao7 == "X") {
      jogadorAtual.value = jogador1 + " ganhou!"
      document.getElementById("botao5").disabled = true
      document.getElementById("botao2").disabled = true
      document.getElementById("botao3").disabled = true
      document.getElementById("botao6").disabled = true
      document.getElementById("botao8").disabled = true
      document.getElementById("botao9").disabled = true
      vitoria = 1
      document.getElementById("botao1").classList.add("success")
      document.getElementById("botao4").classList.add("success")
      document.getElementById("botao7").classList.add("success")
   }
   else if (botao2 == "X" && botao5 == "X" && botao8 == "X") {
      jogadorAtual.value = jogador1 + " ganhou!"
      document.getElementById("botao1").disabled = true
      document.getElementById("botao4").disabled = true
      document.getElementById("botao3").disabled = true
      document.getElementById("botao6").disabled = true
      document.getElementById("botao7").disabled = true
      document.getElementById("botao9").disabled = true
      vitoria = 1
      document.getElementById("botao2").classList.add("success")
      document.getElementById("botao5").classList.add("success")
      document.getElementById("botao8").classList.add("success")
   }
   else if (botao3 == "X" && botao6 == "X" && botao9 == "X") {
      jogadorAtual.value = jogador1 + " ganhou!"
      document.getElementById("botao1").disabled = true
      document.getElementById("botao2").disabled = true
      document.getElementById("botao4").disabled = true
      document.getElementById("botao7").disabled = true
      document.getElementById("botao8").disabled = true
      document.getElementById("botao5").disabled = true
      vitoria = 1
      document.getElementById("botao3").classList.add("success")
      document.getElementById("botao6").classList.add("success")
      document.getElementById("botao9").classList.add("success")
   }

   //Verificar se jogador2(O) ganhou

   if (botao1 == "O" && botao2 == "O" && botao3 == "O") {
      jogadorAtual.value = jogador2 + " ganhou!"
      document.getElementById("botao4").disabled = true
      document.getElementById("botao5").disabled = true
      document.getElementById("botao6").disabled = true
      document.getElementById("botao7").disabled = true
      document.getElementById("botao8").disabled = true
      document.getElementById("botao9").disabled = true
      vitoria = 1
      document.getElementById("botao1").classList.add("success")
      document.getElementById("botao2").classList.add("success")
      document.getElementById("botao3").classList.add("success")
   }
   else if (botao4 == "O" && botao5 == "O" && botao6 == "O") {
      jogadorAtual.value = jogador2 + " ganhou!"
      document.getElementById("botao1").disabled = true
      document.getElementById("botao2").disabled = true
      document.getElementById("botao3").disabled = true
      document.getElementById("botao7").disabled = true
      document.getElementById("botao8").disabled = true
      document.getElementById("botao9").disabled = true
      vitoria = 1
      document.getElementById("botao4").classList.add("success")
      document.getElementById("botao5").classList.add("success")
      document.getElementById("botao6").classList.add("success")
   }
   else if (botao7 == "O" && botao8 == "O" && botao9 == "O") {
      jogadorAtual.value = jogador2 + " ganhou!"
      document.getElementById("botao1").disabled = true
      document.getElementById("botao2").disabled = true
      document.getElementById("botao3").disabled = true
      document.getElementById("botao4").disabled = true
      document.getElementById("botao5").disabled = true
      document.getElementById("botao6").disabled = true
      vitoria = 1
      document.getElementById("botao7").classList.add("success")
      document.getElementById("botao8").classList.add("success")
      document.getElementById("botao9").classList.add("success")
   }
   else if (botao1 == "O" && botao5 == "O" && botao9 == "O") {
      jogadorAtual.value = jogador2 + " ganhou!"
      document.getElementById("botao4").disabled = true
      document.getElementById("botao2").disabled = true
      document.getElementById("botao3").disabled = true
      document.getElementById("botao7").disabled = true
      document.getElementById("botao8").disabled = true
      document.getElementById("botao6").disabled = true
      vitoria = 1
      document.getElementById("botao1").classList.add("success")
      document.getElementById("botao5").classList.add("success")
      document.getElementById("botao9").classList.add("success")
   }
   else if (botao3 == "O" && botao5 == "O" && botao7 == "O") {
      jogadorAtual.value = jogador2 + " ganhou!"
      document.getElementById("botao1").disabled = true
      document.getElementById("botao2").disabled = true
      document.getElementById("botao4").disabled = true
      document.getElementById("botao6").disabled = true
      document.getElementById("botao8").disabled = true
      document.getElementById("botao9").disabled = true
      vitoria = 1
      document.getElementById("botao3").classList.add("success")
      document.getElementById("botao5").classList.add("success")
      document.getElementById("botao7").classList.add("success")
   }
   else if (botao1 == "O" && botao4 == "O" && botao7 == "O") {
      jogadorAtual.value = jogador2 + " ganhou!"
      document.getElementById("botao5").disabled = true
      document.getElementById("botao2").disabled = true
      document.getElementById("botao3").disabled = true
      document.getElementById("botao6").disabled = true
      document.getElementById("botao8").disabled = true
      document.getElementById("botao9").disabled = true
      vitoria = 1
      document.getElementById("botao1").classList.add("success")
      document.getElementById("botao4").classList.add("success")
      document.getElementById("botao7").classList.add("success")
   }
   else if (botao2 == "O" && botao5 == "O" && botao8 == "O") {
      jogadorAtual.value = jogador2 + " ganhou!"
      document.getElementById("botao1").disabled = true
      document.getElementById("botao4").disabled = true
      document.getElementById("botao3").disabled = true
      document.getElementById("botao6").disabled = true
      document.getElementById("botao7").disabled = true
      document.getElementById("botao9").disabled = true
      vitoria = 1
      document.getElementById("botao2").classList.add("success")
      document.getElementById("botao5").classList.add("success")
      document.getElementById("botao8").classList.add("success")
   }
   else if (botao3 == "O" && botao6 == "O" && botao9 == "O") {
      jogadorAtual.value = jogador2 + " ganhou!"
      document.getElementById("botao1").disabled = true
      document.getElementById("botao2").disabled = true
      document.getElementById("botao4").disabled = true
      document.getElementById("botao7").disabled = true
      document.getElementById("botao8").disabled = true
      document.getElementById("botao5").disabled = true
      vitoria = 1
      document.getElementById("botao3").classList.add("success")
      document.getElementById("botao6").classList.add("success")
      document.getElementById("botao9").classList.add("success")
   }
   //Checar se houve empate
   else if ((botao1 == "O" || botao1 == "X") && (botao3 == "O" || botao3 == "X") && (botao2 == "O" || botao2 == "X") && (botao4 == "O" || botao4 == "X") && (botao5 == "O" || botao5 == "X") && (botao6 == "O" || botao6 == "X") && (botao7 == "O" || botao7 == "X") && (botao8 == "O" || botao8 == "X") && (botao9 == "O" || botao9 == "X") && vitoria == 0){
      jogadorAtual.value = "Partida empatou!"
      inputsBoard.forEach(function (element){
         element.classList.add("empate")
      })
   }
   //Avisar de quem é a vez
   else  if(vitoria == 0){
      if(turno == 1){
         
         jogadorAtual.value = "Vez de " + jogador1
      }
      else{
         
         jogadorAtual.value = "Vez de " + jogador2
      }
   }
}
//Função para resetar  o jogo
function resetJogo(){
   inputsBoard.forEach(function (element){
      element.disabled = true
      element.value = ""
      element.classList.remove("empate", "success")
   })
   document.getElementById("jogador1").value = ""
   document.getElementById("jogador2").value = ""
   var p = document.getElementById("informacoesjogador")
   p.parentNode.removeChild(p)
   document.getElementById("jogadorAtual").value = ""
}

//Funções para avaliar de quem é a vez e  marcar com X ou O
function botao1(){
   if (turno == 1){
      document.getElementById("botao1").value = "X"
      document.getElementById("botao1").disabled = true
      turno = 0
   }
   else{
      document.getElementById("botao1").value = "O"
      document.getElementById("botao1").disabled = true
      turno = 1
   }
}
function botao2(){
   if (turno == 1){
      document.getElementById("botao2").value = "X"
      document.getElementById("botao2").disabled = true
      turno = 0
   }
   else{
      document.getElementById("botao2").value = "O"
      document.getElementById("botao2").disabled = true
      turno = 1
   }
}
function botao3(){
   if (turno == 1){
      document.getElementById("botao3").value = "X"
      document.getElementById("botao3").disabled = true
      turno = 0
   }
   else{
      document.getElementById("botao3").value = "O"
      document.getElementById("botao3").disabled = true
      turno = 1
   }
}
function botao4(){
   if (turno == 1){
      document.getElementById("botao4").value = "X"
      document.getElementById("botao4").disabled = true
      turno = 0
   }
   else{
      document.getElementById("botao4").value = "O"
      document.getElementById("botao4").disabled = true
      turno = 1
   }
}
function botao5(){
   if (turno == 1){
      document.getElementById("botao5").value = "X"
      document.getElementById("botao5").disabled = true
      turno = 0
   }
   else{
      document.getElementById("botao5").value = "O"
      document.getElementById("botao5").disabled = true
      turno = 1
   }
}
function botao6(){
   if (turno == 1){
      document.getElementById("botao6").value = "X"
      document.getElementById("botao6").disabled = true
      turno = 0
   }
   else{
      document.getElementById("botao6").value = "O"
      document.getElementById("botao6").disabled = true
      turno = 1
   }
}
function botao7(){
   if (turno == 1){
      document.getElementById("botao7").value = "X"
      document.getElementById("botao7").disabled = true
      turno = 0
   }
   else{
      document.getElementById("botao7").value = "O"
      document.getElementById("botao7").disabled = true
      turno = 1
   }
}
function botao8(){
   if (turno == 1){
      document.getElementById("botao8").value = "X"
      document.getElementById("botao8").disabled = true
      turno = 0
   }
   else{
      document.getElementById("botao8").value = "O"
      document.getElementById("botao8").disabled = true
      turno = 1
   }
}
function botao9(){
   if (turno == 1){
      document.getElementById("botao9").value = "X"
      document.getElementById("botao9").disabled = true
      turno = 0
   }
   else{
      document.getElementById("botao9").value = "O"
      document.getElementById("botao9").disabled = true
      turno = 1
   }
}
