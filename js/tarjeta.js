import { targetas } from "./utilidades.js";

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');


export default function tarjeta(pagInicio){
    targetas.forEach((targeta) =>{
        let divTarjeta = document.createElement('div');
        divTarjeta.className = targeta.clase[0];

        let imgTarjeta = document.createElement('img');
        imgTarjeta.src = targeta.rutaImg;
        imgTarjeta.alt = targeta.alt;
        imgTarjeta.className = targeta.clase[2];

        let divContenidoTarjeta = document.createElement('div');

        divContenidoTarjeta.classList.add(targeta.clase[3])

        let tituloTarjeta = document.createElement('h2');
        tituloTarjeta.className = targeta.clase[4]
        tituloTarjeta.textContent = targeta.titulo;

        let parrafoTarjeta = document.createElement('p');
        parrafoTarjeta.className = targeta.clase[5]
        parrafoTarjeta.textContent = targeta.descripcion.slice(0, 50) + '...';

        let divTarjetaContacto = document.createElement('div');
        divTarjetaContacto.className = targeta.clase[6];

        let parrafoContacto = document.createElement('p');
        parrafoContacto.className = targeta.clase[7];
        parrafoContacto.textContent = targeta.contacto;

        divTarjetaContacto.appendChild(parrafoContacto);

        divContenidoTarjeta.appendChild(tituloTarjeta);
        divContenidoTarjeta.appendChild(parrafoTarjeta);
        divContenidoTarjeta.appendChild(divTarjetaContacto);

        divTarjeta.appendChild(imgTarjeta);
        divTarjeta.appendChild(divContenidoTarjeta);

        divTarjeta.addEventListener('click', () => {
            modalBody.innerHTML = `
              <img src="${targeta.rutaImg}" alt="${targeta.alt}" class="${targeta.clase[2]}">
              <h2>${targeta.titulo}</h2>
              <p>${targeta.descripcion}</p>
              <p>${targeta.contacto}</p>
            `;
            modal.classList.add('show');
            document.querySelector('.modal-content').classList.add('show');
          });

        pagInicio.appendChild(divTarjeta)
    })    

}