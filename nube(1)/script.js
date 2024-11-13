// scripts.js
// Adiciona uma animação aos elementos na rolagem da página
window.addEventListener('scroll', () => {
    // Seleciona todos os elementos com a classe 'animate-on-scroll'
    let elements = document.querySelectorAll('.animate-on-scroll');

    // Itera sobre cada elemento encontrado
    elements.forEach(element => {
        // Obtém a posição superior do elemento em relação ao viewport
        let position = element.getBoundingClientRect().top;

        // Verifica se o elemento está dentro da janela de visualização
        if(position < window.innerHeight) {
            // Adiciona a classe 'animate' para ativar a animação
            element.classList.add('animate');
        }
    });
});

// Adicionando uma animação fade-in
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos com a classe 'fade-in'
    let fadeInElements = document.querySelectorAll('.fade-in');

    // Itera sobre cada elemento encontrado
    fadeInElements.forEach(element => {
        // Adiciona a classe 'fade-in-effect' para iniciar a animação de fade-in
        element.classList.add('fade-in-effect');
    });
});
