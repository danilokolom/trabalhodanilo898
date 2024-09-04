let soma = 0;

function adicionarNumero() {
    let numero;
    do {
        numero = parseInt(prompt("Digite um número (ou 0 para finalizar):"), 10);
        
        if (!isNaN(numero)) {
            if (numero === 0) {
                alert("A soma total é " + soma);
            } else {
                soma += numero;
                alert("Número adicionado. Digite outro número ou 0 para finalizar.");
            }
        } else {
            alert("Por favor, insira um número válido.");
        }
    } while (numero !== 0);
}
