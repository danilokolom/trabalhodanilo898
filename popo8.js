const vetor = [];

function adicionarNumero() {
    let numero;
    do {
        numero = parseInt(prompt("Digite um número (ou 0 para finalizar):"), 10);
        
        if (!isNaN(numero)) {
            if (numero === 0) {
                if (vetor.length === 0) {
                    alert("Nenhum número inserido.");
                } else {
                    const media = encontrarMedia(vetor);
                    alert(`A média é ${media}`);
                }
                break;
            } else {
                vetor.push(numero);
            }
        } else {
            alert("Por favor, insira um número válido.");
        }
    } while (numero !== 0);
}

function encontrarMedia(vetor) {
    if (vetor.length === 0) {
        return 0;
    }
    const soma = vetor.reduce((acc, val) => acc + val, 0);
    return soma / vetor.length;
}

// Execute a função
adicionarNumero();