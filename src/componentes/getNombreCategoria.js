function getNombreCategoria(numCategoria) {
  switch (numCategoria) {
    case 26:
      return "Celebridades";
      break;
    case 23:
      return "Historia";
      break;
    case 21:
      return "Deporte";
      break;
    case 27:
      return "Animales";
      break;
    case 22:
      return "Geografía";
      break;
    default:
      break;
  }
}

function traducirCategoria(category) {
  switch (category) {
    case "Celebrities":
      return "Celebridades";
      break;
    case "History":
      return "Historia";
      break;
    case "Sports":
      return "Deporte";
      break;
    case "Animals":
      return "Animales";
      break;
    case "Geography":
      return "Geografía";
      break;
    default:
      break;
  }
}

export { getNombreCategoria, traducirCategoria };
