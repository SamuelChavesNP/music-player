/* ---- Objeto com todos os dados ---- */
const musicas = [
  {titulo: 'Here Comes The Sun', artista: 'The Beatles', src: 'musics/here-comes-the-sun.mp3', cover: 'img/a.jpg'},
  {titulo: 'Billionarie', artista: 'Bruno Mars ft Travie Mc Coy', src: 'musics/Billionaire.mp3', cover: 'img/runaway.jpg'},
  {titulo: 'Levitating', artista: 'Dua Lipa', src: 'musics/levitating.mp3', cover: 'img/levitating.jpg'},
  {titulo: 'Garota de Ipanema', artista: 'Tom Jobim', src: 'musics/Garota De Ipanema.mp3', cover: 'img/garota-de-ipanema.jpg'},
  {titulo: "Can't Take My Eyes Off You", artista: 'Frank Sinatra', src: 'musics/i-love-you-baby.mp3', cover: 'img/1639840327_listen.jpg'},
  {titulo: 'The House of Rising Sun', artista: 'The Animals', src: 'musics/The-Animals-House-of-the-Rising-Sun-.mp3', cover: 'img/THE-ANIMALS.jpg'},
  {titulo: 'I Gotta Felling', artista: 'The Black Eyed Peas', src: 'musics/i-gotta-felling.mp3', cover: 'img/i-gotta-fellingjpg.jpg'},
  {titulo: 'Stereo Hearts', artista: 'Gym Class Heroes', src: 'musics/StereoHearts.mp3', cover: 'img/stereohearts.jpg'},
  {titulo: 'All I Want For Christmas Is You', artista: 'Mariah Carey', src:'musics/Mariah Carey - All I Want For Christmas Is You.mp3', cover: 'img/Mariahcareymerrychristmas.jpg'},
  {titulo: 'New York New York!', artista: 'Frank Sinatra', src:'musics/NewYork.mp3', cover: 'img/newyork.jpg'}

]


/* ---- Selecionando os elementos ---- */
const musica = document.querySelector('audio');
const barra = document.querySelector('progress');
const botaoPlay = document.querySelector('.play');
const botaoPause = document.querySelector('.pause');
const tempoDecorrido = document.querySelector('.inicio');
const tempoTotal = document.querySelector('.fim');
const img = document.querySelector('img');
const nomeMusica = document.querySelector('.descricao h2');
const nomeArtista = document.querySelector('i');
const botaoProximo = document.querySelector('.fa-forward');
const botaoAnterior = document.querySelector('.fa-backward');
let i = 0;


const trocarMusica = (index) => {
  musica.setAttribute('src', musicas[index].src);
  musica.addEventListener('loadeddata', () => {
    nomeMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    img.src = musicas[index].cover;
    tempoTotal.innerText = formataDuracao(Math.floor(musica.duration));
  })
}
trocarMusica(i);

const darPlay = () => {
  musica.play();
  botaoPlay.style.display = 'none';
  botaoPause.style.display = 'block';
}

const darPause = () => {
  musica.pause();
  botaoPlay.style.display = 'block';
  botaoPause.style.display = 'none'
}

const atualizarBarra = () => {
  barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'; // O progresso da barra será igual a: duração atual da música divido pela duração total x 100
  tempoDecorrido.textContent = formataDuracao(Math.floor(musica.currentTime));
}

const formataDuracao = (segundos) => {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if(campoSegundos < 10) {
    campoSegundos = '0' + campoSegundos;
  } 
  return campoMinutos+':'+campoSegundos;
}


botaoPlay .addEventListener('click', darPlay);
botaoPause.addEventListener('click', darPause);
musica.addEventListener('timeupdate', atualizarBarra);
botaoAnterior.addEventListener('click', () => {
  i--;
  if(i < 0) i = 9;
  trocarMusica(i);
});
botaoProximo.addEventListener('click', () => {
  i++;
  if(i > 9) i = 0;
  trocarMusica(i);
});

