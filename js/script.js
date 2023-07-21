import isCPF from './valida-cpf.js';
import ehMaiorDeIdade from './valida-idade.js';
const $ = document.querySelectorAll.bind(document);

const camposDoFormulario = $('[required]');

camposDoFormulario.forEach((campo) => {
	campo.addEventListener('blur', () => verificaCampo(campo));
});

function verificaCampo(campo) {
	if (campo.name == 'cpf' && campo.value.length >= 11) {
		isCPF(campo);
		console.log(campo.validaty);
	}
	if (campo.name == 'aniversario' && campo.value != '') {
		ehMaiorDeIdade(campo);
	}
	console.log(campo.validity);
}
