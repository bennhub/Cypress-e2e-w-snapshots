module.exports = {
    baseUrl: 'https://digital:notwebchannel@www.wcstage.telus.com',
    userAgent: 'HS Cypress Staging',
    env: {
      AUTH_PROXY_URL: 'https://api.stage.digital.telus.com',
      ELIGIBILITY_API_URL: 'https://digital:notwebchannel@www.wcstage.telus.com/shop/eligibility/backend/api/eligibility',
      ELIGIBILITY_URL: 'https://digital:notwebchannel@www.wcstage.telus.com/shop/eligibility',
      CREDENTIALS: 'digital:notwebchannel',
      SESSION_TOKEN_NAME: 'SessionTokenStage',
      OAUTH_TOKEN_NAME: 'OAuth2TokenStage',
      LOGOUT_LINK: 'https://api.stage.digital.telus.com/oauth2/logout'
    }
  };