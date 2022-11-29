const apiKey = import.meta.env.VITE_API_KEY; // API Key Hidden

export const getLegislators = async (state) => {
  let legisArray = [];

  const legisURL = `https://www.opensecrets.org/api/?method=getLegislators&id=${state}&apikey=${apiKey}&output=json`;

  const legisResponse = await (await fetch(legisURL)).json();
  const legisData = legisResponse.response.legislator;

  for (let i = 0; i < legisData.length; i++) {
    legisArray[i] = legisData[i]['@attributes'];
  }

  return legisArray;
};
