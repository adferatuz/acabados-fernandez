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

        divTarjeta.appendChild(imgTarjeta);        

        divTarjeta.addEventListener('click', () => {
            modalBody.innerHTML = `
              <img src="${targeta.rutaImg}" alt="${targeta.alt}" class="${targeta.clase[2]}">
              <h2 class= "${targeta.clase[4]}">${targeta.titulo}</h2>
              <p class="${targeta.clase[5]}">${targeta.descripcion}</p>
              <p class="${targeta.clase[7]}">${targeta.contacto}</p>
            `;
            modal.classList.add('show');
            document.querySelector('.modal-content').classList.add('show');
          });

        pagInicio.appendChild(divTarjeta)
    })    

}