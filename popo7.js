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
                    const maior = Math.max(...vetor);
                    const menor = Math.min(...vetor);
                    alert(`Maior número: ${maior}, Menor número: ${menor}`);
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
