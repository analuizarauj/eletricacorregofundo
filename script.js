function moveSlide(index) {
    let totalSlides = document.querySelectorAll('.slide').length;
    let percentage = 100 / totalSlides; // Divide corretamente o espaço de cada slide
    document.querySelector('.carousel').style.transform = `translateX(-${index * percentage}%)`;
}
// Função para encolher o cabeçalho, logo e botões ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo-container img');
    const buttons = document.querySelectorAll('.btn');
    
    if (window.scrollY > 50) {
      header.classList.add('shrink');  // Aplica a classe 'shrink' ao cabeçalho
      logo.style.maxWidth = '120px';   // Logo menor
      buttons.forEach(button => {
        button.style.fontSize = '14px'; // Fonte dos botões menor
        button.style.padding = '8px 15px'; // Padding dos botões menor
      });
    } else {
      header.classList.remove('shrink'); // Remove a classe 'shrink' quando a rolagem é pequena
      logo.style.maxWidth = '150px';    // Logo maior
      buttons.forEach(button => {
        button.style.fontSize = '16px';  // Fonte normal nos botões
        button.style.padding = '10px 20px'; // Padding normal nos botões
      });
    }
  });
  
