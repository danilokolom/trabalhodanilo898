function imprimirNumeros() {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += i + ' ';
    }
    alert(resultado.trim());
}

// Execute a função
imprimirNumeros();