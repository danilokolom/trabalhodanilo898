const numeroCorreto = Math.floor(Math.random() * 10) + 1;

function adivinharNumero() {
    let tentativa;
    do {
        tentativa = parseInt(prompt("Tente adivinhar um número entre 1 e 10:"), 10);
        
        if (tentativa === numeroCorreto) {
            alert("Parabéns! Você acertou!");
        } else {
            alert("Tente novamente.");
        }
    } while (tentativa !== numeroCorreto);
}
