export async function getPreguntas(amount, category, difficulty, ronda) {
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

  const response = await fetch(url);
  const data = response.json();

  return data;
}
