document.addEventListener('DOMContentLoaded', function() {
    // Adiciona o event listener ao botão
    document.getElementById('verificarBtn').addEventListener('click', function() {
        // Obtém o valor do input e converte para número
        var input = document.getElementById('numero').value;
        var numero = parseFloat(input);

        // Verifica se o número é positivo, negativo ou neutro
        var mensagem = "";
        if (isNaN(numero)) {
            mensagem = "Por favor, insira um número válido.";
        } else if (numero > 0) {
            mensagem = "O número é positivo.";
        } else if (numero < 0) {
            mensagem = "O número é negativo.";
        } else if (numero === 0) {
            mensagem = "O número é neutro.";
        }

        // Exibe a mensagem
        document.getElementById('resultado').innerText = mensagem;
    });
});
