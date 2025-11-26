exports.handler = async (event, context) => {
  // Получаем токен от Auth0
  const { code } = event.queryStringParameters;
  if (!code) {
    return { statusCode: 400, body: 'No code' };
  }

  // Обмен кода на токен (используй fetch к Auth0)
  const tokenResponse = await fetch(`https://dev-xxx.eu.auth0.com/oauth/token`, {  // ← ТВОЙ DOMAIN
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: '344170084750-40d6v756e7k8qfbd9e31nm8uv4auvv0n',  // ТВОЙ CLIENT ID
      client_secret: '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',  // ТВОЙ SECRET
      code,
      redirect_uri: 'https://stone-dekor-stroyka-remont.netlify.app/.netlify/functions/auth-callback'
    })
  });

  const token = await tokenResponse.json();
  // Передай токен в Decap CMS через postMessage (для фронтенда)
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: token.access_token })
  };
}