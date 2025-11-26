const { createRemoteGitGateway } = require('netlify-cms-backend-git-gateway')

exports.handler = createRemoteGitGateway({
  // Твой GitHub repo
  repo: 'andreykaa/barsky-remont-site',
  branch: 'main',
  // Интеграция с Auth0 (OAuth)
  auth: {
    type: 'oauth',
    provider: 'auth0',
    domain: 'dev-xxx.eu.auth0.com',  // ← ВСТАВЬ СВОЙ DOMAIN ИЗ AUTH0
    clientID: '344170084750-40d6v756e7k8qfbd9e31nm8uv4auvv0n',  // ← ТВОЙ CLIENT ID
    redirectURI: 'https://stone-dekor-stroyka-remont.netlify.app/.netlify/functions/auth-callback'
  }
})