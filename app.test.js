const app = require("./App")
const request = require("supertest")

describe('OAuth2 Authentication', () => {
    it('should return 302 for unauthenticated user trying to access protected route', async () => {
      const response = await request(app).get('/protected-route');
      expect(response.status).toBe(302); // 302 is the HTTP status code for redirection (unauthenticated)
    });
  ;
    it('should return 200 for authenticated user trying to access protected route', async () => {
      // Perform authentication (replace with actual authentication steps)
      const authenticatedUser = await authenticateUser(); // Implement this function to authenticate a user
  
      const response = await request(app)
        .get('/protected-route')
        .set('Authorization', `Bearer ${authenticatedUser.accessToken}`); // Add OAuth2 access token to request header
      expect(response.status).toBe(200); // 200 is the HTTP status code for success
    });
  });