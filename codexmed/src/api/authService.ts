export const loginRequest = async (_email: string, _password: string) => {
  // TODO: connect to API
  return { token: 'fake-token', role: 'admin' }
}

export const registerRequest = async (_email: string, _password: string) => {
  // TODO: send registration data
  return { success: true }
}
