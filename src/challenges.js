// const menu = require('./mcDonalds');
// const guestsDatabase = require('./data.json');

// =================================================
// PARTE 1
// =================================================

// Requisito 1 - Crie uma função que divida uma frase
const splitSentence = (phrase) => phrase.split(' ');

// Requisito 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol
const footballPoints = (wins, ties) => (wins * 3) + ties;

// Requisito 3 - Crie uma função que adiciona músicas em uma playlist
let playlist = [];
const addMusics = (artistName, musicName, musicTime) => playlist
  .push({ artist: artistName, music: musicName, musicTime });

// =================================================
// PARTE 2
// =================================================

// Requisito 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria
const moreExpensive = (data, category) => {
  let productsName = '';
  let productsPrice = data[category][0].price;
  for (let i = 0; i < data[category].length; i += 1) {
    if (data[category][i].price >= productsPrice) {
      productsName = data[category][i].name;
      productsPrice = data[category][i].price;
    }
  }
  return `O produto mais caro é: ${productsName}, que custa: R$${productsPrice.toFixed(2)}.`;
};

// Requisito 5 - Crie uma função que verifica se um determinado item já existe
const checkItem = (data, category, item) => {
  for (let i = 0; i < data[category].length; i += 1) {
    if (data[category][i].name === item) {
      return true;
    }
  }
  return false;
};

// Requisito 6 - Crie uma função que adiciona um novo item caso ele ainda não exista
const addNewItem = (data, category, item, ...infosNewItem) => {
  if (checkItem(data, category, item)) {
    return `O produto: "${item}" já existe!`;
  }
  const newItem = { name: item,
    price: infosNewItem[0],
    ingredients: infosNewItem[1],
    calories: infosNewItem[2] };

  data[category].push(newItem);

  return newItem;
};
// Requisito 7 - Crie uma função que conta a quantidade de pessoas por gênero
const counterGender = (data) => {
  gender = {
    male: 0,
    female: 0,
  };
  data.guests.forEach((person) => {
    if (person.gender === 'male') {
      gender.male += 1;
    } else {
      gender.female += 1;
    }
  });
  return gender;
};

// =================================================
// PARTE 3
// =================================================

// Requisito 8 - Crie uma função que retorna os elementos de um determinado estado
const filterState = (data, state) => data.guests.filter((person) => person.address.state === state);

// Requisito 9 - Crie uma função que altera a propriedade `picture`
const changePicture = (data, link) => {
  for (let i = 0; i < data.guests.length; i += 1) {
    data.guests[i].picture = link;
  }
  return data.guests;
};

// AvgFunction Suport
const averageAge = (arrayNums) => {
  if (arrayNums.length === 0) {
    return 0;
  }
  const sum = arrayNums.reduce((total, num) => total + num, 0);
  const media = sum / arrayNums.length;
  return media;
};

// mapCountries Suport
const mapCountries = (data) => {
  const countries = [];
  data.guests.forEach((person) => {
    if (!countries.includes(person.country)) {
      countries.push(person.country);
    }
  });
  return countries.sort();
};

// Requisito 10 - Crie um função que gera um relatório
const generateReport = (data) => {
  const report = {
    totalGuests: data.guests.length,
    totalGender: counterGender(data),
    avgAge: parseFloat(averageAge(data.guests.map((person) => person.age)).toFixed(2)),
    countries: mapCountries(data) };
  return report;
};

// Não modifique as linhas abaixo
module.exports = {
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  addMusics: typeof addMusics === 'function' ? addMusics : (() => {}),
  playlist: typeof playlist === 'undefined' ? [] : playlist,
  moreExpensive: typeof moreExpensive === 'function' ? moreExpensive : (() => {}),
  checkItem: typeof checkItem === 'function' ? checkItem : (() => {}),
  addNewItem: typeof addNewItem === 'function' ? addNewItem : (() => {}),
  counterGender: typeof counterGender === 'function' ? counterGender : (() => {}),
  filterState: typeof filterState === 'function' ? filterState : (() => {}),
  changePicture: typeof changePicture === 'function' ? changePicture : (() => {}),
  generateReport: typeof generateReport === 'function' ? generateReport : (() => {}),
};
