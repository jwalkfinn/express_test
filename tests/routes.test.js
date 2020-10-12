const request = require('supertest')
const app = require('../src/app')
const models = require("../src/models")

const OLD_ENV = process.env;
beforeEach(() => {
  jest.resetModules()
  process.env = { ...OLD_ENV };
  process.env.NODE_ENV = "test";
});

afterAll(() => {
  process.env = OLD_ENV;
});


describe('get ID endpoint', () => {
  it('should return an ID', async () => {
    const res1 = await request(app)
      .get('/id')
      .send({})

    const res2 = await request(app)
      .get('/id')
      .send({})

    expect(res1.statusCode).toEqual(200)
    expect(typeof res1.body["id"]).toBe('string')

    expect(res2.statusCode).toEqual(200)
    expect(typeof res2.body["id"]).toBe('string')

    expect(res1).not.toEqual(res2)
  })
})


describe('get User endpoint', () => {
  var uniqid = require('uniqid');
  var id = uniqid();
  beforeAll(async () => {
    await models.User.create({
      id: id,
      firstName: "Testley",
      lastName: "Testington",
      email: "test@email.com"
    })
  });
  it('should return a user', async () => {
    const res = await request(app)
      .get(`/user?id=${id}`)
      .send()

    expect(res.statusCode).toEqual(200)
    expect(res.body["id"]).toEqual(id);
    expect(res.body["firstName"]).toEqual("Testley");
  })
})


describe('post User endpoint', () => {
  it('should create a user', async () => {
    var uniqid = require('uniqid');
    var data = {
      id: uniqid(),
      firstName: "Testor",
      lastName: "Testington",
      email: uniqid().concat("@email.com")
    }
    const res = await request(app)
      .post('/user')
      .send(data)

    expect(res.statusCode).toEqual(200)
  })
})
