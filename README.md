# jogo-da-velha
Jogo da velha utilizando Html, css e Javascript.

O Html foi utilizado para construir a estrutura do jogo inteiro, contendo todos os botões e inputs.

O Css foi utilizado para estilizar toda a página, montando o board do jogo com os botões, assim como tendo estilizações de cores que foram utilizadas com a integração do Javascript

O Javascript foi utilizado para fazer com que a dinâmica do jogo funcionasse, todos os botões do board começam desativados, ao clicar no botão "começar a jogar" os botões são ativados e aparece uma mensagem abaixo do botão, informando quem será o X e quem será o O. No input "jogador atual" é mostrado de quem é a vez, ao clicar no botão do board escolhido, este botão será preenchido com X ou O dependendo de quem era a vez e será desativado para que não seja mais possível utilizar o mesmo botão, a cada rodada que um botão é apertado, através do javascript é feita uma conferencia para analisar se há algum ganhador, caso contrário passará a vez para a próxima pessoa e o jogo seguirá até alguem ganhar ou o jogo terminar empatado. Caso alguem ganhe, a linha ou diagonal vitoriosa ganhará uma borda verde através da adição de uma classe estilizada no Css e todos os botões restantes do board serão desativados, caso o jogo termine em empate, todos os botões do board ganharão uma borda vermelha, para reiniciar o jogo, baste apertar no botão "Resetar o jogo" que atualizará a página, fazendo com que todos os botões do board sejam limpos.
