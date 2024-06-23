// src/app/okta-config.ts
import OktaAuth from "@okta/okta-auth-js";
export const oktaConfig = {
  clientId: 'HKlfDfglc7SjOsrestM4RjV9nnNYkII3',
  issuer: 'https://dev-ov7d123w753a80md.us.auth0.com/oauth2/default',
  // redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};

export function oktaAuthFactory() {
  return new OktaAuth(oktaConfig);
}
