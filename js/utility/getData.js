const apiKey = import.meta.env.VITE_API_KEY; //API Key hidden

export const getData = async (candCID) => {
  const summaryURL = `https://www.opensecrets.org/api/?method=candSummary&cid=${candCID}&cycle=2022&apikey=${apiKey}&output=json`;

  const summaryResponse = await (await fetch(summaryURL)).json();
  // const summaryData = await summaryResponse.json();
  const summaryDataFormat = summaryResponse.response.summary['@attributes'];
  // summaryDataFormat output: cand_name, cid, cycle, state, party, chamber, first_elected, next_election, spent, cash_on_hand, debt, origin, source, last_updated, total

  const contribURL = `https://www.opensecrets.org/api/?method=candContrib&cid=${candCID}&cycle=2022&apikey=${apiKey}&output=json`;

  const contribResponse = await fetch(contribURL);
  const contribData = await contribResponse.json();
  const contribDataFormat = contribData.response.contributors.contributor;
  // contribDataFormat output: org_name, total, pacs, indivs

  const resultGrid = document.getElementById('result-grid');
  const resultItem = document.createElement('div');
  resultItem.classList.add('result-grid__item');

  const cImageURL = `https://cdn1.opensecrets.org/congress-members/photos/${summaryDataFormat.cid}.jpg`;

  resultItem.innerHTML = `
    <search-result
      result-img="${cImageURL}"
      result-name="${summaryDataFormat.cand_name}"
      result-position="${summaryDataFormat.chamber}"
      result-state="${summaryDataFormat.state}"
      result-party="${summaryDataFormat.party}"
      contrib1="${contribDataFormat[0]['@attributes'].org_name} ($${contribDataFormat[0]['@attributes'].total})"
      contrib2="${contribDataFormat[1]['@attributes'].org_name} ($${contribDataFormat[1]['@attributes'].total})"
      contrib3="${contribDataFormat[2]['@attributes'].org_name} ($${contribDataFormat[2]['@attributes'].total})"
      result-link="https://www.opensecrets.org/members-of-congress/summary?cid=${summaryDataFormat.cid}"
    ></search-result>
  `;

  resultGrid.append(resultItem);
};
