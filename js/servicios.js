import tarjeta from "./tarjeta.js";

const closeModal = document.querySelector('.close');

export default function servicios (){
    const pagInicio = document.querySelector('#servicios');    
    tarjeta(pagInicio);

    // Modal close event
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        document.querySelector('.modal-content').classList.remove('show');
      });

      window.addEventListener('click', (event) => {
        if (event.target === modal) {
          modal.classList.remove('show');
          document.querySelector('.modal-content').classList.remove('show');
        }
      });
    
}