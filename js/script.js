import isCPF from './valida-cpf.js';

const $ = document.querySelectorAll.bind(document);

const camposDoFormulario = $('[required]');

camposDoFormulario.forEach((campo) => {
	campo.addEventListener('blur', () => verificaCampo(campo));
});

function verificaCampo(campo) {
	if (campo.name == 'cpf' && campo.value.length >= 11) {
		isCPF(campo);
	}
}
