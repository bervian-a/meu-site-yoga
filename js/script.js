// futuras interações
/*Galeria */
/*rolagem infinita */
window.onload = function() {
    var galleryItem = document.querySelector('.gallery-item');
    var images = galleryItem.querySelectorAll('img'); // Selecione todas as imagens na galeria

    // Duplicar as imagens
    images.forEach(function(image) {
        var clone = image.cloneNode(true); // Cria uma cópia da imagem
        galleryItem.appendChild(clone); // Adiciona a cópia ao final da galeria
    });
};

// AVISO PARA EM BREVE
document.addEventListener('DOMContentLoaded', () => {
    const botoes = ['#videoaulas', '#blog'];

    botoes.forEach(seletor => {
        const botao = document.querySelector(seletor);
        if (botao) {
            botao.addEventListener('click', (event) => {
                event.preventDefault();
                mostrarAvisoEmBreve();
            });
        }
    });

    function mostrarAvisoEmBreve() {
        // Impede criar aviso duplicado
        if (document.querySelector('.avisoembreve')) return;

        const aviso = document.createElement('div');
        aviso.innerText = "🚧 Em breve! Estamos preparando algo especial pra você!";
        aviso.classList.add('avisoembreve');
        document.body.appendChild(aviso);

        setTimeout(() => {
            aviso.classList.add('aparecer');
        }, 10);

        setTimeout(() => {
            aviso.classList.remove('aparecer');
            setTimeout(() => aviso.remove(), 500);
        }, 2500);
    }
});



/*Botão para ir para pagina de contato*/


/*toggle para acesso ao explorar*/
// Toggle para abrir e fechar o menu
const menuToggle = document.querySelector('#menuToggle'); // Botão de abrir o menu
const sideMenu = document.querySelector('#sideMenu'); // Menu lateral

if (menuToggle && sideMenu) {
    menuToggle.addEventListener('click', () => {
        // Alterna a classe 'open' que altera a altura do menu
        sideMenu.classList.toggle('open');
    });
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('aparecer');
      }
    });
  });
  
  document.querySelectorAll('.instrutor-text, .instrutor-img, .sobre-text, .sobre-img, .gallery-img, .depoimento-img').forEach(el => {
    el.classList.add('escondido');
    observer.observe(el);
  });
  

//AVISO MENSAGEM EMAIL ENVIADA
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('formEnviado') === 'true') {
      localStorage.removeItem('formEnviado');

      const aviso = document.createElement('div');
      aviso.classList.add('avisoenviado');
      aviso.innerText = "✅ Sua mensagem foi enviada com sucesso!";
      document.body.appendChild(aviso);

      setTimeout(() => {
        aviso.classList.add('visivel');
      }, 10);

      setTimeout(() => {
        aviso.classList.remove('visivel');
        setTimeout(() => aviso.remove(), 1000);
      }, 3000);
    }
  });

