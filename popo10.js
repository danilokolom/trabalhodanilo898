const palavras = ["maçã", "banana", "maçã", "laranja", "maçã", "abacaxi"]; // Vetor de exemplo

function contarPalavra() {
    const palavra = document.getElementById('palavra').value.trim();
    const contagem = document.getElementById('contagem');

    if (!palavra) {
        contagem.textContent = "Por favor, insira uma palavra.";
        return;
    }

    const ocorrencias = palavras.filter(p => p === palavra).length;
    contagem.textContent = "A palavra '" + palavra + "' aparece " + ocorrencias + " vez(es).";
}
