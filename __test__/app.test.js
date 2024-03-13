const app = require("../App");
const request = require("supertest");
describe.skip("GET /api", () => {
  it("should be available on /api ", async () => {
    const response = await request(app).get("/api");
    expect(response.status).toBe(200);
  });
  it("should include expected data in the response", async () => {
    const expectedData = {
      "GET /api/": {
        description:
          "serves up a json representation of all the available endpoints of the api",
      },
    };
    const response = await request(app).get("/api");
    expect(response.body).toEqual(expectedData);
  });
});
describe("POST api/users", () => {
  test("should should response with 201 status when create a new user", async () => {
    const newUser = {
      name: "Karo",
      email: "Karobararigmail.com",
      phoneNumber: "07898076401",
      bookings: 1,
      admin: false,
    };
    const response = await request(app).post("/api/users").send(newUser);
    expect(response.status).toBe(201);
  });
  test("should post a user and respond with a new user", async () => {
    const newUser = {
      name: "Karo",
      email: "Karobararigmail.com",
      phoneNumber: "07898076401",
      bookings: 1,
      admin: false,
    };
    const response = await request(app).post("/api/users").send(newUser);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      name: expect.any(String),
      email: expect.any(String),
      phoneNumber: expect.any(String),
      bookings: expect.any(Number),
      admin: expect.any(Boolean),
    });
  });
  test("should respond with 400 status when passed a bad user", async () => {
    const newUser = {
      email: "Karobararigmail.com",
      phoneNumber: "07898076401",
      bookings: 1,
      admin: false,
    };
    const response = await request(app).post("/api/users").send(newUser);
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("User validation failed: name: Path `name` is required.");
  });
});

