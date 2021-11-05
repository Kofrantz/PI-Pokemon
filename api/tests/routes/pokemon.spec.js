/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemons, Types, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemons.sync({ force: true })
    .then(() => Pokemons.create(pokemon)));
  describe('GET /pokemons', () => {
    it('should get 200', (done) => {
      agent.get('/pokemons').then(r => {
        expect(r.statusCode).toBe(200);
        done()
      })
    });
  });
});

describe('Types routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Types.sync({ force: true })
    .then(() => Types.create(pokemon)));
  describe('GET /types', () => {
    it('should get 200', (done) => agent.get('/types').expect(200));
  });
});
