// server/api/your-api-endpoint.ts
export default defineEventHandler(async event => {
  const body = await readBody(event)
  const captchaResponse = await verifyHCaptchaToken(body.token)

  // return an error when hCaptcha detects a bot
  return captchaResponse.success
})
