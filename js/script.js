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
/*IMAGENS ESTAO RODANDO E LEVANDO A PAGINA PRA DIREITA */

/*Botão para ir para pagina de contato*/
