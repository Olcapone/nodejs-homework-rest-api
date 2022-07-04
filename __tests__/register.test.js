const request = require('supertest')
const {app} = require('../app')


describe('Register', function () {
    test('resolve registration', () => {
      request(app)
        .post('/api/auth/signup')
        .send({
          name: "Testmango",
          email: "mangoCat1212121@test.ua",
          password: "11111"
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
    });

  test('reject registration', () => {
    request(app)
      .post('/api/auth/signup')
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, {"message": "error message"})
  });
})
