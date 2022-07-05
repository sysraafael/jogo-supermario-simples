// Função para mutar a música tema.
function mute() {
    music.muted = true;
    BTN_MUTE.style.display = 'block';
    BTN_UP.style.display = 'none';
  }
  // Função para remover o mute da música.
  function up() {
    music.muted = false;
    BTN_MUTE.style.display = 'none';
    BTN_UP.style.display = 'block';
  }
  
  /* Música Tema */
  let music = document.getElementById("musicTheme");
  
  // Tocar a música ao interagir com o corpo do site.
  document.body.addEventListener("mousemove", function () {
    music.play();
  });

const mario = document.querySelector('.mario');

const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=> {

        mario.classList.remove('jump');

    }, 500)

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    console.log(marioPosition)

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`;

        pipe.style.animation = 'none'
        pipe.style.left = `${marioPosition}px`;

        mario.src = './assets/imagem/game-over.png';
        mario.style.width = '85px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);
