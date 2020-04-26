const request = require("supertest");

const server = require("./server.js");
const db = require("../database/dbConfig.js");

describe("server", function () {
  describe("POST /register", function () {
    beforeEach(async () => {
      await db("users").truncate(); // empty the table and reset the id back to 1
    });

    it("return 201 on success", function () {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "Fred", password: "secret" })
        .then((res) => {
          expect(res.status).toBe(201);
        });
    });

    it('should return a message saying "user created successfully"', function () {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "Fred", password: "secret" })
        .then((res) => {
          expect(res.body.message).toBe("user created successfully");
        });
    });

    describe("POST /login", function () {
      beforeEach(async () => {
        await db("users").truncate(); // empty the table and reset the id back to 1
      });

        it("add user to the db", async function () {
        // const userName = "Fred";
        // const passWord = "secret";

        // const present = await db("users").where({ username: userName });
        // expect(present).toHaveLength(0);

        await request(server)
            .post("/api/auth/login")
            .send({ username: "Fred" })
            .then((res) => {
            expect(res.body.errMessage).toBe("You shall not pass!");
            });
       

        });

        it("confirm that response type is application/json", async function() {

            await request(server)
            .post("/api/auth/login")
            .send({ username: "Tim", password: "secret" })
            .then((res) => {
            expect(res.type).toEqual("application/json");
            });
        })


        // const inserted = await db("users"); //.where({ name: hobbitName });
        // expect(inserted).toHaveLength(2);
    });
  });
});
