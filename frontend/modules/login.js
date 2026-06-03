import validator from 'validator';

export default class Login {
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
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;

        const errors = document.querySelectorAll('.error-text')
            .forEach(error => error.remove());
        
        if(!validator.isEmail(emailInput.value)) {
            this.createError(emailInput, 'E-mail inválido.');
            error = true;
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            this.createError(passwordInput, 'Senha inválida');
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