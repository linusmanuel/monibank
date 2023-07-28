const botaoIniciarCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const botaoTirarFoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');
const botaoRepetirFoto = document.querySelector('[data-repetir-foto]');
const botaoEnviarFoto = document.querySelector('[data-enviar]');
let imagemURL = '';

botaoIniciarCamera.addEventListener('click', () => {
	tirarFoto();
	botaoIniciarCamera.style.display = 'none';
	campoCamera.style.display = 'block';
});

botaoTirarFoto.addEventListener('click', (e) => {
	tirarFoto();
	campoCamera.style.display = 'none';
	mensagem.style.display = 'block';
	botaoRepetirFoto.style.display = 'block';
});

botaoRepetirFoto.addEventListener('click', (e) => {
	tirarFoto();
	campoCamera.style.display = 'block';
	mensagem.style.display = 'none';
	botaoRepetirFoto.style.display = 'none';
});

async function tirarFoto() {
	const iniciarVideo = await navigator.mediaDevices.getUserMedia({
		video: true,
		audio: false,
	});

	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
	imagemURL = canvas.toDataURL('image/jpeg');
	video.srcObject = iniciarVideo;
}

botaoEnviarFoto.addEventListener('click', () => {
	const receberDadosExistentes = localStorage.getItem('cadastro');
	const converteRetorno = JSON.parse(receberDadosExistentes);

	converteRetorno.imagem = imagemURL;
	localStorage.setItem('cadastro', JSON.stringify(converteRetorno));
	window.location.href = '../pages/abrir-conta-form-3.html';
	console.log(converteRetorno);
});
