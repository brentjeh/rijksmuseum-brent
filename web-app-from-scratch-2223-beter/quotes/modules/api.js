const endpoint = 'https://www.rijksmuseum.nl/api/en/collection';
const apiKey = 'RCZaMbZZ';

export async function fetchPaintings() {
  try {
    const response = await fetch(`${endpoint}?key=${apiKey}&format=json&type=painting&ps=48`);
    const data = await response.json();
    return data.artObjects;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
