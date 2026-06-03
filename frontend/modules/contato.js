import validator from 'validator';

export default class Contato {
    constructor(formClass) {
         this.form = document.querySelector(formClass);
    }
    
    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.valid(e);
        });
    }

    valid(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        const errors = document.querySelectorAll('.error-text')
            .forEach(error => error.remove());

        if(!nomeInput.value) {
            this.createError(nomeInput, 'Nome é um campo obrigatório.');
            error = true;
        }

        if(!emailInput.value && !telefoneInput.value) {
            this.createError(emailInput, 'Um dos campos de contato deve ser cadastrado: e-mail ou telefone.');
            this.createError(telefoneInput, 'Um dos campos de contato deve ser cadastrado: e-mail ou telefone.');
            error = true;
        }

        if(!validator.isEmail(emailInput.value)) {
            this.createError(emailInput, 'E-mail inválido.');
            error = true;
        }

        if(!error) el.submit();
    }

    createError(field, msg) {
        const nextElement = field.parentElement.nextElementSibling;

        if(nextElement && nextElement.classList.contains('error-text')) {
            return;
        }

        const div = document.createElement('div');
        div.classList.add('error-text', 'text-danger', 'small', 'mt-1');
        div.innerHTML = msg;

        field.parentElement.insertAdjacentElement('afterend', div);
    }
}