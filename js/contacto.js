import { formContacto } from "./utilidades.js";

const divContacto = document.querySelector('#contacto');

export default function contacto(){
    formContacto.forEach((form) => {
        let divContenedorForm = document.createElement('div');
        divContenedorForm.classList.add(form.clase[0]);

        let tituloForm = document.createElement('h2');
        tituloForm.classList.add(form.clase[1]);
        tituloForm.textContent = form.titulo;

        let divForm = document.createElement('div');
        divForm.classList.add(form.clase[2]);
        
        let labelTelefono = document.createElement('label');
        labelTelefono.classList.add(form.clase[3]);
        labelTelefono.textContent = 'Numero de celular:';

        let inputTelefono = document.createElement('input');
        inputTelefono.classList.add(form.clase[4]);
        inputTelefono.value = form.celular;
        inputTelefono.readOnly = true;
        
        let labelEmail = document.createElement('label');
        labelEmail.classList.add(form.clase[3]);
        labelEmail.textContent = 'Email:';

        let inputEmail = document.createElement('input');
        inputEmail.classList.add(form.clase[4]);
        inputEmail.value = form.email;
        inputEmail.readOnly = true;

        divForm.appendChild(labelTelefono);
        divForm.appendChild(inputTelefono);
        divForm.appendChild(labelEmail);
        divForm.appendChild(inputEmail);

        divContenedorForm.appendChild(tituloForm);
        divContenedorForm.appendChild(divForm);

        divContacto.appendChild(divContenedorForm);
    })  

}