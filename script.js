// Espera até que o conteúdo da página seja carregado
window.addEventListener('DOMContentLoaded', () => {
    // Obtém referências para os elementos HTML relevantes
    const submitButton = document.getElementById('submit-button');
    const numbersInput = document.getElementById('numbers-input');
    const result = document.getElementById('result');

    // Adiciona um ouvinte de evento para o clique no botão "Calcular"
    submitButton.addEventListener('click', () => {
        // Obtém a string de entrada do usuário
        const numbersString = numbersInput.value;
        // Divide a string em um array de números
        const numbersArray = numbersString.split(',');

        // Utiliza o array.map() para converter cada elemento em um número inteiro
        const resultArray = numbersArray.map((number) => {
            return parseInt(number);
        });

        // Utiliza a função reduce() para somar todos os números do array resultante
        const sum = resultArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

        // Exibe o resultado na div 'result' no HTML
        result.textContent = `A soma dos números é: ${sum}`;
    });
});
