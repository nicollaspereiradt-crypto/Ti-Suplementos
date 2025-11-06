// ===== SLIDER AUTOMÁTICO (DIREITA → ESQUERDA) =====

const list = document.querySelector('.list');
const slides = document.querySelectorAll('.item');
const totalSlides = slides.length;

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const intervalTime = 2000; // tempo entre trocas (ms)
let autoSlide; // controle do intervalo

// Função para exibir o slide atual
function showSlide(index) {
    // Move o container para o slide correto
    list.style.transform = `translateX(-${index * 100}%)`;
}

// Próximo slide (da direita para a esquerda)
function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

// Slide anterior (da esquerda para a direita)
function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    showSlide(currentIndex);
}

// Botões
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

// Troca automática
function startAutoSlide() {
    autoSlide = setInterval(nextSlide, intervalTime);
}

// Reinicia o timer quando o usuário clicar
function resetInterval() {
    clearInterval(autoSlide);
    startAutoSlide();
}

// Inicia o slider
showSlide(currentIndex);
startAutoSlide();
