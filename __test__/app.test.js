const app = require("../App");
const request = require("supertest");

describe("GET /api", () => {
  it("should be available on /api ", async () => {
    const response = await request(app).get("/api");
expect(response.status).toBe(200);
  });
});
