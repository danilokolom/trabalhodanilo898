// Vetor de exemplo
const vetor = [3, 7, 12, 18, 25, 30];

/**
 * Filtra os números do vetor que são maiores que o valor especificado.
 */
function filtrarNumeros() {
    // Obtém o valor do input e valida
    const valorInput = document.getElementById('valor').value;
    const valor = parseFloat(valorInput);
    const resultado = document.getElementById('resultado');

    if (isNaN(valor) || valor < 0) {
        resultado.textContent = "Por favor, insira um número válido maior ou igual a 0.";
        return;
    }

    // Filtra os números maiores que o valor fornecido
    const numerosFiltrados = vetor.filter(num => num > valor);

    // Exibe o resultado
    if (numerosFiltrados.length === 0) {
        resultado.textContent = `Nenhum número é maior que ${valor}.`;
    } else {
        resultado.textContent = `Números maiores que ${valor}: ${numerosFiltrados.join(', ')}.`;
    }
}