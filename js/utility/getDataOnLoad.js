const apiKey =
    import.meta.env.VITE_API_KEY; //API Key hidden

export const getDataOnLoad = async(candCID) => {
    const summaryURL = `https://www.opensecrets.org/api/?method=candSummary&cid=${candCID}&cycle=2022&apikey=${apiKey}&output=json`;

    const summaryResponse = await (await fetch(summaryURL)).json();
    // const summaryData = await summaryResponse.json();
    const summaryDataFormat = summaryResponse.response.summary['@attributes'];
    // summaryDataFormat output: cand_name, cid, cycle, state, party, chamber, first_elected, next_election, spent, cash_on_hand, debt, origin, source, last_updated, total

    const resultGrid = document.getElementById('result-grid');
    const resultItem = document.createElement('div');
    resultItem.classList.add('result-grid__item');

    const cImageURL = `https://cdn1.opensecrets.org/congress-members/photos/${summaryDataFormat.cid}.jpg`;

    resultItem.innerHTML = `
    <search-result-profile
      result-img="${cImageURL}"
      result-name="Name: ${summaryDataFormat.cand_name}"
      result-position="Chamber: ${summaryDataFormat.chamber}"
      result-state="State: ${summaryDataFormat.state}"
      result-party="Party: ${summaryDataFormat.party}"
    ></search-result-profile>
  `;

    resultGrid.append(resultItem);
};