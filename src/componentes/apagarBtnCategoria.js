const btnsCategorias = document.querySelectorAll('.btn-category');

export function apagarBtnCategoria(categoria){

    btnsCategorias.forEach( elem => {
            
        const numCategoria = elem.getAttribute('data-category');
        
        if(categoria === numCategoria){
            elem.setAttribute('disabled', true);
        }
    });
}