//Задача - 19. Коллекция значений свойства
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя(ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const arrow = [];
//   for (const product of products) {
//     if (product[propName]) {
//       arrow.push(product[propName]);
//     }
//   }
//   return arrow;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// Задача 20
// Общая стоимость товара Задание Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
// Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//   for (const product of products) {
//     // console.log(product.price);
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;

//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

// Задание 31
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));

// Задание 32
// Функция addOverNum() считает сумму всех аргументов.Измени параметры и тело функции addOverNum() так,
// чтобы она считала сумму только тех аргументов, которые больше чем заданное число.Это число должно быть первым параметром функции.

// function addOverNum(firstNumber, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }
//   return total;
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// Задание 35
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books.
// Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   getBooks() {
//     return this.books;
//   },
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);

//     return this.books;
//     // Change code above this line
//   },
// };
// console.log(bookShelf.getBooks());
// bookShelf.updateBook("Haze", "Dungeon chronicles");
// console.log(bookShelf.getBooks());
// bookShelf.updateBook("The last kingdom", "Dune");
// console.log(bookShelf.getBooks());

// Задание 39
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion === potionName) {
//         const ind = this.potions.indexOf(potion);
//         this.potions.splice(ind, 1);
//       }
//     }
//   },
// };

// Задание 40
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const { potions } = this;
//     for (const el of potions) {
//       if (el === oldName) {
//         const ind = potions.indexOf(oldName);
//         potions.splice(ind, 1, newName);
//       }
//     }
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad.potions);

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const el of this.potions) {
//       if (el.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
// addPotion(newPotion) {
//   for (const el of this.potions) {
//     if (el.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//   }
//   this.potions.push(newPotion);
// },

//   removePotion(potionName) {
//     const { potions } = this;

//     for (const el of potions) {
//       if (el.name === potionName) {
//         const ind = potions.indexOf(el);
//         potions.splice(ind, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;

//     for (const el of potions) {
//       if (el.name === oldName) {
//         el.name = newName;
//         console.log(el);
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// atTheOldToad.getPotions();
// console.log(atTheOldToad.getPotions());

// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad.getPotions());

// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// console.log(atTheOldToad.getPotions());
