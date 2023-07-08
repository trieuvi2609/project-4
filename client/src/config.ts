// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'ju27532v9c'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-xd1f2jizq0y7u0nh.us.auth0.com', // Auth0 domain
  clientId: 'bYHUbIz1jU7ckjAAgLSYNH8hj6gJwA8n', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}

export const limitPagination = 2
