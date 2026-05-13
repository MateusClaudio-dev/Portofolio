// Usamos querySelector para pegar o elemento diretamente
let menu = document.querySelector('.cabecalho__mobile');
let open = document.getElementById('open__menu');
let exit = document.getElementById('exit__menu');

open.addEventListener('click', function() {
    menu.style.display = 'flex'
    open.textHTML = 'ola'
})

exit.addEventListener('click', function() {
    // Agora o estilo será aplicado corretamente
    menu.style.display = 'none';
    
});

