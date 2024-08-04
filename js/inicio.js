import { imagenFondo } from "./utilidades.js";

const contenedorInicio = document.querySelector('#inicio');

export default function inicio(){
    imagenFondo.forEach(imagen => {
        let imagenPresentacion = document.createElement('img');
        imagenPresentacion.src = imagen.ruta;
        imagenPresentacion.alt = imagen.alt;
        imagenPresentacion.classList.add(imagen.clase); 
        
        contenedorInicio.appendChild(imagenPresentacion);
    });

    
}