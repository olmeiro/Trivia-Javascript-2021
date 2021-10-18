const btnsCategorias = document.querySelectorAll('.btn-category');

export function apagarBtnCategoria(categoria){
    console.log("botonesCategorias: ",btnsCategorias);
    console.log("categoria que llega: ", categoria)

    btnsCategorias.forEach( elem => {
            
        const numCategoria = elem.getAttribute('data-category');
        console.log(numCategoria);
        
        if(categoria === numCategoria){
            console.log("son iguales en apagarBtn", elem);
            elem.setAttribute('disabled', true);
        }
    });
}