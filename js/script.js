const $ = document.querySelectorAll.bind(document);

const camposDoFormulario = $('[required]');

camposDoFormulario.forEach((campo) => {
	campo.addEventListener('blur', () => verificaCampo(campo));
	console.log(campo);
});

function verificaCampo(campo) {
	return;
}
