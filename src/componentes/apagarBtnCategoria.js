const btnsCategorias = document.querySelectorAll(".btn-category");

function apagarBtnCategoria(categoria) {
  btnsCategorias.forEach((elem) => {
    const numCategoria = elem.getAttribute("data-numero");

    if (categoria === parseInt(numCategoria)) {
      elem.setAttribute("disabled", true);
    }
  });
}

function apagarBtnCategoriaNombre(categoria) {
  btnsCategorias.forEach((elem) => {
    const numCategoria = elem.getAttribute("data-category");
    if (categoria === numCategoria) {
      elem.setAttribute("disabled", true);
    }
  });
}

export { apagarBtnCategoria, apagarBtnCategoriaNombre };
