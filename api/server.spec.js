const request = require("supertest");

const server = require("./server.js");
const db = require("../database/dbConfig.js");

describe("server", function () {

  describe("POST /authentication", function () {
    beforeEach(async () => {
      await db("users").truncate(); // empty the table and reset the id back to 1
    });

    it("return 201 on success", function () {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "Fred", password: "secret" })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    
  });
});
