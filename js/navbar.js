const contenedorNavbar = document.querySelector('.barra-navegacion');

export default function navbar(listaUl,listaEnlaces){    
    
    listaEnlaces.forEach((enlaceObj)=> {
        let listaItem = document.createElement('li');
        
        let enlace = document.createElement('a');
        enlace.href = enlaceObj.href;
        enlace.setAttribute('data-view', enlaceObj.dataView);
        enlace.textContent = enlaceObj.text;

        listaItem.appendChild(enlace);

        listaUl.appendChild(listaItem);
    });

    contenedorNavbar.appendChild(listaUl);
}

