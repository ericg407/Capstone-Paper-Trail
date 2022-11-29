const comparatorHigh = (a, b) => {
  if (Number(a.dataset.total) < Number(b.dataset.total)) return 1;
  if (Number(a.dataset.total) > Number(b.dataset.total)) return -1;

  return 0;
};

const comparatorLow = (a, b) => {
  if (Number(a.dataset.total) > Number(b.dataset.total)) return 1;
  if (Number(a.dataset.total) < Number(b.dataset.total)) return -1;

  return 0;
};

export const sortDataHigh = () => {
  const totals = document.querySelectorAll('.result-grid__item');
  console.log(totals);

  let totalsArray = Array.from(totals);
  console.log(totalsArray);

  let sorted = totalsArray.sort(comparatorHigh);
  sorted.forEach((e) => {
    document.querySelector('#result-grid__inner').appendChild(e);
  });
};

export const sortDataLow = () => {
  const totals = document.querySelectorAll('.result-grid__item');
  console.log(totals);

  let totalsArray = Array.from(totals);
  console.log(totalsArray);

  let sorted = totalsArray.sort(comparatorLow);
  sorted.forEach((e) => {
    document.querySelector('#result-grid__inner').appendChild(e);
  });
};
