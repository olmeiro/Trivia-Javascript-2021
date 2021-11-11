const btnsCategorias = document.querySelectorAll(".btn-category");

export function categoriaAleatoria() {
  const listaCategorias = [];

  btnsCategorias.forEach((elem) => {
    listaCategorias.push(parseInt(elem.dataset.numero));
  });

  const categoriaSistema =
    listaCategorias[Math.floor(Math.random() * listaCategorias.length)];

  const cantidad = 5;
  const categoria = categoriaSistema;
  const dificultad = "easy";

  return { cantidad, categoria, dificultad };
}
