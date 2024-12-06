export async function getAllLogements() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) {
      throw new Error('Erreur lors de la récupérations des logements');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}
