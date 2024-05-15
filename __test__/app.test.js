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
    expect(response.body.message).toBe(
      "User validation failed: name: Path `name` is required."
    );
  });
});
describe("GET api/users", () => {
  test("should respond with 200 status", async () => {
    const response = await request(app).get("/api/users");
    expect(response.status).toBe(200);
  });
  test("should respond with 200 status", async () => {
    const response = await request(app).get("/api/users");
    expect(response.status).toBe(200);
    response.body.forEach((object) => {
      expect(object).toMatchObject({
        name: expect.any(String),
        email: expect.any(String),
        phoneNumber: expect.any(String),
        bookings: expect.any(Number),
        admin: expect.any(Boolean),
      });
    });
  });
});
describe("GET api/users/:id", () => {
  test("should respond with 200 status", async () => {
    const response = await request(app).get(
      "/api/users/65f1a9537f0d99630a4eeb39"
    );
    expect(response.status).toBe(200);
  });
  test("should respond with the correct user", async () => {
    const response = await request(app).get(
      "/api/users/65f1ec7c05a4cb8494a93fb2"
    );
    const user = {
      name: "Amelia",
      email: "AmeliaHernandez@gmail.com",
      phoneNumber: "07891234568",
      bookings: 2,
      admin: false,
    };
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(user);
  });
  test("should respond with the correct user", async () => {
    const response = await request(app).get("/api/users/notExist");
    const user = {
      name: "Amelia",
      email: "AmeliaHernandez@gmail.com",
      phoneNumber: "07891234568",
      bookings: 2,
      admin: false,
    };
    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'Cast to ObjectId failed for value "notExist" (type string) at path "_id" for model "User"'
    );
  });
});
describe.skip("DELETE api/users/:id", () => {
  test("should respond with 200 status", async () => {
    const response = await request(app).delete(
      "/api/users/65f1addbf045f7c63eedfbf7"
    );
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      name: expect.any(String),
      email: expect.any(String),
      phoneNumber: expect.any(String),
      bookings: expect.any(Number),
      admin: expect.any(Boolean),
    });
  });
});
describe("POST api/appointments", () => {
  test("should create a new appointment in the database", async () => {
    const newAppointment = {
      user: {
        name: "John Doe",
        email: "john.doe@example.com",
        phoneNumber: "07898076401",
        bookings: 1,
        admin: false,
      },
      createdAt: "",
      time: "10:00",
      bookedFor: "2024-04-25T10:00:00.000Z",
    };
    const response = await request(app)
      .post("/api/appointments")
      .send(newAppointment);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      user: {
        name: expect.any(String),
        email: expect.any(String),
        phoneNumber: expect.any(String),
        bookings: expect.any(Number),
        admin: expect.any(Boolean),
      },
      createdAt: expect.any(String),
      time: expect.any(String),
      bookedFor: expect.any(String),
    });
  });
  test("should response with 400 status when invalid data", async () => {
    const newAppointment = {
      user: {
        name: 1,
        email: "john.doe@example.com",
        phoneNumber: "07898076401",
        bookings: 1,
        admin: 1,
      },
      createdAt: "2024-03-09T15:30:00.000Z",
      time: "10:00",
    };
    const response = await request(app)
      .post("/api/appointments")
      .send(newAppointment);
    expect(response.status).toBe(400);

    expect(response.body.message).toBe(
      "Appointment validation failed: bookedFor: Path `bookedFor` is required."
    );
  });
});
describe("GET api/appointments", () => {
  test("should respons with all appointments", async () => {
    const response = await request(app).get("/api/appointments");

    response.body.forEach((appointment) => {
      expect(appointment).toMatchObject({
        user: {
          name: expect.any(String),
          email: expect.any(String),
          phoneNumber: expect.any(String),
          bookings: expect.any(Number),
          admin: expect.any(Boolean),
        },
        createdAt: expect.any(String),
        time: expect.any(String),
      });
    });
  });
  test("should respond with 200 status", async () => {
    const response = await request(app).get("/api/appointments");
    expect(response.status).toBe(200);
  });
});
