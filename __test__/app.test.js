const app = require("../App");
const request = require("supertest");
describe("GET /api", () => {
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
