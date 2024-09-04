function classificarIdade() {
    const idade = parseInt(prompt("Digite sua idade:"), 10);
    
    if (isNaN(idade) || idade < 0) {
        alert("Idade inválida.");
    } else if (idade <= 12) {
        alert("Você é uma criança.");
    } else if (idade <= 17) {
        alert("Você é um adolescente.");
    } else if (idade <= 64) {
        alert("Você é um adulto.");
    } else {
        alert("Você é um idoso.");
    }
}

// Execute a função
classificarIdade();