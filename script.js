// Jogo da Pedra, Papel e Tesoura
function jogar() { 
    let idade = prompt("Ei, novato! Quantos anos você tem?");
    
    if (idade === null) {
        alert("Fica pra próxima então... ou tá com medo? Hehe!");
        return;
    }
    
    idade = idade.trim();
    
    if (idade === "" || parseInt(idade) > 100) {
        alert("Acha que tá tentando me enganar?! Diz sua idade verdadeira!");
        return;
    }
    
    idade = parseInt(idade);
    
    if (isNaN(idade)) {
        alert("Isso não parece um número... Tá brincando comigo?");
        return;
    }
    
    if (idade < 18) {
        alert("Haha! Você é muito novinho pra encarar a Jinx. Volta quando crescer!");
        return;
    }
    
    let escolhas = ["Pedra", "Papel", "Tesoura"];
    let jogador = prompt("Escolha: Pedra, Papel ou Tesoura? (Se tiver coragem!)").trim().toLowerCase();
    
    if (!["pedra", "papel", "tesoura"].includes(jogador)) {
        alert("Ahhh, escolha errada! Assim não vale, tente de novo!");
        return;
    }
    
    let escolhaMaquina = escolhas[Math.floor(Math.random() * 3)].toLowerCase();
    alert("Jinx escolheu: " + escolhaMaquina.charAt(0).toUpperCase() + escolhaMaquina.slice(1) + "! Haha!");
    
    if (jogador === escolhaMaquina) {
        alert("EMPATE?! Meh, que sem graça!");
    } else if (
        (jogador === "pedra" && escolhaMaquina === "tesoura") ||
        (jogador === "papel" && escolhaMaquina === "pedra") ||
        (jogador === "tesoura" && escolhaMaquina === "papel")
    ) {
        alert("O QUÊ?! Você ganhou?! Isso não acaba aqui!");
    } else {
        alert("HAHAHA! Eu GANHEI! Vai chorar ou vai tentar de novo?");
    }
}
