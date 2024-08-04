import { listaEnlaces } from "./utilidades.js";
import navbar from './navbar.js'
import servicios from "./servicios.js";
import inicio from "./inicio.js";
import contacto from "./contacto.js";

const listaUl = document.querySelector('.lista-enlaces');

function main (){
    navbar(listaUl, listaEnlaces)
    servicios()
    inicio()
    contacto()

    document.addEventListener('DOMContentLoaded', function(){
        const links = document.querySelectorAll('.lista-enlaces li a');        
        const vistas = document.querySelectorAll('.vista');

        document.getElementById('servicios').style.display = 'none'
        document.getElementById('contacto').style.display = 'none'
    
        links.forEach(link => {
            link.addEventListener('click', function(e){
                e.preventDefault();
    
                const vistaId = this.getAttribute('data-view');
    
                vistas.forEach(vista => {
                    vista.style.display = 'none';
                });
                document.getElementById(vistaId).style.display = 'grid';
            })
        })
    
        document.getElementById('inicio').style.display = 'grid'
    })
}

main()
