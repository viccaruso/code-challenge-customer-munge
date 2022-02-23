// IMPORT MODULES under test here:
import {
  addAllAges,
  getAverageCoolFactor,
  greetUsers,
  greetUsersOverAge60,
} from '../functions.js';
import customers from './data.js';

const { test, skip } = QUnit;

test('greetUsers', (expect) => {
  const expected = [
    "Hello Suzi Summerson!",
    "Hello Boot Penton!",
    "Hello Cacilia Caramuscia!",
    "Hello Mattie Mungane!",
    "Hello Kathryne Gostling!",
    "Hello Cristal Oakman!",
    "Hello Mahmud Shingler!",
    "Hello Kenny Kepe!",
    "Hello Elena Guisby!",
    "Hello Irene Kynvin!",
    "Hello Debor Lashmar!",
    "Hello Christian Churchill!",
    "Hello Fawnia Cowdroy!",
    "Hello Eli Perigo!",
    "Hello Parker Goodboddy!",
    "Hello Leeland Bonome!",
    "Hello Lowe Driussi!",
    "Hello Tracy Chidlow!",
    "Hello Dimitri Ochiltree!",
    "Hello Sascha Yanin!",
    "Hello Emmaline Horribine!",
    "Hello Erinna Swires!",
    "Hello Erroll Reade!",
    "Hello Ilaire O'Codihie!",
    "Hello Anatol Gulley!",
    "Hello Celestine Teodori!",
    "Hello Brandi Sawdon!",
    "Hello Atlanta Oneil!",
    "Hello Salomone Merkle!",
    "Hello Alta Sulter!",
    "Hello Marys Allsopp!",
    "Hello Marilin Ellacott!",
    "Hello Alexandros Cornell!",
    "Hello Matti Haller!",
    "Hello Henryetta Cheng!",
    "Hello Gennie Saura!",
    "Hello Sherwynd Wiggans!",
    "Hello Thorn McMeekin!",
    "Hello Esmaria Moukes!",
    "Hello Dietrich Gladebeck!",
    "Hello Karol Rosa!",
    "Hello Manya Fodden!",
    "Hello Casi Waterland!",
    "Hello Munroe Walthall!",
    "Hello Tannie Sedman!"
  ]

  const actual = greetUsers(customers);

  expect.deepEqual(actual, expected);
});


test('greetUsersOverAge60', (expect) => {
  const expected = [
    'Hello Suzi Summerson!',
    'Hello Boot Penton!',
    'Hello Cacilia Caramuscia!',
    'Hello Cristal Oakman!',
    'Hello Kenny Kepe!',
    'Hello Dimitri Ochiltree!',
    "Hello Ilaire O'Codihie!",
    'Hello Anatol Gulley!',
    'Hello Salomone Merkle!',
    'Hello Alta Sulter!',
    'Hello Alexandros Cornell!',
    'Hello Thorn McMeekin!',
    'Hello Esmaria Moukes!',
    'Hello Munroe Walthall!',
    'Hello Tannie Sedman!'
  ];

  const actual = greetUsersOverAge60(customers);

  expect.deepEqual(actual, expected);
});

test('addAllAges', (expect) => {
  const expected = 500;
  const sampleData = [
    {
      age: 99
    },
    {
      age: 100
    },
    {
      age: 101
    },
    {
      age: 98
    },
    {
      age: 102
    }
  ]
  const actual = addAllAges(sampleData);

  expect.equal(actual, expected);
});


test('getAverageCoolFactor', (expect) => {
  const expected = 100;
  const sampleData = [
    {
      cool_factor: 99
    },
    {
      cool_factor: 100
    },
    {
      cool_factor: 101
    },
    {
      cool_factor: 98
    },
    {
      cool_factor: 102
    }
  ]
  const actual = getAverageCoolFactor(sampleData);

  expect.equal(actual, expected);
});

skip('getTotalOfEachGender', (expect) => {
  const expected = true;

  const actual = greetUsers();

  expect.equal(actual, expected);
});

skip('getGenderBreakdownOfFordOwners', (expect) => {
  const expected = true;

  const actual = greetUsers();

  expect.equal(actual, expected);
});

skip('getGenderBreakdownOfEachCar', (expect) => {
  const expected = true;

  const actual = greetUsers();

  expect.equal(actual, expected);
});

skip('getAllCoolFactorsOfEachCar', (expect) => {
  const expected = true;

  const actual = greetUsers();

  expect.equal(actual, expected);
});

skip('getAverageCoolFactorOfEachCar', (expect) => {
  const expected = true;

  const actual = greetUsers();

  expect.equal(actual, expected);
});

skip('getAverageCoolFactor', (expect) => {
  const expected = true;

  const actual = greetUsers();

  expect.equal(actual, expected);
});

skip('getAverageCoolFactor', (expect) => {
  const expected = true;

  const actual = greetUsers();

  expect.equal(actual, expected);
});

skip('getCoolFactorsByAgeBracket', (expect) => {
  const expected = true;

  const actual = greetUsers();

  expect.equal(actual, expected);
});

skip('getAverageCoolFactorByAgeBracket', (expect) => {
  const expected = true;

  const actual = true;

  expect.equal(actual, expected);
});