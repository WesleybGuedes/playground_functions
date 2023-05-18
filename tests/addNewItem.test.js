const menu = require('../src/mcDonalds');
const { addNewItem } = require('../src/challenges');

describe('6 - Crie uma função que adiciona um novo item caso ele ainda não exista', () => {
  it('Retorne "true" quando a categoria for "sideDishes" e o nome do elemento for "McFritas Gigante"', () => {
    let item = addNewItem(menu, 'sideDishes', 'McFritas Gigante', 76.90, ['muita batata', 'muito sal'], 78976);
    expect(menu.sideDishes.includes(item)).toBe(true);
  });

  it('Retorne "true" quando a categoria for "sandwiches" e o nome do elemento for "X-Poderosas"', () => {
    let item = addNewItem(menu, 'sandwiches', 'X-Poderosas', 108.75, ['açúcar', 'tempero', 'tudo o que há de bom', 'elemento X'], 99999);
    expect(menu.sandwiches.includes(item)).toBe(true);
  });

  it('Retorne "O produto: "Torta de Banana" já existe!" quando a categoria for "desserts" e o nome do elemento for "Torta de Banana"', () => {
    let item = addNewItem(menu, 'desserts', 'Torta de Banana', 6.90, ['banana', 'massa crocante'], 222);
    expect(item).toBe('O produto: "Torta de Banana" já existe!');
  });
});
